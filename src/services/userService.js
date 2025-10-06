// User Management Service
// Handles user operations, roles, and permissions

const LS_USERS = 'rbm_users_v1';
const LS_PERMISSIONS = 'rbm_permissions_v1';
const LS_SETTINGS = 'rbm_settings_v1';

// Default data
const defaultUsers = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@rockbridge.org',
    role: 'admin',
    status: 'active',
    lastActive: new Date().toISOString(),
    avatar: null,
    createdAt: new Date().toISOString(),
    phone: '+254 700 123 456',
    jobTitle: 'System Administrator'
  },
  {
    id: 2,
    name: 'Content Editor',
    email: 'editor@rockbridge.org',
    role: 'editor',
    status: 'active',
    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    avatar: null,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    phone: '+254 700 123 457',
    jobTitle: 'Content Manager'
  },
  {
    id: 3,
    name: 'Ministry Viewer',
    email: 'viewer@rockbridge.org',
    role: 'viewer',
    status: 'active',
    lastActive: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    avatar: null,
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    phone: '+254 700 123 458',
    jobTitle: 'Ministry Coordinator'
  }
];

const defaultPermissions = [
  {
    id: 1,
    name: 'View Dashboard',
    description: 'Access to admin dashboard',
    roles: { admin: true, editor: true, viewer: true }
  },
  {
    id: 2,
    name: 'Manage Content',
    description: 'Create, edit, and delete content',
    roles: { admin: true, editor: true, viewer: false }
  },
  {
    id: 3,
    name: 'User Management',
    description: 'Manage users and their roles',
    roles: { admin: true, editor: false, viewer: false }
  },
  {
    id: 4,
    name: 'System Settings',
    description: 'Access and modify system settings',
    roles: { admin: true, editor: false, viewer: false }
  },
  {
    id: 5,
    name: 'View Notifications',
    description: 'View system notifications',
    roles: { admin: true, editor: true, viewer: true }
  },
  {
    id: 6,
    name: 'Manage Notifications',
    description: 'Create and manage notifications',
    roles: { admin: true, editor: false, viewer: false }
  },
  {
    id: 7,
    name: 'Media Management',
    description: 'Upload and manage media files',
    roles: { admin: true, editor: true, viewer: false }
  },
  {
    id: 8,
    name: 'Export Data',
    description: 'Export system data',
    roles: { admin: true, editor: false, viewer: false }
  }
];

const defaultSettings = {
  profile: {
    name: 'Admin User',
    email: 'admin@rockbridge.org',
    phone: '+254 700 123 456',
    jobTitle: 'System Administrator',
    avatar: null,
    twoFactorEnabled: false
  },
  system: {
    siteTitle: 'ROCKbridge Ministries',
    siteTagline: 'Transforming Lives Through Faith',
    siteDescription: 'A ministry dedicated to spreading the gospel and serving communities in Kenya and beyond.',
    defaultTheme: 'light',
    primaryColor: '#f59e0b',
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    maintenanceMode: false,
    allowRegistration: false
  }
};

// Generic helpers
function load(key, defaultData = []) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      save(key, defaultData);
      return defaultData;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(defaultData) ? (Array.isArray(parsed) ? parsed : defaultData) : parsed;
  } catch (_) {
    save(key, defaultData);
    return defaultData;
  }
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function nextId(list) {
  return list.length ? Math.max(...list.map(item => item.id || 0)) + 1 : 1;
}

// User Management Functions
export function getUsers() {
  return load(LS_USERS, defaultUsers);
}

export function getUserById(id) {
  const users = getUsers();
  return users.find(user => user.id === id);
}

