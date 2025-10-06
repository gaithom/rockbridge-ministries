// Enhanced auth service with user management integration
// NOTE: This is for demo purposes. Use proper backend authentication in production.

const TOKEN_KEY = 'rbm_admin_authed';
const USER_KEY = 'rbm_current_user';

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
  sessionStorage.removeItem(USER_KEY);
}

// Enhanced authentication functions
export function getCurrentUser() {
  const userData = sessionStorage.getItem(USER_KEY);
  return userData ? JSON.parse(userData) : null;
}

export function loginWithEmail(email, password) {
  if (!email || !password) {
    return { ok: false, error: 'Email and password required' };
  }

  // For demo purposes, check against default admin credentials
  if (email === 'admin@rockbridge.org' && password === getAdminPassword()) {
    const userData = {
      id: 1,
      name: 'Admin User',
      email: 'admin@rockbridge.org',
      role: 'admin',
      loginTime: new Date().toISOString()
    };
    
    sessionStorage.setItem(TOKEN_KEY, 'true');
    sessionStorage.setItem(USER_KEY, JSON.stringify(userData));
    
    return { ok: true, user: userData };
  }

  return { ok: false, error: 'Invalid credentials' };
}

export function hasPermission(permission) {
  const user = getCurrentUser();
  if (!user) return false;

  // Basic permission check based on role
  const adminPermissions = ['User Management', 'System Settings', 'Manage Content', 'View Dashboard'];
  const editorPermissions = ['Manage Content', 'View Dashboard'];
  const viewerPermissions = ['View Dashboard'];

  switch (user.role) {
    case 'admin':
      return adminPermissions.includes(permission);
    case 'editor':
      return editorPermissions.includes(permission);
    case 'viewer':
      return viewerPermissions.includes(permission);
    default:
      return false;
  }
}

export function canAccessAdminPanel() {
  const user = getCurrentUser();
  return user && ['admin', 'editor'].includes(user.role);
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