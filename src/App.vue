<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Navbar v-if="!isAdminRoute" />
    <router-view class="flex-1" />
    <Footer v-if="!isAdminRoute" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const isAdminRoute = computed(() => route.path.startsWith('/admin'))
</script>

<style>
body {
  font-family: 'Playfair Display', serif;
}
</style>