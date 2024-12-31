<script lang="ts">
  import { onMount } from 'svelte';
  import type { Invite } from '~/types';
  import ConfirmModal from './ConfirmModal.svelte';
  import NoInviteModal from './NoInviteModal.svelte';

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
    invite = invites.find(inv => inv.invite === inviteId);
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

<button
  type="button"
  class="btn btn-primary w-full sm:w-auto"
  on:click={handleConfirmClick}
>
  <span class="flex items-center justify-center">
    Confirmar Asistencia
    <span class="ml-2">→</span>
  </span>
</button>

{#if showModal && invite}
  <ConfirmModal {invite} on:close={() => showModal = false} />
{/if}

{#if showNoInviteModal}
  <NoInviteModal on:close={() => showNoInviteModal = false} />
{/if}
