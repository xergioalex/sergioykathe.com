<script lang="ts">
  import { onMount } from 'svelte';
  import { analytics } from '~/lib/analytics';
  import type { Invite } from '~/types.d';
  import { getInviteId } from '~/lib/invite';

  let dialog: HTMLDialogElement;
  let songName = '';
  let songArtist = '';
  let songNotes = '';
  let isSuccess = false;
  let isLoading = false;
  let invite: Invite | undefined;

  // Configuración del formulario de Google
  const FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSfBNmQYetQjkbnGOfwhD6QB8CxhRkXTGr7oa9Y8XgRRdBGe8Q/formResponse';
  const FORM_ENTRIES = {
    songName: 'entry.242037522',
    songArtist: 'entry.287920603',
    songNotes: 'entry.1265334069',
    inviteId: 'entry.734514235',
    name: 'entry.1876986626',
  };

  async function loadInvites() {
    try {
      const response = await fetch('/data/invites.json');
      const data = await response.json();
      return data.invites as Invite[];
    } catch (error) {
      console.error('Error loading invites:', error);
      return [];
    }
  }

  async function init() {
    try {
      const invites = await loadInvites();
      const inviteId = getInviteId();
      invite = invites.find((inv) => inv.code === inviteId);
    } catch (error) {
      console.error('Error initializing:', error);
    }
  }

  function closeModal() {
    isSuccess = false;
    resetForm();
    dialog?.close();
  }

  function resetForm() {
    isSuccess = false;
    songName = '';
    songArtist = '';
    songNotes = '';
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isLoading = true;

    try {
      const formData = new FormData();
      formData.append(FORM_ENTRIES.songName, songName);
      formData.append(FORM_ENTRIES.songArtist, songArtist);
      formData.append(FORM_ENTRIES.songNotes, songNotes);

      if (invite) {
        formData.append(FORM_ENTRIES.inviteId, invite.code);
        formData.append(FORM_ENTRIES.name, invite.name);
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

      // Track successful song submission
      analytics.capture('song_suggestion_submitted', {
        song_name: songName,
        artist: songArtist,
        has_notes: Boolean(songNotes),
      });

      isSuccess = true;
    } catch (error) {
      console.error('Error al enviar el formulario:', error);

      // Track failed submissions
      analytics.capture('song_suggestion_failed', {
        error: error.message,
        song_name: songName,
        artist: songArtist,
      });
    } finally {
      isLoading = false;
    }
  }

  function handleClick(event: MouseEvent) {
    if (event.target === dialog) {
      closeModal();
    }
  }

  onMount(() => {
    init();
    document.addEventListener('openSongModal', () => {
      resetForm();
      dialog?.showModal();
    });

    return () => {
      document.removeEventListener('openSongModal', () => {
        dialog?.showModal();
      });
    };
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  class="hidden bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-50 [&[open]]:flex items-center justify-center w-full h-full fixed inset-0"
  on:click={handleClick}
>
  <div
    role="dialog"
    aria-labelledby="modal-title"
    aria-modal="true"
    class="bg-white rounded-lg w-full max-w-[600px] mx-0 sm:mx-4 max-h-[90vh] overflow-hidden dark:bg-slate-900"
  >
    <div class="p-4 border-b flex justify-between items-center">
      <h3 id="modal-title" class="text-lg font-semibold flex items-center gap-2">
        <span class="text-primary">🎵</span>
        Sugerir canciones
      </h3>
      <button type="button" class="text-gray-500 hover:text-gray-700" on:click={closeModal} aria-label="Cerrar diálogo">
        ✕
      </button>
    </div>
    <div class="p-6">
      {#if !isSuccess}
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
            <label for="songArtist" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Artista</label>
            <input
              type="text"
              id="songArtist"
              bind:value={songArtist}
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white"
              placeholder="Ej: Juan Gabriel"
            />
          </div>
          <div>
            <label for="songNotes" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Notas adicionales o link
            </label>
            <textarea
              id="songNotes"
              bind:value={songNotes}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white resize-none"
              rows="3"
              placeholder="Ej: Link de YouTube o algún comentario sobre la canción"
            >
            </textarea>
          </div>
          <div class="flex justify-center">
            <button type="submit" disabled={isLoading} class="btn btn-primary">
              {#if isLoading}
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Enviando...
              {:else}
                Enviar Sugerencia
              {/if}
            </button>
          </div>
        </form>
      {:else}
        <div class="text-center space-y-6">
          <div class="space-y-2">
            <span class="text-5xl">🎵</span>
            <h4 class="text-xl font-semibold text-primary">¡Gracias por tu sugerencia!</h4>
            <p class="text-gray-600 dark:text-gray-400">Tu canción ha sido agregada a nuestra lista de reproducción.</p>
          </div>
          <div class="flex gap-4 justify-center">
            <button type="button" class="btn btn-secondary" on:click={resetForm}> Agregar otra canción </button>
            <button type="button" class="btn btn-primary" on:click={closeModal}> Cerrar </button>
          </div>
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
