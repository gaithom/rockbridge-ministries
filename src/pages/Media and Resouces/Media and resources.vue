<template>
  <div class="bg-gray-50 min-h-screen antialiased text-gray-800 pt-24 sm:pt-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-12 sm:py-16">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Media & Resources
          </h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of videos, stories, and photos showcasing our ministry work and community impact.
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        <!-- Filter Tabs -->
        <div class="flex justify-center mb-12">
          <div class="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-6 py-3 rounded-md font-medium text-sm transition-all duration-200',
                activeTab === tab.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              <i :class="[tab.icon, 'mr-2']"></i>
              {{ tab.name }}
            </button>
          </div>
        </div>

        <!-- Videos Section -->
        <div v-if="activeTab === 'all' || activeTab === 'videos'" class="mb-16">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
              <i class="fas fa-video text-white text-xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Videos</h2>
              <p class="text-gray-600">Watch our ministry in action</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="video in videos"
              :key="video.id"
              class="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div class="relative w-full h-48 overflow-hidden bg-gray-900">
                <img
                  :src="video.image"
                  :alt="video.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <i class="fas fa-play text-white text-xl ml-1"></i>
                  </div>
                </div>
                <div class="absolute top-3 left-3">
                  <span class="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    <i class="fas fa-video mr-1"></i>
                    Video
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors duration-200">
                  {{ video.name }}
                </h3>
                <button
                  @click="navigateTo(video.route)"
                  class="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                >
                  <span>Watch Video</span>
                  <i class="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Stories/Blogs Section -->
        <div v-if="activeTab === 'all' || activeTab === 'stories'" class="mb-16">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
              <i class="fas fa-book-open text-white text-xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Stories & Articles</h2>
              <p class="text-gray-600">Read inspiring stories and updates</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="story in stories"
              :key="story.id"
              class="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div class="w-full h-48 overflow-hidden bg-slate-100 relative">
                <img
                  :src="story.image"
                  :alt="story.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute top-3 left-3">
                  <span class="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    <i class="fas fa-book-open mr-1"></i>
                    Story
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors duration-200">
                  {{ story.name }}
                </h3>
                <button
                  @click="navigateTo(story.route)"
                  class="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                >
                  <span>Read Story</span>
                  <i class="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Photos Section -->
        <div v-if="activeTab === 'all' || activeTab === 'photos'" class="mb-16">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
              <i class="fas fa-images text-white text-xl"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Photo Galleries</h2>
              <p class="text-gray-600">Browse our photo collections</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="photo in photos"
              :key="photo.id"
              class="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div class="w-full h-48 overflow-hidden bg-slate-100 relative">
                <img
                  :src="photo.image"
                  :alt="photo.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute top-3 left-3">
                  <span class="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    <i class="fas fa-images mr-1"></i>
                    Photos
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors duration-200">
                  {{ photo.name }}
                </h3>
                <button
                  @click="navigateTo(photo.route)"
                  class="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                >
                  <span>View Gallery</span>
                  <i class="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredContent.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-search text-gray-400 text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
          <p class="text-gray-600">Try selecting a different category or check back later.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getPublishedMediaByType, getAllMedia } from '../../services/mediaService';

const router = useRouter();
const activeTab = ref('all');
const allMedia = ref([]);

// Function to navigate to dynamic routes
const navigateTo = (route) => {
  if (route) {
    router.push(route);
  }
};

// Filter tabs
const tabs = [
  { id: 'all', name: 'All Content', icon: 'fas fa-th-large' },
  { id: 'videos', name: 'Videos', icon: 'fas fa-video' },
  { id: 'stories', name: 'Stories', icon: 'fas fa-book-open' },
  { id: 'photos', name: 'Photos', icon: 'fas fa-images' }
];

// Load media content
function loadMedia() {
  allMedia.value = getAllMedia().filter(item => item.published !== false);
}

// Computed properties for different media types
const videos = computed(() => {
  return allMedia.value.filter(item => item.type === 'video');
});

const stories = computed(() => {
  return allMedia.value.filter(item => item.type === 'story');
});

const photos = computed(() => {
  return allMedia.value.filter(item => item.type === 'photo');
});

// Computed property for filtered content
const filteredContent = computed(() => {
  if (activeTab.value === 'all') {
    return allMedia.value;
  }
  return allMedia.value.filter(item => {
    if (activeTab.value === 'videos') return item.type === 'video';
    if (activeTab.value === 'stories') return item.type === 'story';
    if (activeTab.value === 'photos') return item.type === 'photo';
    return true;
  });
});

onMounted(() => {
  loadMedia();
});
</script>


<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
