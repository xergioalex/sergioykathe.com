<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let dateItems = [
    { title: 'Días', amount: '0' },
    { title: 'Horas', amount: '0' },
    { title: 'Minutos', amount: '0' },
    { title: 'Segundos', amount: '0' },
  ];

  const weddingDate = new Date('2025-03-22T00:00:00');
  let interval: ReturnType<typeof setInterval>;

  function updateCountdown() {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    dateItems = [
      { title: 'Días', amount: days.toString() },
      { title: 'Horas', amount: hours.toString() },
      { title: 'Minutos', amount: minutes.toString() },
      { title: 'Segundos', amount: seconds.toString() },
    ];
  }

  onMount(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });
</script>

<div class="flex flex-wrap justify-center -m-4 text-center">
  {#each dateItems as { amount, title }}
    <div
      class="p-4 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:last:border-none dark:md:border-slate-500 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter"
    >
      {#if amount}
        <div class="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
          {amount}
        </div>
      {/if}
      {#if title}
        <div class="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-100 lg:text-base">
          {title}
        </div>
      {/if}
    </div>
  {/each}
</div>
