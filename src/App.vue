
<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Hero />
    <Footer />
  </div>
</template>

<script setup>
import Hero from './pages/Home/Hero.vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  font-family: 'Playfair Display', serif;
}
</style>