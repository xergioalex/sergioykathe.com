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

  // Configuración del formulario de Google
  const FORM_URL = 'TU_URL_DE_GOOGLE_FORMS';
  const FORM_ENTRIES = {
    inviteId: 'entry.987654321',
    name: 'entry.123456789',
    partyInvitations: 'entry.456789123',
    partyAttendance: 'entry.321654987',
    stayInvitations: 'entry.159753468',
    stayAttendance: 'entry.852963741',
    message: 'entry.147258369',
  };

  function closeModal() {
    isSuccess = false;
    dialog?.close();
    dispatch('close');
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isLoading = true;

    try {
      const formData = new FormData();
      formData.append(FORM_ENTRIES.inviteId, invite.invite);
      formData.append(FORM_ENTRIES.name, invite.name);
      formData.append(FORM_ENTRIES.partyInvitations, invite.partyInvitations.toString());
      formData.append(FORM_ENTRIES.partyAttendance, partyAttendance.toString());
      formData.append(FORM_ENTRIES.stayInvitations, invite.stayInvitations.toString());
      if (invite.stayInvitations > 0) {
        formData.append(FORM_ENTRIES.stayAttendance, stayAttendance.toString());
      }
      if (message.trim()) {
        formData.append(FORM_ENTRIES.message, message);
      }

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
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    dialog?.showModal();
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  class="hidden bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-50 [&[open]]:flex items-center justify-center w-full h-full fixed inset-0"
  on:click={({ target }) => target === dialog && closeModal()}
>
  <div class="bg-white rounded-lg w-full max-w-[600px] mx-4 dark:bg-slate-900">
    <div class="p-4 border-b flex justify-between items-center">
      <h3 class="text-lg font-semibold flex items-center gap-2">
        <span class="text-primary">💌</span>
        Confirmar Asistencia
      </h3>
      <button class="text-gray-500" on:click={closeModal}>✕</button>
    </div>
    <div class="p-6">
      {#if !isSuccess}
        <div class="space-y-6">
          <div class="text-center">
            <h4 class="text-xl font-semibold">¡Hola {invite.name}!</h4>
            <p class="text-gray-600 dark:text-gray-400 mt-2">
              Tienes {invite.partyInvitations}
              {invite.partyInvitations === 1 ? 'invitación' : 'invitaciones'} para nuestro evento
            </p>
          </div>
          <form class="space-y-8" on:submit={handleSubmit}>
            <div class="space-y-2">
              <label for="partyAttendance" class="block text-center text-lg text-gray-700 dark:text-gray-300">
                ¿Cuántas personas asistirán?
              </label>
              <select
                id="partyAttendance"
                bind:value={partyAttendance}
                required
                class="mt-6 mx-auto block w-48 text-center rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-lg py-3"
              >
                {#each [...Array(invite.partyInvitations + 1).keys()] as i}
                  <option value={i}>{i} {i === 1 ? 'persona' : 'personas'}</option>
                {/each}
              </select>
            </div>

            {#if invite && invite.stayInvitations > 0}
              <div class="space-y-2 mt-8">
                <label for="stayAttendance" class="block text-center text-lg text-gray-700 dark:text-gray-300">
                  ¿Cuántas personas se quedarán en la finca?
                </label>
                <select
                  id="stayAttendance"
                  bind:value={stayAttendance}
                  required
                  class="mt-6 mx-auto block w-48 text-center rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-lg py-3"
                >
                  {#each [...Array(Math.min(partyAttendance, invite.stayInvitations) + 1).keys()] as i}
                    <option value={i}>{i} {i === 1 ? 'persona' : 'personas'}</option>
                  {/each}
                </select>
              </div>
            {/if}

            <div class="space-y-2 mt-8">
              <label for="message" class="block text-center text-lg text-gray-700 dark:text-gray-300">
                ¿Quieres dejarles un mensaje a los novios? (opcional)
              </label>
              <textarea
                id="message"
                bind:value={message}
                placeholder="Escribe tu mensaje aquí..."
                class="mt-2 w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-lg"
                rows="4"
              ></textarea>
            </div>

            <div class="flex justify-center mt-10">
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
                {isLoading ? 'Enviando...' : 'Confirmar Asistencia'}
              </button>
            </div>
          </form>
        </div>
      {:else}
        <div class="text-center space-y-4">
          <span class="text-5xl">✨</span>
          <h4 class="text-xl font-semibold">¡Gracias por confirmar!</h4>
          <p class="text-gray-600 dark:text-gray-400">
            Has confirmado la asistencia de {partyAttendance}
            {partyAttendance === 1 ? 'persona' : 'personas'}
          </p>
          {#if invite && invite.stayInvitations > 0 && stayAttendance > 0}
            <p class="text-gray-600 dark:text-gray-400">
              Y {stayAttendance}
              {stayAttendance === 1 ? 'persona se quedará' : 'personas se quedarán'} en la finca
            </p>
          {/if}
          {#if message.trim()}
            <p class="text-gray-600 dark:text-gray-400 mt-4 italic">
              "{message}"
            </p>
          {/if}
          <button class="btn btn-primary mt-4" on:click={closeModal}> Cerrar </button>
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
