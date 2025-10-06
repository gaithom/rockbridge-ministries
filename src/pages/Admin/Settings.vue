<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <div class="flex-1 pt-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
        <p class="text-gray-600">This is a placeholder settings page. (Full UI previously authored.)</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { isAuthenticated } from '../../services/authService'
import { useRouter } from 'vue-router'

const router = useRouter()
if (!isAuthenticated()) {
  router.replace({ path: '/admin/login' })
}
</script>


