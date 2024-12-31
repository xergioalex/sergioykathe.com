<script lang="ts">
  import { onMount } from 'svelte';
  import type { Invite } from '~/types.d';
  import ConfirmModal from './ConfirmModal.svelte';
  import NoInviteModal from './NoInviteModal.svelte';
  import WeddingHeroContent from './WeddingHeroContent.svelte';

  export let showFullInfo = false;
  export let title = '';
  export let subtitle = '';
  export let content = '';
  export let tagline = '';
  export let heroMode = false;

  let invite: Invite | undefined;
  let showModal = false;
  let showNoInviteModal = false;

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
    const invites = await loadInvites();
    const params = new URLSearchParams(window.location.search);
    console.log('--- params ---');
    console.log(params);
    const inviteId = params.get('invite');
    invite = invites.find((inv) => inv.invite === inviteId);
    console.log('--- invite ---');
    console.log(invite);
  }

  function handleConfirmClick() {
    if (invite) {
      showModal = true;
    } else {
      showNoInviteModal = true;
    }
  }

  onMount(() => {
    init();
  });
</script>

{#if heroMode}
  <WeddingHeroContent {invite} {title} {subtitle} {content} {tagline} />
{:else if showFullInfo}
  <div class="space-y-6">
    {#if invite}
      <div class="space-y-4">
        <h3 class="text-2xl font-semibold text-primary">¡Hola {invite.name}! 👋</h3>
        <p class="text-lg">
          Tienes {invite.invitations}
          {invite.invitations === 1 ? 'invitación' : 'invitaciones'} para nuestro evento
        </p>
        {#if invite.stayInvited}
          <p class="text-lg text-primary">
            ¡Además estás invitado a quedarte en la finca! Tienes {invite.stayInvitations}
            {invite.stayInvitations === 1 ? 'plaza' : 'plazas'} disponibles para alojamiento.
          </p>
        {/if}
        <button type="button" class="btn btn-primary w-full sm:w-auto" on:click={handleConfirmClick}>
          Confirmar mi Asistencia
        </button>
      </div>
    {:else}
      <div class="space-y-4">
        <h3 class="text-2xl font-semibold text-primary">¿Tienes una invitación? 💌</h3>
        <p class="text-lg">
          Para confirmar tu asistencia, necesitas usar el enlace de invitación que te proporcionamos.
        </p>
        <p class="text-muted">Si aún no tienes uno, contacta con nosotros para solicitar tu invitación.</p>
        <button type="button" class="btn btn-primary w-full sm:w-auto" on:click={handleConfirmClick}>
          Verificar Invitación
        </button>
      </div>
    {/if}
  </div>
{:else}
  <button type="button" class="btn btn-primary w-full sm:w-auto" on:click={handleConfirmClick}>
    <span class="flex items-center justify-center">
      Confirmar Asistencia
      <span class="ml-2">→</span>
    </span>
  </button>
{/if}

{#if showModal && invite}
  <ConfirmModal {invite} on:close={() => (showModal = false)} />
{/if}

{#if showNoInviteModal}
  <NoInviteModal on:close={() => (showNoInviteModal = false)} />
{/if}
