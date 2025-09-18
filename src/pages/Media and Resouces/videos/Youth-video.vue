<template>
  <div class="min-h-screen bg-gray-50 pt-32">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">YOUTH DEPARTMENT VIDEO</h1>
      
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="relative pt-[56.25%]"> <!-- 16:9 Aspect Ratio -->
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            :src="youtubeEmbedUrl"
            title="YOUTH DEPARTMENT VIDEO"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">Youth Department</h2>
          <p class="text-gray-600">
            A look at our youth department initiative in Kenya, where we spread the gospel of Jesus Christ.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const youtubeEmbedUrl = 'https://www.youtube.com/embed/pOXflRd9qCQ';

// Set navbar to be opaque when component is mounted
onMounted(() => {
  const navbar = document.querySelector('nav');
  if (navbar) {
    navbar.style.backgroundColor = 'rgb(17, 24, 39)';
    navbar.style.backdropFilter = 'blur(8px)';
  }
});

// Clean up when component is unmounted
onUnmounted(() => {
  const navbar = document.querySelector('nav');
  if (navbar) {
    // Reset to default navbar behavior
    navbar.style.backgroundColor = 'rgb(17, 24, 39)';
    navbar.style.backdropFilter = 'none';
  }
});
</script>
