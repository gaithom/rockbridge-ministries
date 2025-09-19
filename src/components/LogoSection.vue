<template>
  <div class="flex items-center space-x-3">
    <router-link to="/" class="flex items-center space-x-3 group">
      <div class="relative transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
        <img 
          src="/images/logo.jpg" 
          alt="Rock Bridge Ministries" 
          class="w-16 h-16 rounded-full object-cover border-2 border-amber-300/80 shadow-md transition-all duration-300 group-hover:border-amber-200 group-hover:shadow-lg" 
        />
        <div class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-amber-200 group-hover:animate-ping-slow opacity-0 group-hover:opacity-50"></div>
      </div>
      <div class="text-amber-50 hidden sm:block transition-all duration-300 group-hover:text-amber-200">
        <h1 class="text-2xl font-bold leading-tight transform transition-all duration-200 group-hover:translate-x-0.5">R.O.C.K. Bridge</h1>
        <h2 class="text-2xl font-bold leading-tight transform transition-all duration-200 group-hover:translate-x-0.5">Ministries</h2>
      </div>
    </router-link>
  </div>
</template>

<script setup>
// Logo section component with hover effects
</script>
