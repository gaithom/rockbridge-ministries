<template>
  <div class="min-h-screen bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Sitemap</h1>
      
      <div class="prose max-w-none">
        <ul class="list-disc space-y-2 pl-5">
          <li><router-link to="/" class="text-blue-600 hover:underline">Home</router-link></li>
          <li><router-link to="/about" class="text-blue-600 hover:underline">About</router-link></li>
          <li><router-link to="/our-ministries" class="text-blue-600 hover:underline">Our Ministries</router-link></li>
          <li><router-link to="/get-involved" class="text-blue-600 hover:underline">Get Involved</router-link></li>
          <li><router-link to="/media-and-resources" class="text-blue-600 hover:underline">Media and Resources</router-link></li>
          <li><router-link to="/contact" class="text-blue-600 hover:underline">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
