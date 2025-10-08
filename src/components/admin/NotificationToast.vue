<template>
  <transition-group
    name="notification"
    tag="div"
    class="fixed top-20 right-4 z-50 space-y-3 max-w-sm w-full pointer-events-none"
  >
    <div
      v-for="notification in visibleNotifications"
      :key="notification.id"
      class="bg-white rounded-lg shadow-2xl border-l-4 p-4 pointer-events-auto transform transition-all duration-300"
      :class="getNotificationClass(notification.type)"
    >
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <div 
            class="w-10 h-10 rounded-full flex items-center justify-center"
            :class="getIconBackgroundClass(notification.type)"
          >
            <i :class="getIconClass(notification.type)" class="text-white"></i>
          </div>
        </div>
        <div class="ml-3 flex-1">
          <p class="text-sm font-semibold text-gray-900">
            {{ notification.title }}
          </p>
          <p class="mt-1 text-sm text-gray-600">
            {{ notification.message }}
          </p>
          <p class="mt-1 text-xs text-gray-400">
            {{ formatTime(notification.timestamp) }}
          </p>
        </div>
        <button
          @click="dismissNotification(notification.id)"
          class="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <!-- Action buttons -->
      <div class="mt-3 flex space-x-2">
        <button
          @click="viewNotification(notification.id)"
          class="text-xs font-medium text-amber-600 hover:text-amber-700 focus:outline-none"
        >
          View Details
        </button>
        <button
          @click="dismissNotification(notification.id)"
          class="text-xs font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          Dismiss
        </button>
      </div>
    </div>
  </transition-group>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { NOTIFICATION_TYPES } from '../../services/notificationService'

const router = useRouter()
const visibleNotifications = ref([])
const DISPLAY_DURATION = 5000 // 5 seconds

// Listen for new notifications
const handleNewNotification = (event) => {
  const notification = event.detail
  
  // Add to visible notifications
  visibleNotifications.value.push(notification)
  
  // Auto-dismiss after duration
  setTimeout(() => {
    dismissNotification(notification.id)
  }, DISPLAY_DURATION)
}

function dismissNotification(id) {
  const index = visibleNotifications.value.findIndex(n => n.id === id)
  if (index !== -1) {
    visibleNotifications.value.splice(index, 1)
  }
}

function viewNotification(id) {
  dismissNotification(id)
  router.push('/admin/notifications')
}

function getNotificationClass(type) {
  switch (type) {
    case NOTIFICATION_TYPES.USER_REGISTRATION:
      return 'border-green-500'
    case NOTIFICATION_TYPES.FAILED_LOGIN:
      return 'border-red-500'
    case NOTIFICATION_TYPES.SYSTEM:
      return 'border-blue-500'
    default:
      return 'border-gray-500'
  }
}

function getIconBackgroundClass(type) {
  switch (type) {
    case NOTIFICATION_TYPES.USER_REGISTRATION:
      return 'bg-green-500'
    case NOTIFICATION_TYPES.FAILED_LOGIN:
      return 'bg-red-500'
    case NOTIFICATION_TYPES.SYSTEM:
      return 'bg-blue-500'
    default:
      return 'bg-gray-500'
  }
}

function getIconClass(type) {
  switch (type) {
    case NOTIFICATION_TYPES.USER_REGISTRATION:
      return 'fas fa-user-plus'
    case NOTIFICATION_TYPES.FAILED_LOGIN:
      return 'fas fa-exclamation-triangle'
    case NOTIFICATION_TYPES.SYSTEM:
      return 'fas fa-cog'
    default:
      return 'fas fa-bell'
  }
}

function formatTime(timestamp) {
  const now = new Date()
  const time = new Date(timestamp)
  const diff = Math.floor((now - time) / 1000) // seconds
  
  if (diff < 60) return 'Just now'
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`
  return time.toLocaleDateString()
}

onMounted(() => {
  window.addEventListener('new-notification', handleNewNotification)
})

onUnmounted(() => {
  window.removeEventListener('new-notification', handleNewNotification)
})
</script>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-move {
  transition: transform 0.3s ease;
}
</style>
