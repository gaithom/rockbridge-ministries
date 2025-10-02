// Simple client-side auth (for demo/local use only)
// NOTE: This is not secure for production without a backend.

const TOKEN_KEY = 'rbm_admin_authed';

function getAdminPassword() {
  const pw = import.meta.env.VITE_ADMIN_PASSWORD;
  if (!pw) {
    console.warn('[authService] VITE_ADMIN_PASSWORD is not set. Using default dev password. DO NOT USE IN PRODUCTION.');
  }
  return pw || 'admin123';
}

export function isAuthenticated() {
  return sessionStorage.getItem(TOKEN_KEY) === 'true';
}

export function login(password) {
  const expected = getAdminPassword();
  if (!password) return { ok: false, error: 'Password required' };
  const ok = password === expected;
  if (ok) {
    sessionStorage.setItem(TOKEN_KEY, 'true');
  }
  return { ok, error: ok ? null : 'Invalid password' };
}

export function logout() {
  sessionStorage.removeItem(TOKEN_KEY);
}