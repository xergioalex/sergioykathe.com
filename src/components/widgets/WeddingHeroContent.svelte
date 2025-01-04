<script lang="ts">
  import type { Invite } from '~/types.d';

  export let invite: Invite | undefined;
  export let title: string;
  export let subtitle: string;
  export let content: string;
  export let tagline: string;
</script>

<div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
  {#if tagline}
    <p
      class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter mb-4"
    >
      {tagline}
    </p>
  {/if}

  <h1
    class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"
  >
    {invite ? `${invite.name}` : title}
  </h1>

  <div class="max-w-3xl mx-auto lg:max-w-none">
    <p
      class="text-xl text-muted mb-6 dark:text-slate-300 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"
    >
      {invite
        ? invite.partyInvitations === 0
          ? 'Queremos compartir contigo la alegría de nuestro matrimonio y hacerte partícipe de este momento tan especial.'
          : 'Nos llena de alegría invitarte a ser parte de este momento tan especial en nuestras vidas.'
        : subtitle}
    </p>

    <p
      class="text-xl text-secondary mb-6 dark:text-slate-300 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"
    >
      {@html invite
        ? invite.partyInvitations === 0
          ? '<b>Fecha:</b> 22 de marzo de 2025'
          : `<b>Fecha:</b> 22 de marzo de 2025<br><b>Número de invitados:</b> ${invite.partyInvitations}`
        : content}

      {#if invite && invite.stayInvitations > 0}
        <br /><b>Cupos de alojamiento:</b> {invite.stayInvitations}
      {/if}
    </p>

    <div
      class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"
    >
      <a href="#rsvp" class="btn btn-primary w-full sm:w-auto">
        {invite?.partyInvitations === 0 ? 'Ver detalles' : 'Confirmar asistencia'}
        <span class="ml-2">→</span>
      </a>
      <a href="#evento" class="btn w-full sm:w-auto">Más información</a>
    </div>
  </div>
</div>
