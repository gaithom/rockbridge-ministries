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

// Helper function to get user IP (simplified for demo)
function getUserIP() {
  // In a real application, this would be handled by the backend
  // For demo purposes, we'll use a placeholder
  return '192.168.1.' + Math.floor(Math.random() * 255);
}

// Simulate user registration (for demo purposes)
export function simulateUserRegistration(userInfo) {
  import('./notificationService').then(({ notifyUserRegistration, initializeNotifications }) => {
    initializeNotifications();
    notifyUserRegistration({
      ...userInfo,
      ip: getUserIP(),
      userAgent: navigator.userAgent
    });
  });
}