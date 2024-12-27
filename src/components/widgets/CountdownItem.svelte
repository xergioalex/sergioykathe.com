<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let dateItems = [
    { title: 'Días', amount: '0' },
    { title: 'Horas', amount: '0' },
    { title: 'Minutos', amount: '0' },
    { title: 'Segundos', amount: '0' },
  ];

  const weddingDate = new Date('2025-03-22T16:30:00-05:00');
  let interval: ReturnType<typeof setInterval>;
  let mounted = false;

  function updateCountdown() {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (mounted) {
      dateItems = [
        { title: 'Días', amount: days.toString() },
        { title: 'Horas', amount: hours.toString() },
        { title: 'Minutos', amount: minutes.toString() },
        { title: 'Segundos', amount: seconds.toString() },
      ];
    }
  }

  onMount(() => {
    mounted = true;
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    mounted = false;
    if (interval) clearInterval(interval);
  });
</script>

<div class="countdown-container">
  <div class="flex flex-wrap justify-center -mx-2 text-center">
    {#each dateItems as { amount, title }}
      <div
        class="w-1/4 px-2 mb-4 text-center md:border-r md:last:border-none dark:md:border-slate-500 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter"
      >
        <div
          class="font-heading text-primary text-2xl sm:text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl"
        >
          {amount || '0'}
        </div>
        <div
          class="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-100 lg:text-base"
        >
          {title}
        </div>
      </div>
    {/each}
  </div>
</div>
