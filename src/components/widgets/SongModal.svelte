<script lang="ts">
  import { onMount } from 'svelte';

  let dialog: HTMLDialogElement;
  let songName = '';
  let artist = '';
  let genre = '';

  function closeModal() {
    dialog?.close();
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
    // Aquí manejaremos el envío del formulario
    console.log({ songName, artist, genre });
    closeModal();
  }

  function handleBackdropClick(event: MouseEvent) {
    // Si el click fue en el dialog (backdrop) pero no en su contenido
    if (event.target === dialog) {
      closeModal();
    }
  }

  onMount(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && dialog?.open) {
        closeModal();
      }
    };

    document.addEventListener('openSongModal', () => {
      dialog?.showModal();
    });

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('openSongModal', () => {
        dialog?.showModal();
      });
    };
  });
</script>

<dialog
  bind:this={dialog}
  class="hidden bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-50 [&[open]]:flex items-center justify-center w-full h-full fixed inset-0"
  on:click={handleBackdropClick}
>
  <div class="bg-white rounded-lg w-full max-w-[600px] mx-4 max-h-[90vh] overflow-hidden dark:bg-slate-900" on:click|stopPropagation>
    <div class="p-4 border-b flex justify-between items-center">
      <h3 id="modal-title" class="text-lg font-semibold flex items-center gap-2">
        <span class="text-primary">🎵</span>
        Sugerir Canciones
      </h3>
      <button class="text-gray-500 hover:text-gray-700" on:click={closeModal} aria-label="Cerrar"> ✕ </button>
    </div>
    <div class="p-6">
      <form class="space-y-4" on:submit={handleSubmit}>
        <div>
          <label for="songName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nombre de la Canción
          </label>
          <input
            type="text"
            id="songName"
            bind:value={songName}
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white"
            placeholder="Ej: Amor Eterno"
          />
        </div>
        <div>
          <label for="artist" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Artista</label>
          <input
            type="text"
            id="artist"
            bind:value={artist}
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white"
            placeholder="Ej: Juan Gabriel"
          />
        </div>
        <div>
          <label for="genre" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Género</label>
          <select
            id="genre"
            bind:value={genre}
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white"
          >
            <option value="">Selecciona un género</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="salsa">Salsa</option>
            <option value="merengue">Merengue</option>
            <option value="bachata">Bachata</option>
            <option value="reggaeton">Reggaeton</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Enviar Sugerencia
          </button>
        </div>
      </form>
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
</style>
