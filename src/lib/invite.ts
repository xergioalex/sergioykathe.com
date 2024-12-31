export function getInviteId(): string | null {
  // First, we try to get the invite from the URL
  const params = new URLSearchParams(window.location.search);
  const inviteId = params.get('invite');

  if (inviteId) {
    // If there is an invite in the URL, we save it in localStorage
    localStorage.setItem('inviteId', inviteId);
    return inviteId;
  }

  // If there is no invite in the URL, we try to get it from localStorage
  return localStorage.getItem('inviteId');
}

export function ensureInviteInUrl() {
  const inviteId = localStorage.getItem('inviteId');
  if (!inviteId) return;

  // If the parameter already exists in the URL, we do nothing
  const params = new URLSearchParams(window.location.search);
  if (params.get('invite') === inviteId) return;

  // We add or update the invite parameter in the URL
  params.set('invite', inviteId);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}
