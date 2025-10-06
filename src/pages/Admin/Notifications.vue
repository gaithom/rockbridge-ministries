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
                    <i class="fas fa-bell text-white text-xl"></i>
                  </div>
                  <h1 class="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
                    Notifications
                  </h1>
                </div>
                <p class="text-amber-100/90 max-w-2xl pl-1">Stay updated with system activities and user interactions.</p>
              </div>
              <div class="mt-4 sm:mt-0 flex space-x-3">
                <button @click="markAllAsRead" class="inline-flex items-center px-4 py-2.5 border border-amber-100/30 text-sm font-medium rounded-lg text-amber-100 bg-amber-600/20 hover:bg-amber-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-all duration-200 backdrop-blur-sm">
                  <i class="fas fa-check-double mr-2"></i>
                  Mark All as Read
                </button>
                <button @click="clearAllNotifications" class="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-amber-900 bg-white hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 shadow-sm">
                  <i class="fas fa-trash mr-2"></i>
                  Clear All
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

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <!-- New Users Card -->
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600">New Users</p>
                <p class="text-2xl font-bold text-gray-900">{{ newUsersCount }}</p>
                <p class="text-xs text-gray-500 mt-1">Last 30 days</p>
              </div>
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i class="fas fa-user-plus text-green-600 text-xl"></i>
              </div>
            </div>
          </div>

          <!-- Failed Logins Card -->
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600">Failed Logins</p>
                <p class="text-2xl font-bold text-gray-900">{{ failedLoginsCount }}</p>
                <p class="text-xs text-gray-500 mt-1">Last 24 hours</p>
              </div>
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
              </div>
            </div>
          </div>

          <!-- Unread Notifications Card -->
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600">Unread</p>
                <p class="text-2xl font-bold text-gray-900">{{ unreadCount }}</p>
                <p class="text-xs text-gray-500 mt-1">Notifications</p>
              </div>
              <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <i class="fas fa-bell text-amber-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Notifications List -->
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm">
          <div class="px-6 py-4 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <div class="flex items-center space-x-2">
                <select v-model="filterType" class="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-amber-500 focus:border-amber-500">
                  <option value="all">All Types</option>
                  <option value="user_registration">New Users</option>
                  <option value="failed_login">Failed Logins</option>
                  <option value="system">System</option>
                </select>
              </div>
            </div>
          </div>

          <div v-if="filteredNotifications.length === 0" class="p-12 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
            <p class="mt-1 text-sm text-gray-500">You're all caught up! Check back later for new activity.</p>
          </div>

          <ul class="divide-y divide-gray-200">
            <li v-for="notification in filteredNotifications" :key="notification.id" 
                class="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                :class="{ 'bg-blue-50': !notification.read }">
              <div class="flex items-start space-x-3">
                <!-- Icon -->
                <div class="flex-shrink-0">
                  <div :class="getNotificationIconClass(notification.type)" class="w-8 h-8 rounded-full flex items-center justify-center">
                    <i :class="getNotificationIcon(notification.type)" class="text-sm"></i>
                  </div>
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">
                      {{ notification.title }}
                    </p>
                    <div class="flex items-center space-x-2">
                      <span class="text-xs text-gray-500">{{ formatDate(notification.timestamp) }}</span>
                      <button v-if="!notification.read" @click="markAsRead(notification.id)" 
                              class="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                        <i class="fas fa-check text-xs"></i>
                      </button>
                    </div>
                  </div>
                  <p class="mt-1 text-sm text-gray-600">{{ notification.message }}</p>
                  <div v-if="notification.metadata" class="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                    <span v-if="notification.metadata.ip">
                      <i class="fas fa-globe mr-1"></i>
                      {{ notification.metadata.ip }}
                    </span>
                    <span v-if="notification.metadata.userAgent">
                      <i class="fas fa-desktop mr-1"></i>
                      {{ getBrowserInfo(notification.metadata.userAgent) }}
                    </span>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex-shrink-0 flex items-center space-x-1">
                  <button @click="markAsRead(notification.id)" 
                          class="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                    <i class="fas fa-check text-sm"></i>
                  </button>
                  <button @click="deleteNotification(notification.id)" 
                          class="p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50">
                    <i class="fas fa-trash text-sm"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { isAuthenticated, logout } from '../../services/authService'
import { useRouter } from 'vue-router'
import {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification as removeNotification,
  clearAllNotifications as clearNotifications
} from '../../services/notificationService'

const router = useRouter()

if (!isAuthenticated()) {
  router.replace({ path: '/admin/login' })
}

// State
const notifications = ref([])
const filterType = ref('all')

// Computed
const filteredNotifications = computed(() => {
  if (filterType.value === 'all') {
    return notifications.value
  }
  return notifications.value.filter(n => n.type === filterType.value)
})

const newUsersCount = computed(() => {
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  return notifications.value.filter(n => 
    n.type === 'user_registration' && 
    new Date(n.timestamp) > thirtyDaysAgo
  ).length
})

const failedLoginsCount = computed(() => {
  const twentyFourHoursAgo = new Date()
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24)
  return notifications.value.filter(n => 
    n.type === 'failed_login' && 
    new Date(n.timestamp) > twentyFourHoursAgo
  ).length
})

const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read).length
})

// Methods
function getNotificationIcon(type) {
  switch (type) {
    case 'user_registration':
      return 'fas fa-user-plus text-green-600'
    case 'failed_login':
      return 'fas fa-exclamation-triangle text-red-600'
    case 'system':
      return 'fas fa-cog text-blue-600'
    default:
      return 'fas fa-bell text-gray-600'
  }
}

function getNotificationIconClass(type) {
  switch (type) {
    case 'user_registration':
      return 'bg-green-100'
    case 'failed_login':
      return 'bg-red-100'
    case 'system':
      return 'bg-blue-100'
    default:
      return 'bg-gray-100'
  }
}

function formatDate(timestamp) {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInHours = (now - date) / (1000 * 60 * 60)
  
  if (diffInHours < 1) {
    const diffInMinutes = Math.floor((now - date) / (1000 * 60))
    return `${diffInMinutes} minutes ago`
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} hours ago`
  } else if (diffInHours < 48) {
    return 'Yesterday'
  } else {
    return date.toLocaleDateString()
  }
}

function getBrowserInfo(userAgent) {
  if (!userAgent) return 'Unknown'
  
  if (userAgent.includes('Chrome')) return 'Chrome'
  if (userAgent.includes('Firefox')) return 'Firefox'
  if (userAgent.includes('Safari')) return 'Safari'
  if (userAgent.includes('Edge')) return 'Edge'
  return 'Other'
}

async function markAsRead(notificationId) {
  try {
    await markNotificationAsRead(notificationId)
    refreshNotifications()
  } catch (error) {
    console.error('Error marking notification as read:', error)
  }
}

async function markAllAsRead() {
  try {
    await markAllNotificationsAsRead()
    refreshNotifications()
  } catch (error) {
    console.error('Error marking all notifications as read:', error)
  }
}

async function deleteNotification(notificationId) {
  if (confirm('Are you sure you want to delete this notification?')) {
    try {
      await removeNotification(notificationId)
      refreshNotifications()
    } catch (error) {
      console.error('Error deleting notification:', error)
    }
  }
}

async function clearAllNotifications() {
  if (confirm('Are you sure you want to clear all notifications? This action cannot be undone.')) {
    try {
      await clearNotifications()
      refreshNotifications()
    } catch (error) {
      console.error('Error clearing notifications:', error)
    }
  }
}

function refreshNotifications() {
  notifications.value = getNotifications()
}

onMounted(refreshNotifications)
</script>



