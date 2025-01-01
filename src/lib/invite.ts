export function getInviteId(): string | null {
  // First, we check if there's an invite parameter in the URL
  const params = new URLSearchParams(window.location.search);
  const inviteId = params.get('invite');

  if (inviteId) {
    // If we find it in the URL, save it to localStorage
    localStorage.setItem('inviteId', inviteId);
    return inviteId;
  }

  // If not in URL, try to get it from localStorage
  const storedInvite = localStorage.getItem('inviteId');
  if (storedInvite) {
    return storedInvite;
  }

  return null;
}

export function cleanInviteFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('invite')) {
    params.delete('invite');
    const newUrl = window.location.pathname + (params.toString() ? `?${params.toString()}` : '') + window.location.hash;
    window.history.replaceState({}, '', newUrl);
  }
}

export function ensureInviteInUrl() {
  // Ya no necesitamos esta función
  return;
}
