<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <div class="flex-1 pt-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="mb-8 relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-gradient-to-b from-gray-800 to-gray-900">
          <!-- Decorative wave divider -->
          <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg class="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                    class="fill-current text-amber-600 opacity-20"></path>
            </svg>
          </div>
          
          <div class="px-6 py-8 sm:px-8 relative z-10">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                    <i class="fas fa-photo-video text-white text-xl"></i>
                  </div>
                  <h1 class="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
                    Media Management
                  </h1>
                </div>
                <p class="text-amber-100/90 max-w-2xl pl-1">Manage videos, stories, and photo galleries for the Media & Resources page.</p>
              </div>
              <div class="mt-4 sm:mt-0 flex space-x-3">
                <button @click="showCreateModal = true" class="inline-flex items-center px-4 py-2.5 border border-amber-100/30 text-sm font-medium rounded-lg text-amber-100 bg-amber-600/20 hover:bg-amber-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-all duration-200 backdrop-blur-sm">
                  <i class="fas fa-plus mr-2"></i>
                  Add Media
                </button>
              </div>
            </div>
          </div>
          
          <!-- Bottom wave -->
          <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg class="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                    class="fill-current text-amber-600 opacity-20"></path>
            </svg>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="mb-8">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
                activeTab === tab.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
              ]"
            >
              <i :class="[tab.icon, 'mr-2']"></i>
              {{ tab.name }} ({{ getMediaCountByType(tab.type) }})
            </button>
          </div>
        </div>

        <!-- Media Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="media in filteredMedia"
            :key="media.id"
            class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <!-- Media Image -->
            <div class="relative h-48 overflow-hidden bg-gray-100">
              <img
                :src="media.image || '/api/placeholder/400/300'"
                :alt="media.name"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-3 left-3">
                <span :class="getTypeBadgeClass(media.type)" class="px-2 py-1 rounded text-xs font-medium">
                  <i :class="getTypeIcon(media.type)" class="mr-1"></i>
                  {{ media.type.charAt(0).toUpperCase() + media.type.slice(1) }}
                </span>
              </div>
              <div class="absolute top-3 right-3">
                <span :class="media.published !== false ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'" class="px-2 py-1 rounded text-xs font-medium">
                  {{ media.published !== false ? 'Published' : 'Draft' }}
                </span>
              </div>
            </div>

            <!-- Media Content -->
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{{ media.name }}</h3>
              <p v-if="media.description" class="text-sm text-gray-600 mb-4 line-clamp-2">{{ media.description }}</p>
              
              <!-- Actions -->
              <div class="flex items-center justify-between">
                <div class="flex space-x-2">
                  <button
                    @click="editMedia(media)"
                    class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    @click="togglePublished(media.id)"
                    :class="media.published !== false ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-50'"
                    class="p-2 hover:text-green-600 rounded-lg transition-colors"
                    :title="media.published !== false ? 'Unpublish' : 'Publish'"
                  >
                    <i :class="media.published !== false ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                  </button>
                  <button
                    @click="deleteMediaItem(media.id)"
                    class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
                <span class="text-xs text-gray-500">
                  {{ formatDate(media.createdAt) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredMedia.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-photo-video text-gray-400 text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No media found</h3>
          <p class="text-gray-600 mb-6">Get started by adding your first media item.</p>
          <button
            @click="showCreateModal = true"
            class="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
          >
            <i class="fas fa-plus mr-2"></i>
            Add Media
          </button>
        </div>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showCreateModal || editingMedia" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900">
            {{ editingMedia ? 'Edit Media' : 'Add New Media' }}
          </h3>
          <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <i class="fas fa-times text-gray-500"></i>
          </button>
        </div>
        
        <form @submit.prevent="saveMedia" class="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <!-- Media Type -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Media Type</label>
            <select v-model="mediaForm.type" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" required>
              <option value="">Select type...</option>
              <option value="video">Video</option>
              <option value="story">Story/Article</option>
              <option value="photo">Photo Gallery</option>
            </select>
          </div>

          <!-- Title -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              v-model="mediaForm.name"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter media title..."
              required
            />
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              v-model="mediaForm.description"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter description..."
            ></textarea>
          </div>

          <!-- Image URL -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
            <input
              v-model="mediaForm.image"
              type="url"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <!-- Route -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Route/Link (Optional)</label>
            <input
              v-model="mediaForm.route"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              placeholder="/media-and-resources/your-content (leave empty for auto-generated)"
            />
            <p class="mt-1 text-xs text-gray-500">
              Leave empty to automatically generate a route based on the title. Custom routes should start with "/media-and-resources/"
            </p>
          </div>

          <!-- Published Status -->
          <div class="flex items-center">
            <input
              v-model="mediaForm.published"
              type="checkbox"
              id="published"
              class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
            />
            <label for="published" class="ml-2 block text-sm text-gray-900">
              Publish immediately
            </label>
          </div>

          <!-- Actions -->
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
            >
              {{ editingMedia ? 'Update' : 'Create' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { isAuthenticated } from '../../services/authService'
import { useRouter } from 'vue-router'
import {
  getAllMedia,
  getMediaByType,
  createMedia,
  updateMedia,
  deleteMedia,
  toggleMediaPublished
} from '../../services/mediaService'

const router = useRouter()

if (!isAuthenticated()) {
  router.replace({ path: '/admin/login' })
}

// State
const mediaItems = ref([])
const activeTab = ref('all')
const showCreateModal = ref(false)
const editingMedia = ref(null)

// Form data
const mediaForm = ref({
  type: '',
  name: '',
  description: '',
  image: '',
  route: '',
  published: true
})

// Tabs
const tabs = [
  { id: 'all', name: 'All Media', type: 'all', icon: 'fas fa-th-large' },
  { id: 'videos', name: 'Videos', type: 'video', icon: 'fas fa-video' },
  { id: 'stories', name: 'Stories', type: 'story', icon: 'fas fa-book-open' },
  { id: 'photos', name: 'Photos', type: 'photo', icon: 'fas fa-images' }
]

// Computed
const filteredMedia = computed(() => {
  if (activeTab.value === 'all') {
    return mediaItems.value
  }
  const selectedTab = tabs.find(tab => tab.id === activeTab.value)
  return mediaItems.value.filter(item => item.type === selectedTab.type)
})

// Methods
function refreshMedia() {
  mediaItems.value = getAllMedia()
}

function getMediaCountByType(type) {
  if (type === 'all') return mediaItems.value.length
  return mediaItems.value.filter(item => item.type === type).length
}

function getTypeBadgeClass(type) {
  switch (type) {
    case 'video':
      return 'bg-red-600 text-white'
    case 'story':
      return 'bg-blue-600 text-white'
    case 'photo':
      return 'bg-green-600 text-white'
    default:
      return 'bg-gray-600 text-white'
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

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString()
  } catch {
    return 'Unknown'
  }
}

function editMedia(media) {
  editingMedia.value = media
  mediaForm.value = {
    type: media.type,
    name: media.name,
    description: media.description || '',
    image: media.image || '',
    route: media.route || '',
    published: media.published !== false
  }
}

function closeModal() {
  showCreateModal.value = false
  editingMedia.value = null
  mediaForm.value = {
    type: '',
    name: '',
    description: '',
    image: '',
    route: '',
    published: true
  }
}

async function saveMedia() {
  try {
    const mediaData = { ...mediaForm.value }
    
    let result
    if (editingMedia.value) {
      result = updateMedia(editingMedia.value.id, mediaData)
    } else {
      result = createMedia(mediaData)
    }
    
    if (result.ok) {
      refreshMedia()
      closeModal()
    } else {
      alert('Error saving media: ' + (result.error || 'Unknown error'))
    }
  } catch (error) {
    console.error('Error saving media:', error)
    alert('Error saving media: ' + error.message)
  }
}

async function togglePublished(id) {
  try {
    const result = toggleMediaPublished(id)
    if (result.ok) {
      refreshMedia()
    } else {
      alert('Error updating status: ' + (result.error || 'Unknown error'))
    }
  } catch (error) {
    console.error('Error toggling published status:', error)
    alert('Error updating status: ' + error.message)
  }
}

async function deleteMediaItem(id) {
  if (confirm('Are you sure you want to delete this media item? This action cannot be undone.')) {
    try {
      const result = deleteMedia(id)
      if (result.ok) {
        refreshMedia()
      } else {
        alert('Error deleting media: ' + (result.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Error deleting media:', error)
      alert('Error deleting media: ' + error.message)
    }
  }
}

onMounted(refreshMedia)
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
