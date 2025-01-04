<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import type { Invite } from '~/types.d';

  export let invite: Invite;

  const dispatch = createEventDispatcher();
  let dialog: HTMLDialogElement;
  let isSuccess = false;
  let isLoading = false;
  let partyAttendance = invite.partyInvitations;
  let stayAttendance = invite.stayInvitations;
  let message = '';

  $: if (partyAttendance === 0) {
    stayAttendance = 0;
  }

  // Configuración del formulario de Google
  const FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSfPN3oQllE8Sc50IbpbxW4WkFsODtgeznrpPQ6xyGg1SftYdA/formResponse';
  const FORM_ENTRIES = {
    inviteId: 'entry.23826224',
    name: 'entry.1899043457',
    partyInvitations: 'entry.427068344',
    partyAttendance: 'entry.446464576',
    stayInvitations: 'entry.424554911',
    stayAttendance: 'entry.38093445',
    message: 'entry.802664838',
  };

  function closeModal() {
    isSuccess = false;
    dialog?.close();
    dispatch('close');
  }

  // Cargar estado previo si existe
  onMount(() => {
    // Abrir el modal
    dialog?.showModal();

    // Limpiar el mensaje
    message = '';

    // Cargar estado previo si existe
    const savedState = localStorage.getItem(`confirmation-${invite.code}`);
    if (savedState) {
      const state = JSON.parse(savedState);
      partyAttendance = state.partyAttendance;
      stayAttendance = state.stayInvitations;
    }
  });

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isLoading = true;

    try {
      const formData = new FormData();
      formData.append(FORM_ENTRIES.inviteId, invite.code);
      formData.append(FORM_ENTRIES.name, invite.name);
      formData.append(FORM_ENTRIES.partyInvitations, invite.partyInvitations.toString());
      formData.append(FORM_ENTRIES.partyAttendance, partyAttendance.toString());
      formData.append(FORM_ENTRIES.stayInvitations, invite.stayInvitations.toString());
      formData.append(FORM_ENTRIES.stayAttendance, stayAttendance.toString());
      formData.append(FORM_ENTRIES.message, message.trim());

      await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: new URLSearchParams(formData as any),
      });

      isSuccess = true;
      // Guardar estado en localStorage
      localStorage.setItem(
        `confirmation-${invite.code}`,
        JSON.stringify({
          partyAttendance,
          stayInvitations: stayAttendance,
          message,
          lastUpdate: new Date().toISOString()
        })
      );
      // Emitir evento con el estado actualizado
      dispatch('confirmationUpdate', {
        partyAttendance,
        stayInvitations: stayAttendance,
        message,
        lastUpdate: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      isLoading = false;
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  class="hidden bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-50 [&[open]]:flex items-center justify-center w-full h-full fixed inset-0"
  on:click={({ target }) => target === dialog && closeModal()}
>
  <div class="bg-white rounded-lg w-full max-w-[600px] mx-0 sm:mx-4 dark:bg-slate-900">
    <div class="p-4 border-b flex justify-between items-center">
      <h3 class="text-base font-semibold flex items-center gap-2">
        <span class="text-primary">💌</span>
        Confirmar asistencia
      </h3>
      <button class="text-gray-500" on:click={closeModal}>✕</button>
    </div>
    <div class="p-4">
      {#if !isSuccess}
        <div class="space-y-4">
          <div class="text-center">
            <h4 class="text-2xl font-semibold mb-3">¡Hola, {invite.name}!</h4>
            <p class="text-gray-600 dark:text-gray-400 mt-1 text-lg">
              Nos encantaría que nos acompañes en este día tan especial
              {#if invite.stayInvitations > 0}
                <span class="block mt-2"> Además, tienes la opción de alojarte en la finca </span>
              {/if}
            </p>
          </div>
          <form class="space-y-6" on:submit={handleSubmit}>
            <div class="space-y-2">
              <label for="partyAttendance" class="block text-center text-base text-gray-700 dark:text-gray-300">
                ¿Cuántas personas confirmas que asistirán?
                <span class="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                  (De las {invite.partyInvitations}
                  {invite.partyInvitations === 1 ? 'plaza reservada' : 'plazas reservadas'})
                </span>
              </label>
              <select
                id="partyAttendance"
                bind:value={partyAttendance}
                required
                class="mt-4 mx-auto block w-48 text-center rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-base py-2"
              >
                {#each [...Array(invite.partyInvitations + 1).keys()] as i}
                  <option value={i}>{i} {i === 1 ? 'persona' : 'personas'}</option>
                {/each}
              </select>
            </div>

            {#if invite && invite.stayInvitations > 0 && partyAttendance > 0}
              <div class="space-y-2 mt-6">
                <label for="stayAttendance" class="block text-center text-base text-gray-700 dark:text-gray-300">
                  ¿Cuántas personas se alojarán en la finca?
                  <span class="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                    (Dispones de {invite.stayInvitations}
                    {invite.stayInvitations === 1 ? 'plaza' : 'plazas'} para alojamiento)
                  </span>
                </label>
                <select
                  id="stayAttendance"
                  bind:value={stayAttendance}
                  required
                  class="mt-4 mx-auto block w-48 text-center rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-base py-2"
                >
                  {#each [...Array(Math.min(partyAttendance, invite.stayInvitations) + 1).keys()] as i}
                    <option value={i}>{i} {i === 1 ? 'persona' : 'personas'}</option>
                  {/each}
                </select>
              </div>
            {/if}

            <div class="space-y-2 mt-6">
              <label for="message" class="block text-center text-base text-gray-700 dark:text-gray-300">
                ¿Quieres dejarles un mensaje a los novios? (opcional)
              </label>
              <textarea
                id="message"
                bind:value={message}
                placeholder="Escribe tu mensaje aquí..."
                class="mt-2 w-full px-4 py-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-base resize-none hover:border-primary transition-colors duration-200"
                rows="3"
              ></textarea>
            </div>

            <div class="flex justify-center mt-6">
              <button type="submit" disabled={isLoading} class="btn btn-primary">
                {#if isLoading}
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                {/if}
                {isLoading ? 'Enviando...' : 'Confirmar asistencia'}
              </button>
            </div>
          </form>
        </div>
      {:else}
        <div class="text-center space-y-4">
          <div class="flex justify-center items-center gap-2">
            <span class="text-5xl">✨</span>
            <span class="text-5xl">💝</span>
            <span class="text-5xl">✨</span>
          </div>
          <h4 class="text-2xl font-script text-primary">¡Gracias por confirmar!</h4>
          <p class="text-gray-600 dark:text-gray-400">
            {partyAttendance === 0
              ? 'Lamentamos que no puedas acompañarnos en este día tan especial'
              : partyAttendance === 1
                ? 'Nos alegra mucho saber que nos acompañarás en este día tan especial'
                : `Nos alegra mucho saber que nos acompañarán ${partyAttendance} personas en este día tan especial`
            }
          </p>
          {#if invite && invite.stayInvitations > 0 && stayAttendance > 0}
            <p class="text-gray-600 dark:text-gray-400">
              Además, {stayAttendance === 1 ?
                'disfrutarás del alojamiento' :
                `${stayAttendance} personas disfrutarán del alojamiento`} en la finca 🏡
            </p>
          {/if}
          <div class="w-full h-px bg-gray-200 dark:bg-slate-800 my-4"></div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Si necesitas modificar tu confirmación más adelante, podrás hacerlo en cualquier momento
          </p>
          <button class="btn btn-primary mt-6" on:click={closeModal}>
            <span class="flex items-center justify-center gap-2">
              Aceptar
            </span>
          </button>
        </div>
      {/if}
    </div>
  </div>
</dialog>

<style>
  dialog {
    border: none;
    background: transparent;
    padding: 0;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  dialog:not([open]) {
    display: none;
  }

  /* Cerrar el modal al hacer click en el backdrop */
  dialog::backdrop {
    cursor: pointer;
  }
</style>
