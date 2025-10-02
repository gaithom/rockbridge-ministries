<template>
  <!-- Add padding-top to account for fixed navbar -->
    <div class="flex-1 pt-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="min-h-[calc(100vh-6rem)] pt-24 flex items-start justify-center p-6">
    <div class="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-8">
      <div class="text-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Admin Sign In</h1>
        <div class="mt-2 h-1 w-12 bg-amber-500 mx-auto"></div>
      </div>
      <p class="text-sm text-gray-500 text-center mb-6">For demo/local use only. Do not use client-only auth in production.</p>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div class="space-y-1">
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input 
            v-model="password" 
            type="password" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" 
            placeholder="Enter admin password" 
          />
        </div>
        <p v-if="error" class="text-red-600 text-sm mt-2">{{ error }}</p>
        <button 
          type="submit" 
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
        >
          Sign in
        </button>
      </form>
    </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { login, isAuthenticated } from '../../services/authService'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const error = ref('')

if (isAuthenticated()) {
  router.replace({ path: '/admin' })
}

async function onSubmit() {
  const res = login(password.value)
  if (res.ok) {
    router.push({ path: '/admin' })
  } else {
    error.value = res.error || 'Login failed'
  }
}
</script>