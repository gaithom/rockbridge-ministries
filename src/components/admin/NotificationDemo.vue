<template>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
      <h3 class="text-lg font-semibold text-gray-800">Notification Demo</h3>
      <span class="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">Demo</span>
    </div>
    
    <p class="text-sm text-gray-600 mb-4">
      Test the notification system by simulating user activities. These actions will create notifications that appear in the admin panel.
    </p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <button 
        @click="simulateUserRegistration"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
      >
        <i class="fas fa-user-plus mr-2"></i>
        Simulate New User
      </button>
      
      <button 
        @click="simulateFailedLogin"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
      >
        <i class="fas fa-exclamation-triangle mr-2"></i>
        Simulate Failed Login
      </button>
      
      <button 
        @click="simulateSystemNotification"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        <i class="fas fa-cog mr-2"></i>
        System Notification
      </button>
      
      <button 
        @click="clearAllNotifications"
        class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
      >
        <i class="fas fa-trash mr-2"></i>
        Clear All
      </button>
    </div>
    
    <div v-if="lastAction" class="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
      <p class="text-sm text-green-800">
        <i class="fas fa-check-circle mr-2"></i>
        {{ lastAction }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { simulateUserRegistration as createUserNotification } from '../../services/authService'
import { notifyFailedLogin, notifySystem, clearAllNotifications as clearNotifications, initializeNotifications } from '../../services/notificationService'

const lastAction = ref('')

const sampleUsers = [
  { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { name: 'Bob Smith', email: 'bob.smith@example.com' },
  { name: 'Carol Davis', email: 'carol.davis@example.com' },
  { name: 'David Wilson', email: 'david.wilson@example.com' },
  { name: 'Emma Brown', email: 'emma.brown@example.com' }
]

const sampleIPs = [
  '192.168.1.100',
  '10.0.0.50',
  '172.16.0.25',
  '203.0.113.42',
  '198.51.100.15'
]

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function simulateUserRegistration() {
  const user = getRandomItem(sampleUsers)
  createUserNotification(user)
  lastAction.value = `Simulated new user registration: ${user.email}`
  setTimeout(() => { lastAction.value = '' }, 3000)
}

function simulateFailedLogin() {
  const ip = getRandomItem(sampleIPs)
  const loginInfo = {
    ip: ip,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  }
  notifyFailedLogin(loginInfo)
  lastAction.value = `Simulated failed login attempt from ${ip}`
  setTimeout(() => { lastAction.value = '' }, 3000)
}

function simulateSystemNotification() {
  const messages = [
    'Database backup completed successfully',
    'System performance optimization finished',
    'Security scan completed - no issues found',
    'New feature deployment completed',
    'Maintenance window scheduled for tonight'
  ]
  const message = getRandomItem(messages)
  notifySystem(message)
  lastAction.value = `Created system notification: ${message}`
  setTimeout(() => { lastAction.value = '' }, 3000)
}

async function clearAllNotifications() {
  if (confirm('Are you sure you want to clear all notifications?')) {
    clearNotifications()
    lastAction.value = 'All notifications cleared'
    setTimeout(() => { lastAction.value = '' }, 3000)
  }
}

// Initialize notifications when component mounts
initializeNotifications()
</script>
