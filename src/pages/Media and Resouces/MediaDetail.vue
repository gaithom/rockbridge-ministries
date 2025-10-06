<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Loading content...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center max-w-md mx-auto px-4">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
        </div>
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Content Not Found</h1>
        <p class="text-gray-600 mb-6">{{ error }}</p>
        <router-link 
          to="/media-and-resources" 
          class="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
        >
          <i class="fas fa-arrow-left mr-2"></i>
          Back to Media & Resources
        </router-link>
      </div>
    </div>

    <!-- Content Display -->
    <div v-else-if="mediaItem" class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <router-link to="/" class="hover:text-gray-700">Home</router-link>
            </li>
            <li><i class="fas fa-chevron-right text-xs"></i></li>
            <li>
              <router-link to="/media-and-resources" class="hover:text-gray-700">Media & Resources</router-link>
            </li>
            <li><i class="fas fa-chevron-right text-xs"></i></li>
            <li class="text-gray-900 font-medium">{{ mediaItem.name }}</li>
          </ol>
        </nav>

        <!-- Media Header -->
        <div class="mb-8">
          <div class="flex items-center space-x-3 mb-4">
            <div :class="getTypeClass(mediaItem.type)" class="w-10 h-10 rounded-lg flex items-center justify-center">
              <i :class="getTypeIcon(mediaItem.type)" class="text-white"></i>
            </div>
            <span :class="getTypeBadgeClass(mediaItem.type)" class="px-3 py-1 rounded-full text-sm font-medium">
              {{ mediaItem.type.charAt(0).toUpperCase() + mediaItem.type.slice(1) }}
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{{ mediaItem.name }}</h1>
          <p v-if="mediaItem.description" class="text-lg text-gray-600 leading-relaxed">{{ mediaItem.description }}</p>
        </div>

        <!-- Media Image -->
        <div v-if="mediaItem.image" class="mb-8">
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              :src="mediaItem.image" 
              :alt="mediaItem.name"
              class="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <!-- Video Play Overlay for Videos -->
            <div v-if="mediaItem.type === 'video'" class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button class="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors group">
                <i class="fas fa-play text-gray-800 text-xl ml-1 group-hover:text-gray-900"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Content Body -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <!-- Video Content -->
          <div v-if="mediaItem.type === 'video'" class="space-y-6">
            <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <i class="fas fa-video"></i>
              <span>Video Content</span>
              <span>•</span>
              <span>{{ formatDate(mediaItem.createdAt) }}</span>
            </div>
            
            <div class="prose max-w-none">
              <p class="text-gray-700 leading-relaxed">
                {{ mediaItem.description || 'This video showcases our ministry work and community impact. Watch to learn more about our mission and the lives we\'re touching.' }}
              </p>
              
              <div class="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-info text-amber-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-amber-900 mb-1">Video Information</h3>
                    <p class="text-sm text-amber-800">
                      This video content is part of our media collection. For the best viewing experience, 
                      please ensure you have a stable internet connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Story Content -->
          <div v-else-if="mediaItem.type === 'story'" class="space-y-6">
            <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <i class="fas fa-book-open"></i>
              <span>Impact Story</span>
              <span>•</span>
              <span>{{ formatDate(mediaItem.createdAt) }}</span>
            </div>
            
            <div class="prose max-w-none">
              <p class="text-gray-700 leading-relaxed text-lg">
                {{ mediaItem.description || 'This is an inspiring story of transformation and hope from our community. Read on to discover how lives are being changed through our ministry work.' }}
              </p>
              
              <div class="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400">
                <blockquote class="text-blue-900 italic">
                  "Every story we share represents a life touched, a hope restored, and a future transformed. 
                  These testimonies are the heart of our ministry."
                </blockquote>
                <cite class="text-sm text-blue-700 mt-2 block">— Rockbridge Ministries</cite>
              </div>
            </div>
          </div>

          <!-- Photo Gallery Content -->
          <div v-else-if="mediaItem.type === 'photo'" class="space-y-6">
            <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <i class="fas fa-images"></i>
              <span>Photo Gallery</span>
              <span>•</span>
              <span>{{ formatDate(mediaItem.createdAt) }}</span>
            </div>
            
            <div class="prose max-w-none">
              <p class="text-gray-700 leading-relaxed">
                {{ mediaItem.description || 'This photo collection captures moments from our ministry activities and community programs. Each image tells a story of hope, service, and transformation.' }}
              </p>
              
              <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Placeholder for additional photos -->
                <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <div class="text-center text-gray-500">
                    <i class="fas fa-image text-2xl mb-2"></i>
                    <p class="text-sm">Photo Gallery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Generic Content -->
          <div v-else class="space-y-6">
            <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <i class="fas fa-file"></i>
              <span>Media Content</span>
              <span>•</span>
              <span>{{ formatDate(mediaItem.createdAt) }}</span>
            </div>
            
            <div class="prose max-w-none">
              <p class="text-gray-700 leading-relaxed">
                {{ mediaItem.description || 'This content is part of our media and resources collection, showcasing our ministry work and community impact.' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 text-center">
          <router-link 
            to="/media-and-resources" 
            class="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Media & Resources
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAllMedia } from '../../services/mediaService'

const route = useRoute()
const mediaItem = ref(null)
const loading = ref(true)
const error = ref(null)

// Helper functions
function getTypeClass(type) {
  switch (type) {
    case 'video':
      return 'bg-gradient-to-br from-red-500 to-red-600'
    case 'story':
      return 'bg-gradient-to-br from-blue-500 to-blue-600'
    case 'photo':
      return 'bg-gradient-to-br from-green-500 to-green-600'
    default:
      return 'bg-gradient-to-br from-gray-500 to-gray-600'
  }
}

function getTypeIcon(type) {
  switch (type) {
    case 'video':
      return 'fas fa-video'
    case 'story':
      return 'fas fa-book-open'
    case 'photo':
      return 'fas fa-images'
    default:
      return 'fas fa-file'
  }
}

function getTypeBadgeClass(type) {
  switch (type) {
    case 'video':
      return 'bg-red-100 text-red-800'
    case 'story':
      return 'bg-blue-100 text-blue-800'
    case 'photo':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return 'Unknown date'
  }
}

// Load media item
function loadMediaItem() {
  try {
    const allMedia = getAllMedia()
    const currentPath = route.path
    
    // Find media item by route
    const foundItem = allMedia.find(item => 
      item.route === currentPath && item.published !== false
    )
    
    if (foundItem) {
      mediaItem.value = foundItem
    } else {
      error.value = 'The requested content could not be found or is no longer available.'
    }
  } catch (err) {
    console.error('Error loading media item:', err)
    error.value = 'An error occurred while loading the content.'
  } finally {
    loading.value = false
  }
}

onMounted(loadMediaItem)
</script>

<style scoped>
.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1rem;
}

.prose blockquote {
  font-style: italic;
  padding-left: 1rem;
}
</style>
