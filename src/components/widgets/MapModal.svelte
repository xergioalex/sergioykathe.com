<script lang="ts">
  /// <reference types="@types/google.maps" />
  import { onMount } from 'svelte';

  let isOpen = false;
  let mapElement: HTMLElement;
  let googleMapsLoaded = false;
  let modalContainer: HTMLDivElement;

  const GOOGLE_MAPS_API_KEY = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

  const events = [
    {
      title: 'Ceremonia Principal',
      location: 'Iglesia San José',
      coordinates: {
        lat: 4.80934,
        lng: -75.69164,
        zoom: 17,
      },
    },
    {
      title: 'Fiesta de Boda',
      location: 'Finca San Francisco',
      coordinates: {
        lat: 4.83632,
        lng: -75.76349,
      },
    },
  ];

  let currentLocation = events[0];

  function closeModal() {
    isOpen = false;
  }

  async function loadGoogleMaps() {
    if (typeof window.google === 'undefined') {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          googleMapsLoaded = true;
          resolve(true);
        };
        document.head.appendChild(script);
      });
    }
    return Promise.resolve(true);
  }

  onMount(() => {
    const handler = async (e: CustomEvent<{ index: number }>) => {
      isOpen = true;
      currentLocation = events[e.detail.index];
      if (!googleMapsLoaded) {
        await loadGoogleMaps();
      }
      setTimeout(initMap, 100);
    };

    type MapEventHandler = (_event: CustomEvent<{ index: number }>) => Promise<void>;

    document.addEventListener('openMap', handler as unknown as MapEventHandler);
    return () => document.removeEventListener('openMap', handler as unknown as MapEventHandler);
  });

  function initMap() {
    if (mapElement && isOpen && window.google) {
      const map = new window.google.maps.Map(mapElement, {
        center: { lat: currentLocation.coordinates.lat, lng: currentLocation.coordinates.lng },
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: { lat: currentLocation.coordinates.lat, lng: currentLocation.coordinates.lng },
        map,
        title: currentLocation.title,
      });
    }
  }

  $: if (isOpen && googleMapsLoaded) {
    setTimeout(initMap, 100);
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    bind:this={modalContainer}
    tabindex="-1"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden" role="document">
      <div class="p-4 border-b flex justify-between items-center">
        <h3 id="modal-title" class="text-lg font-semibold">{currentLocation.title}</h3>
        <button class="text-gray-500 hover:text-gray-700" on:click={closeModal} aria-label="Cerrar mapa"> ✕ </button>
      </div>
      <div class="h-[400px]" bind:this={mapElement}></div>
    </div>
  </div>
{/if}
