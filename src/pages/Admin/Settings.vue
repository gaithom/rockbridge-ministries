<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Add padding-top to account for fixed navbar -->
    <div class="flex-1 pt-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="mb-8 relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-gradient-to-b from-gray-800 to-gray-900">
          <!-- Decorative wave divider -->
          <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg class="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                    class="fill-current text-amber-600 opacity-20"></path>
            </svg>
          </div>
          
          <div class="px-6 py-8 sm:px-8 relative z-10">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                    <i class="fas fa-cog text-white text-xl"></i>
                  </div>
                  <h1 class="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
                    Settings
                  </h1>
                </div>
                <p class="text-amber-100/90 max-w-2xl pl-1">Manage your profile, system configuration, and user permissions.</p>
              </div>
              <div class="mt-4 sm:mt-0 flex space-x-3">
                <button @click="saveAllSettings" class="inline-flex items-center px-4 py-2.5 border border-amber-100/30 text-sm font-medium rounded-lg text-amber-100 bg-amber-600/20 hover:bg-amber-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-all duration-200 backdrop-blur-sm">
                  <i class="fas fa-save mr-2"></i>
                  Save All Changes
                </button>
              </div>
            </div>
          </div>
          
          <!-- Bottom wave -->
          <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg class="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                    class="fill-current text-amber-600 opacity-20"></path>
            </svg>
          </div>
        </div>

        <!-- Settings Tabs -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200">
          <!-- Tab Navigation -->
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8 px-6">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200',
                  activeTab === tab.id 
                    ? 'border-amber-500 text-amber-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                ]"
              >
                <i :class="[tab.icon, 'mr-2']"></i>
                {{ tab.name }}
              </button>
            </nav>
          </div>

          <!-- Tab Content -->
          <div class="p-6">
            <!-- Profile Settings Tab -->
            <div v-if="activeTab === 'profile'" class="space-y-8">
              <!-- Profile Picture Section -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Profile Picture</h3>
                <div class="flex items-center space-x-6">
                  <div class="relative">
                    <img 
                      :src="profileSettings.avatar || '/api/placeholder/150/150'" 
                      :alt="profileSettings.name"
                      class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    >
                    <button @click="triggerFileUpload" class="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
                      <i class="fas fa-camera text-sm"></i>
                    </button>
                    <input ref="fileInput" type="file" accept="image/*" @change="handleFileUpload" class="hidden">
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">{{ profileSettings.name }}</h4>
                    <p class="text-sm text-gray-500">{{ profileSettings.email }}</p>
                    <button @click="triggerFileUpload" class="mt-2 text-sm text-amber-600 hover:text-amber-500 font-medium">
                      Change Photo
                    </button>
                  </div>
                </div>
              </div>

              <!-- Personal Information Section -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      v-model="profileSettings.name" 
                      type="text" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Enter your full name"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      v-model="profileSettings.email" 
                      type="email" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Enter your email"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      v-model="profileSettings.phone" 
                      type="tel" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Enter your phone number"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input 
                      v-model="profileSettings.jobTitle" 
                      type="text" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Enter your job title"
                    >
                  </div>
                </div>
              </div>

              <!-- Security Section -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Security</h3>
                <div class="space-y-6">
                  <!-- Two-Factor Authentication -->
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                      <p class="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input v-model="profileSettings.twoFactorEnabled" type="checkbox" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                    </label>
                  </div>

                  <!-- Change Password -->
                  <div class="border-t border-gray-200 pt-6">
                    <h4 class="text-sm font-medium text-gray-900 mb-4">Change Password</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input 
                          v-model="passwordForm.current" 
                          type="password" 
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                          placeholder="Enter current password"
                        >
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input 
                          v-model="passwordForm.new" 
                          type="password" 
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                          placeholder="Enter new password"
                        >
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                        <input 
                          v-model="passwordForm.confirm" 
                          type="password" 
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                          placeholder="Confirm new password"
                        >
                      </div>
                    </div>
                    <button @click="changePassword" class="mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- System Settings Tab -->
            <div v-if="activeTab === 'system'" class="space-y-8">
              <!-- Site Configuration -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Site Configuration</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                    <input 
                      v-model="systemSettings.siteTitle" 
                      type="text" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Rockbridge Ministries"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Site Tagline</label>
                    <input 
                      v-model="systemSettings.siteTagline" 
                      type="text" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Transforming Lives Through Faith"
                    >
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                    <textarea 
                      v-model="systemSettings.siteDescription" 
                      rows="3" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Brief description of your ministry..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Theme Settings -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Theme Settings</h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Default Theme</label>
                    <select v-model="systemSettings.defaultTheme" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500">
                      <option value="light">Light Mode</option>
                      <option value="dark">Dark Mode</option>
                      <option value="auto">Auto (System Preference)</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                    <div class="flex space-x-2">
                      <button 
                        v-for="color in themeColors" 
                        :key="color.name"
                        @click="systemSettings.primaryColor = color.value"
                        :class="[
                          'w-8 h-8 rounded-full border-2 transition-all',
                          systemSettings.primaryColor === color.value 
                            ? 'border-gray-900 scale-110' 
                            : 'border-gray-300 hover:scale-105'
                        ]"
                        :style="{ backgroundColor: color.value }"
                        :title="color.name"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Notification Settings -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Notification Settings</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="text-sm font-medium text-gray-900">Email Notifications</h4>
                      <p class="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input v-model="systemSettings.emailNotifications" type="checkbox" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                    </label>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="text-sm font-medium text-gray-900">SMS Notifications</h4>
                      <p class="text-sm text-gray-500">Receive notifications via SMS</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input v-model="systemSettings.smsNotifications" type="checkbox" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                    </label>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h4 class="text-sm font-medium text-gray-900">Push Notifications</h4>
                      <p class="text-sm text-gray-500">Receive push notifications in browser</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input v-model="systemSettings.pushNotifications" type="checkbox" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- User Management Tab -->
            <div v-if="activeTab === 'users'" class="space-y-8">
              <!-- User List -->
              <div class="bg-gray-50 rounded-lg p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-medium text-gray-900">User Management</h3>
                  <button @click="showAddUserModal = true" class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors">
                    <i class="fas fa-plus mr-2"></i>
                    Add User
                  </button>
                </div>
                
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="h-10 w-10 flex-shrink-0">
                              <img class="h-10 w-10 rounded-full" :src="user.avatar || '/api/placeholder/40/40'" :alt="user.name">
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                              <div class="text-sm text-gray-500">{{ user.email }}</div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <select v-model="user.role" @change="updateUserRole(user)" class="text-sm border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                            <option value="viewer">Viewer</option>
                          </select>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span :class="[
                            'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                            user.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          ]">
                            {{ user.status }}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ formatDate(user.lastActive) }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button @click="toggleUserStatus(user)" :class="[
                            'px-3 py-1 rounded-md text-xs font-medium transition-colors',
                            user.status === 'active' 
                              ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                              : 'bg-green-100 text-green-700 hover:bg-green-200'
                          ]">
                            {{ user.status === 'active' ? 'Disable' : 'Enable' }}
                          </button>
                          <button @click="deleteUser(user)" class="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md text-xs font-medium transition-colors">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Permissions Management -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Role Permissions</h3>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permission</th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Editor</th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Viewer</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="permission in permissions" :key="permission.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {{ permission.name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          <input 
                            v-model="permission.roles.admin" 
                            type="checkbox" 
                            class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                          >
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          <input 
                            v-model="permission.roles.editor" 
                            type="checkbox" 
                            class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                          >
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          <input 
                            v-model="permission.roles.viewer" 
                            type="checkbox" 
                            class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Message -->
        <div v-if="successMessage" class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2">
          <i class="fas fa-check-circle"></i>
          <span>{{ successMessage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { isAuthenticated } from '../../services/authService'
import { useRouter } from 'vue-router'

const router = useRouter()

if (!isAuthenticated()) {
  router.replace({ path: '/admin/login' })
}

// State
const activeTab = ref('profile')
const successMessage = ref('')
const showAddUserModal = ref(false)
const fileInput = ref(null)

// Tabs configuration
const tabs = [
  { id: 'profile', name: 'Profile Settings', icon: 'fas fa-user' },
  { id: 'system', name: 'System Settings', icon: 'fas fa-cog' },
  { id: 'users', name: 'User Management', icon: 'fas fa-users' }
]

// Profile Settings
const profileSettings = reactive({
  name: 'Admin User',
  email: 'admin@rockbridge.org',
  phone: '+1 (555) 123-4567',
  jobTitle: 'Administrator',
  avatar: null,
  twoFactorEnabled: false
})

// Password form
const passwordForm = reactive({
  current: '',
  new: '',
  confirm: ''
})

// System Settings
const systemSettings = reactive({
  siteTitle: 'Rockbridge Ministries',
  siteTagline: 'Transforming Lives Through Faith',
  siteDescription: 'A ministry dedicated to spreading the gospel and serving communities worldwide.',
  defaultTheme: 'light',
  primaryColor: '#f59e0b',
  emailNotifications: true,
  smsNotifications: false,
  pushNotifications: true
})

// Theme colors
const themeColors = [
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Green', value: '#10b981' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Indigo', value: '#6366f1' }
]

// Users data
const users = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@rockbridge.org',
    role: 'admin',
    status: 'active',
    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000),
    avatar: null
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@rockbridge.org',
    role: 'editor',
    status: 'active',
    lastActive: new Date(Date.now() - 5 * 60 * 60 * 1000),
    avatar: null
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@rockbridge.org',
    role: 'viewer',
    status: 'inactive',
    lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000),
    avatar: null
  }
])

