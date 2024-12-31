export function getInviteId(): string | null {
  // Primero intentamos obtener el invite de la URL
  const params = new URLSearchParams(window.location.search);
  const inviteId = params.get('invite');

  if (inviteId) {
    // Si hay un invite en la URL, lo guardamos en localStorage
    localStorage.setItem('inviteId', inviteId);
    return inviteId;
  }

  // Si no hay invite en la URL, intentamos obtenerlo del localStorage
  return localStorage.getItem('inviteId');
}

export function ensureInviteInUrl() {
  const inviteId = localStorage.getItem('inviteId');
  if (!inviteId) return;

  // Si ya existe el parámetro en la URL, no hacemos nada
  const params = new URLSearchParams(window.location.search);
  if (params.get('invite') === inviteId) return;

  // Agregamos o actualizamos el parámetro invite en la URL
  params.set('invite', inviteId);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

export function addInviteToUrl(url: string): string {
  const inviteId = getInviteId();
  if (!inviteId) return url;

  // Si la URL es un hash, lo manejamos de manera especial
  if (url.startsWith('#')) {
    const params = new URLSearchParams(window.location.search);
    return `${url}${params.toString() ? '?' + params.toString() : ''}`;
  }

  // Para URLs completas
  const urlObj = new URL(url, window.location.origin);
  urlObj.searchParams.set('invite', inviteId);
  return urlObj.pathname + urlObj.search + urlObj.hash;
} 
