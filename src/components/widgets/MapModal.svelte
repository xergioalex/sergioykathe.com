<script lang="ts">
  /// <reference types="@types/google.maps" />
  import { onMount } from 'svelte';
  import MapPinIcon from '../icons/MapPinIcon.svelte';

  let isOpen = false;
  let mapElement: HTMLElement;
  let googleMapsLoaded = false;
  let modalContainer: HTMLDivElement;

  const GOOGLE_MAPS_API_KEY = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

  const events = [
    {
      title: 'Ceremonia - Iglesia Nuestra Señora del Carmen (San José)',
      location: 'Iglesia San José',
      coordinates: {
        lat: 4.80934,
        lng: -75.69164,
        zoom: 18,
      },
    },
    {
      title: 'Fiesta (Finca San Francisco)',
      location: 'Finca San Francisco',
      coordinates: {
        lat: 4.83632,
        lng: -75.76349,
        zoom: 15,
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
        zoom: currentLocation.coordinates.zoom,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
      });

      new window.google.maps.Marker({
        position: { lat: currentLocation.coordinates.lat, lng: currentLocation.coordinates.lng },
        map,
        title: currentLocation.title,
      });

      const centerDiv = document.createElement('div');
      const controlButton = document.createElement('button');
      controlButton.style.backgroundColor = '#fff';
      controlButton.style.border = '2px solid #fff';
      controlButton.style.borderRadius = '3px';
      controlButton.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlButton.style.color = 'rgb(25,25,25)';
      controlButton.style.cursor = 'pointer';
      controlButton.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlButton.style.fontSize = '16px';
      controlButton.style.lineHeight = '38px';
      controlButton.style.margin = '8px 0 22px 12px';
      controlButton.style.padding = '0 5px';
      controlButton.style.textAlign = 'center';
      controlButton.textContent = 'Abrir en Google Maps';

      controlButton.addEventListener('click', () => {
        window.open(getGoogleMapsUrl(currentLocation), '_blank');
      });

      centerDiv.appendChild(controlButton);

      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(centerDiv);
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

  function getGoogleMapsUrl(location: (typeof events)[0]) {
    const { lat, lng } = location.coordinates;
    return `https://www.google.com/maps?q=${lat},${lng}`;
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
        <h3 id="modal-title" class="text-lg font-semibold flex items-center gap-2">
          <MapPinIcon />
          {currentLocation.title}
        </h3>
        <button class="text-gray-500 hover:text-gray-700" on:click={closeModal} aria-label="Cerrar mapa"> ✕ </button>
      </div>
      <div class="h-[400px]" bind:this={mapElement}></div>
    </div>
  </div>
{/if}