// Permissions data
const permissions = ref([
  {
    id: 1,
    name: 'View Dashboard',
    roles: { admin: true, editor: true, viewer: true }
  },
  {
    id: 2,
    name: 'Manage Content',
    roles: { admin: true, editor: true, viewer: false }
  },
  {
    id: 3,
    name: 'User Management',
    roles: { admin: true, editor: false, viewer: false }
  },
  {
    id: 4,
    name: 'System Settings',
    roles: { admin: true, editor: false, viewer: false }
  },
  {
    id: 5,
    name: 'View Notifications',
    roles: { admin: true, editor: true, viewer: true }
  },
  {
    id: 6,
    name: 'Manage Notifications',
    roles: { admin: true, editor: false, viewer: false }
  }
])

// Methods
function triggerFileUpload() {
  fileInput.value?.click()
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    // In a real app, you'd upload this to a server
    const reader = new FileReader()
    reader.onload = (e) => {
      profileSettings.avatar = e.target.result
      showSuccess('Profile picture updated successfully!')
    }
    reader.readAsDataURL(file)
  }
}

function changePassword() {
  if (passwordForm.new !== passwordForm.confirm) {
    alert('New passwords do not match!')
    return
  }
  if (passwordForm.new.length < 8) {
    alert('Password must be at least 8 characters long!')
    return
  }
  
  // In a real app, you'd validate the current password and update it
  showSuccess('Password updated successfully!')
  passwordForm.current = ''
  passwordForm.new = ''
  passwordForm.confirm = ''
}

function updateUserRole(user) {
  showSuccess(`${user.name}'s role updated to ${user.role}`)
}

function toggleUserStatus(user) {
  user.status = user.status === 'active' ? 'inactive' : 'active'
  showSuccess(`${user.name} ${user.status === 'active' ? 'enabled' : 'disabled'}`)
}

function deleteUser(user) {
  if (confirm(`Are you sure you want to delete ${user.name}?`)) {
    const index = users.value.findIndex(u => u.id === user.id)
    if (index > -1) {
      users.value.splice(index, 1)
      showSuccess(`${user.name} deleted successfully`)
    }
  }
}

function saveAllSettings() {
  // In a real app, you'd save all settings to the backend
  showSuccess('All settings saved successfully!')
}

function showSuccess(message) {
  successMessage.value = message
  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
}

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}

onMounted(() => {
  // Load settings from localStorage or API
  const savedSettings = localStorage.getItem('adminSettings')
  if (savedSettings) {
    const settings = JSON.parse(savedSettings)
    Object.assign(profileSettings, settings.profile || {})
    Object.assign(systemSettings, settings.system || {})
  }
})
</script>



