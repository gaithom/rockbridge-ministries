<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      
      <!-- Phone Card -->
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="flex items-center space-x-4">
          <div class="bg-amber-500 p-4 rounded-full">
            <i class="fas fa-phone text-2xl text-white"></i>
          </div>
          <h2 class="text-xl font-semibold">Phone</h2>
        </div>
        <p class="mt-4 text-gray-300">+254 712 345 678</p>
        <p class="text-gray-300">+254 798 123 456</p>
      </div>

      <!-- Email Card -->
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="flex items-center space-x-4">
          <div class="bg-amber-500 p-4 rounded-full">
            <i class="fas fa-envelope text-2xl text-white"></i>
          </div>
          <h2 class="text-xl font-semibold">Email</h2>
        </div>
        <p class="mt-4 text-gray-300">info@company.com</p>
        <p class="text-gray-300">support@company.com</p>
      </div>

      <!-- Location Card -->
      <div class="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
        <div class="flex items-center space-x-4">
          <div class="bg-amber-500 p-4 rounded-full">
            <i class="fas fa-map-marker-alt text-2xl text-white"></i>
          </div>
          <h2 class="text-xl font-semibold">Location</h2>
        </div>
        <p class="mt-4 text-gray-300">Nairobi, Kenya</p>
        <p class="text-gray-300">Mon - Fri, 9am - 6pm</p>
      </div>

    </div>
  </div>
</template>

<script setup>
// No extra logic needed for static cards
</script>

<style scoped>
/* If you don’t already have FontAwesome, include in main index.html */
</style>