export function createUser(userData) {
  const users = getUsers();
  
  // Check if email already exists
  if (users.some(user => user.email === userData.email)) {
    throw new Error('Email already exists');
  }

  const newUser = {
    id: nextId(users),
    name: userData.name?.trim() || 'New User',
    email: userData.email?.trim() || '',
    role: userData.role || 'viewer',
    status: userData.status || 'active',
    phone: userData.phone?.trim() || '',
    jobTitle: userData.jobTitle?.trim() || '',
    avatar: userData.avatar || null,
    lastActive: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  save(LS_USERS, users);
  return newUser;
}

export function updateUser(id, userData) {
  const users = getUsers();
  const index = users.findIndex(user => user.id === id);
  
  if (index === -1) {
    throw new Error('User not found');
  }

  // Check if email already exists (excluding current user)
  if (userData.email && users.some(user => user.email === userData.email && user.id !== id)) {
    throw new Error('Email already exists');
  }

  users[index] = { ...users[index], ...userData };
  save(LS_USERS, users);
  return users[index];
}

export function deleteUser(id) {
  const users = getUsers();
  const filteredUsers = users.filter(user => user.id !== id);
  
  if (filteredUsers.length === users.length) {
    throw new Error('User not found');
  }

  save(LS_USERS, filteredUsers);
  return true;
}

export function toggleUserStatus(id) {
  const users = getUsers();
  const user = users.find(u => u.id === id);
  
  if (!user) {
    throw new Error('User not found');
  }

  user.status = user.status === 'active' ? 'inactive' : 'active';
  save(LS_USERS, users);
  return user;
}

export function updateUserRole(id, role) {
  const validRoles = ['admin', 'editor', 'viewer'];
  if (!validRoles.includes(role)) {
    throw new Error('Invalid role');
  }

  return updateUser(id, { role });
}

// Permission Management Functions
export function getPermissions() {
  return load(LS_PERMISSIONS, defaultPermissions);
}

export function updatePermissions(permissions) {
  save(LS_PERMISSIONS, permissions);
  return permissions;
}

export function getUserPermissions(role) {
  const permissions = getPermissions();
  return permissions.filter(permission => permission.roles[role] === true);
}

export function hasPermission(userRole, permissionName) {
  const permissions = getPermissions();
  const permission = permissions.find(p => p.name === permissionName);
  return permission ? permission.roles[userRole] === true : false;
}

// Settings Management Functions
export function getSettings() {
  return load(LS_SETTINGS, defaultSettings);
}

export function updateSettings(settings) {
  const currentSettings = getSettings();
  const updatedSettings = {
    ...currentSettings,
    ...settings,
    profile: { ...currentSettings.profile, ...settings.profile },
    system: { ...currentSettings.system, ...settings.system }
  };
  save(LS_SETTINGS, updatedSettings);
  return updatedSettings;
}

export function getProfileSettings() {
  const settings = getSettings();
  return settings.profile || defaultSettings.profile;
}

export function updateProfileSettings(profileData) {
  const settings = getSettings();
  settings.profile = { ...settings.profile, ...profileData };
  save(LS_SETTINGS, settings);
  return settings.profile;
}

export function getSystemSettings() {
  const settings = getSettings();
  return settings.system || defaultSettings.system;
}

export function updateSystemSettings(systemData) {
  const settings = getSettings();
  settings.system = { ...settings.system, ...systemData };
  save(LS_SETTINGS, settings);
  return settings.system;
}

// Password Management
export function changePassword(userId, currentPassword, newPassword) {
  // In a real app, you'd validate the current password against a hash
  // For demo purposes, we'll just simulate the process
  
  if (newPassword.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }

  // Simulate password validation
  if (currentPassword === 'wrongpassword') {
    throw new Error('Current password is incorrect');
  }

  // In a real app, you'd hash the new password and save it
  console.log(`Password changed for user ${userId}`);
  return true;
}

// Activity Tracking
export function updateLastActive(userId) {
  const users = getUsers();
  const user = users.find(u => u.id === userId);
  
  if (user) {
    user.lastActive = new Date().toISOString();
    save(LS_USERS, users);
  }
}

// Data Export/Import
export function exportUserData() {
  return JSON.stringify({
    users: getUsers(),
    permissions: getPermissions(),
    settings: getSettings()
  }, null, 2);
}

export function importUserData(jsonData) {
  try {
    const data = JSON.parse(jsonData);
    
    if (data.users && Array.isArray(data.users)) {
      save(LS_USERS, data.users);
    }
    
    if (data.permissions && Array.isArray(data.permissions)) {
      save(LS_PERMISSIONS, data.permissions);
    }
    
    if (data.settings && typeof data.settings === 'object') {
      save(LS_SETTINGS, data.settings);
    }
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Initialize default data if not exists
export function initializeUserSystem() {
  load(LS_USERS, defaultUsers);
  load(LS_PERMISSIONS, defaultPermissions);
  load(LS_SETTINGS, defaultSettings);
}

// Role validation
export function isValidRole(role) {
  return ['admin', 'editor', 'viewer'].includes(role);
}

// Get role hierarchy (for permission checking)
export function getRoleLevel(role) {
  const levels = { admin: 3, editor: 2, viewer: 1 };
  return levels[role] || 0;
}

export function canManageUser(managerRole, targetRole) {
  return getRoleLevel(managerRole) > getRoleLevel(targetRole);
}
