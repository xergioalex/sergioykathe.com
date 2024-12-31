<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let dialog: HTMLDialogElement;

  function closeModal() {
    dialog?.close();
    dispatch('close');
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
        <span class="text-primary">ℹ️</span>
        Información
      </h3>
      <button class="text-gray-500" on:click={closeModal}>✕</button>
    </div>
    <div class="p-6">
      <div class="text-center space-y-4">
        <h4 class="text-xl font-semibold">Invitación no encontrada</h4>
        <p class="text-gray-600 dark:text-gray-400">
          Para confirmar tu asistencia, debes usar el enlace de invitación que se te ha proporcionado.
        </p>
        <p class="text-gray-600 dark:text-gray-400">
          Si aún no cuentas con uno, por favor comunícate con Sergio o Katherine para solicitar una invitación.
        </p>
        <button class="btn btn-primary mt-4" on:click={closeModal}> Entendido </button>
      </div>
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

  dialog::backdrop {
    cursor: pointer;
  }
</style>
