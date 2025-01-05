<script lang="ts">
  import { onMount } from 'svelte';
  import type { Invite } from '~/types.d';
  import ConfirmModal from './ConfirmModal.svelte';
  import NoInviteModal from './NoInviteModal.svelte';
  import WeddingHeroContent from './WeddingHeroContent.svelte';
  import { getInviteId } from '~/lib/invite';

  export let showFullInfo = false;
  export let title = '';
  export let subtitle = '';
  export let content = '';
  export let tagline = '';
  export let heroMode = false;

  let invite: Invite | undefined;
  let showModal = false;
  let showNoInviteModal = false;
  let isLoading = true;
  let confirmationState: {
    partyAttendance: number;
    stayInvitations: number;
    message: string;
    lastUpdate: string;
  } | null = null;

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
      if (invite) {
        const savedState = localStorage.getItem(`confirmation-${invite.code}`);
        if (savedState) {
          confirmationState = JSON.parse(savedState);
        }
      }
    } catch (error) {
      console.error('Error initializing:', error);
    } finally {
      isLoading = false;
    }
  }

  function handleConfirmClick() {
    if (invite) {
      showModal = true;
    } else {
      showNoInviteModal = true;
    }
  }

  function handleConfirmationUpdate(event: CustomEvent) {
    confirmationState = event.detail;
  }

  onMount(() => {
    init();
  });
</script>

{#if isLoading}
  <div class="flex justify-center items-center min-h-[200px]">
    <div class="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
  </div>
{:else if heroMode}
  <WeddingHeroContent {invite} {title} {subtitle} {content} {tagline} />
{:else if showFullInfo}
  <div class="space-y-6 opacity-100">
    {#if invite}
      <div class="space-y-4 opacity-100">
        <h3 class="text-2xl font-semibold text-primary">¡Hola, {invite.name}! 👋</h3>
        {#if invite.partyInvitations === 0}
          <div class="space-y-4">
            <p class="text-lg">
              Queremos compartir contigo la alegría de nuestro matrimonio y hacerte partícipe de este momento tan
              especial.
            </p>
            <p class="text-lg text-muted">
              Sabemos que no podrás acompañarnos físicamente, pero tu cariño y buenos deseos estarán con nosotros en
              este día tan especial.
            </p>
          </div>
        {:else}
          <p class="text-lg">
            Tienes {invite.partyInvitations}
            {invite.partyInvitations === 1 ? 'invitación' : 'invitaciones'} para nuestro evento
          </p>
        {/if}
        {#if invite.stayInvitations > 0}
          <p class="text-lg text-primary opacity-100">
            ¡Además estás invitado a quedarte en la finca! Tienes {invite.stayInvitations}
            {invite.stayInvitations === 1 ? 'plaza disponible' : 'plazas disponibles'} para alojamiento.
          </p>
        {/if}
        {#if confirmationState}
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p class="text-green-700 dark:text-green-300">
              Has confirmado {confirmationState.partyAttendance}
              {confirmationState.partyAttendance === 1 ? 'asistente' : 'asistentes'}
              {#if confirmationState.stayInvitations > 0}
                y {confirmationState.stayInvitations} para alojamiento
              {/if}
            </p>
            <p class="text-sm text-green-600 dark:text-green-400 mt-1">
              Última actualización: {new Date(confirmationState.lastUpdate).toLocaleString()}
            </p>
          </div>
        {/if}
        {#if invite.partyInvitations > 0}
          <button type="button" class="btn btn-primary w-full sm:w-auto" on:click={handleConfirmClick}>
            {confirmationState ? 'Actualizar Confirmación' : 'Confirmar mi Asistencia'}
          </button>
        {/if}
      </div>
    {:else}
      <div class="space-y-4">
        <h3 class="text-2xl font-semibold text-primary">¿Tienes una invitación? 💌</h3>
        <p class="text-lg">
          Para confirmar tu asistencia, necesitas usar el enlace de invitación que te proporcionamos.
        </p>
        <p class="text-muted">Si aún no tienes uno, contacta con nosotros para solicitar tu invitación.</p>
        <button type="button" class="btn btn-primary w-full sm:w-auto" on:click={handleConfirmClick}>
          Verificar invitación
        </button>
      </div>
    {/if}
  </div>
{:else}
  <button type="button" class="btn btn-primary w-full sm:w-auto" on:click={handleConfirmClick}>
    <span class="flex items-center justify-center">
      Confirmar asistencia
      <span class="ml-2">→</span>
    </span>
  </button>
{/if}

{#if showModal && invite}
  <ConfirmModal {invite} on:close={() => (showModal = false)} on:confirmationUpdate={handleConfirmationUpdate} />
{/if}

{#if showNoInviteModal}
  <NoInviteModal on:close={() => (showNoInviteModal = false)} />
{/if}
