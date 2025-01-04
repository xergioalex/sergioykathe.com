<script lang="ts">
  import InviteHandler from './InviteHandler.svelte';
  import type { Invite } from '~/types.d';
  import { onMount } from 'svelte';
  import { getInviteId } from '~/lib/invite';

  export let id: string | undefined = undefined;

  let invite: Invite | undefined;
  let isLoading = true;

  async function init() {
    try {
      const inviteId = getInviteId();
      const response = await fetch('/data/invites.json');
      const data = await response.json();
      invite = data.invites.find((inv: Invite) => inv.code === inviteId);
    } catch (error) {
      console.error('Error loading invite:', error);
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    init();
  });
</script>

{#if !isLoading}
  <section class="relative not-prose scroll-mt-[72px]" {...id ? { id } : {}}>
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 bg-primary opacity-10" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 text-center">
      <div class="max-w-3xl mx-auto">
        <div class="mb-10">
          <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
            SÉ PARTE DE NUESTRA HISTORIA
          </h2>
          <p class="text-xl text-muted dark:text-slate-300">
            Tu presencia hará de este día algo verdaderamente inolvidable
          </p>
        </div>

        <div class="flex flex-col items-center gap-8">
          <div class="w-24 h-1 bg-primary rounded-full" />

          <div
            class="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 md:p-10 w-full max-w-2xl transform transition duration-500 hover:scale-105"
          >
            <InviteHandler showFullInfo={true} />
          </div>

          <div class="w-24 h-1 bg-primary rounded-full" />
        </div>

        <div class="mt-10 text-muted dark:text-slate-400">
          <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos</p>
        </div>
      </div>
    </div>
  </section>
{/if}
