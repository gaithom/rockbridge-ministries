<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Add padding-top to account for fixed navbar -->
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
                    <i class="fas fa-shield-alt text-white text-xl"></i>
                  </div>
                  <h1 class="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
                    Admin Dashboard
                  </h1>
                </div>
                <p class="text-amber-100/90 max-w-2xl pl-1">Manage your site content — announcements, videos, stories, and blogs.</p>
              </div>
              <div class="mt-4 sm:mt-0 flex space-x-3">
                <button @click="onExport" class="inline-flex items-center px-4 py-2.5 border border-amber-100/30 text-sm font-medium rounded-lg text-amber-100 bg-amber-600/20 hover:bg-amber-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-all duration-200 backdrop-blur-sm">
                  <i class="fas fa-file-export mr-2"></i>
                  Export Data
                </button>
                <button @click="onLogout" class="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-amber-900 bg-white hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 shadow-sm">
                  <i class="fas fa-sign-out-alt mr-2"></i>
                  Logout
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

    <!-- Notification Demo Card -->
    <section class="mb-8">
      <NotificationDemo />
    </section>

    <!-- Cards Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Announcements Card -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h2 class="text-xl font-semibold text-gray-800">Announcements</h2>
          <span class="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-800">{{ announcements.length }} items</span>
        </div>
        <form @submit.prevent="createAnnouncementUI" class="grid grid-cols-1 gap-3 mb-5 p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input v-model="annDraft.title" placeholder="Enter title" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
            <input v-model="annDraft.date" type="datetime-local" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Body</label>
            <textarea v-model="annDraft.body" placeholder="Enter announcement content" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" v-model="annDraft.published" class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
              <span>Publish immediately</span>
            </label>
            <button type="submit" class="px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
              Add Announcement
            </button>
          </div>
        </form>
        <div v-if="announcements.length === 0" class="p-8 text-center bg-white/50 rounded-lg border-2 border-dashed border-gray-200">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No announcements</h3>
          <p class="mt-1 text-sm text-gray-500">Get started by creating a new announcement.</p>
        </div>
        <ul class="space-y-3 divide-y divide-gray-100">
          <li v-for="a in announcements" :key="a.id" class="group relative bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors duration-150">
            <div class="flex items-start justify-between gap-4">
              <div class="min-w-0 flex-1">
                <div class="flex items-center space-x-2">
                  <h3 class="text-base font-medium text-gray-900 truncate">{{ a.title }}</h3>
                  <span :class="a.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {{ a.published ? 'Published' : 'Draft' }}
                  </span>
                </div>
                <p class="mt-1 text-sm text-gray-500">{{ formatDate(a.date) }}</p>
                <p class="mt-2 text-sm text-gray-600 whitespace-pre-line">{{ a.body }}</p>
              </div>
              <div class="shrink-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button @click="toggleAnnouncement(a)" :class="a.published ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'" class="p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                  <span class="sr-only">{{ a.published ? 'Unpublish' : 'Publish' }}</span>
                  <svg v-if="a.published" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                  <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button @click="removeAnnouncement(a)" class="p-1.5 rounded-full text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <span class="sr-only">Delete</span>
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Videos Card -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h2 class="text-xl font-semibold text-gray-800">Videos</h2>
          <span class="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-800">{{ videos.length }} items</span>
        </div>
        <form @submit.prevent="createVideoUI" class="grid grid-cols-1 gap-3 mb-5 p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input v-model="videoDraft.title" placeholder="Enter video title" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
            <input v-model="videoDraft.url" placeholder="https://youtube.com/watch?v=..." class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
            <input v-model="videoDraft.date" type="datetime-local" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea v-model="videoDraft.description" placeholder="Enter video description" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" v-model="videoDraft.published" class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
              <span>Publish immediately</span>
            </label>
            <button type="submit" class="px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
              Add Video
            </button>
          </div>
        </form>
        <div v-if="videos.length === 0" class="p-8 text-center bg-white/50 rounded-lg border-2 border-dashed border-gray-200">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No videos</h3>
          <p class="mt-1 text-sm text-gray-500">Get started by adding your first video.</p>
        </div>
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <li v-for="v in videos" :key="v.id" class="group relative bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors duration-150">
            <div class="flex flex-col sm:flex-row sm:items-start gap-4">
              <div class="aspect-video w-full sm:w-40 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                <div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                  <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <h3 class="text-base font-medium text-gray-900 truncate">{{ v.title }}</h3>
                  <span :class="v.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {{ v.published ? 'Published' : 'Draft' }}
                  </span>
                </div>
                <p class="mt-1 text-sm text-gray-500">{{ formatDate(v.date) }}</p>
                <p v-if="v.description" class="mt-2 text-sm text-gray-600 line-clamp-2">{{ v.description }}</p>
                <a :href="v.url" target="_blank" rel="noopener noreferrer" class="mt-2 inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-500 truncate">
                  <span class="truncate">{{ v.url }}</span>
                  <svg class="ml-1 h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
              <div class="shrink-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button @click="toggleVideo(v)" :class="v.published ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'" class="p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                  <span class="sr-only">{{ v.published ? 'Unpublish' : 'Publish' }}</span>
                  <svg v-if="v.published" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                  <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <a :href="v.url" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-full text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span class="sr-only">View</span>
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button @click="removeVideo(v)" class="p-1.5 rounded-full text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <span class="sr-only">Delete</span>
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Stories Card -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h2 class="text-xl font-semibold text-gray-800">Stories</h2>
          <span class="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-800">{{ stories.length }} items</span>
        </div>
        <form @submit.prevent="createStoryUI" class="grid grid-cols-1 gap-3 mb-5 p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input v-model="storyDraft.title" placeholder="Enter story title" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Author (optional)</label>
              <input v-model="storyDraft.author" placeholder="Author name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
              <input v-model="storyDraft.date" type="datetime-local" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Story</label>
            <textarea v-model="storyDraft.body" placeholder="Tell your story..." rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" v-model="storyDraft.published" class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
              <span>Publish immediately</span>
            </label>
            <button type="submit" class="px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
              Add Story
            </button>
          </div>
        </form>
        <div v-if="stories.length === 0" class="p-8 text-center bg-white/50 rounded-lg border-2 border-dashed border-gray-200">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No stories</h3>
          <p class="mt-1 text-sm text-gray-500">Get started by creating your first story.</p>
        </div>
        <ul class="space-y-4">
          <li v-for="s in stories" :key="s.id" class="group relative bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors duration-150">
            <div class="flex items-start justify-between gap-4">
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-base font-medium text-gray-900">{{ s.title }}</h3>
                  <span :class="s.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {{ s.published ? 'Published' : 'Draft' }}
                  </span>
                </div>
                <div class="mt-1 flex items-center text-sm text-gray-500">
                  <span>{{ formatDate(s.date) }}</span>
                  <span v-if="s.author" class="mx-1">•</span>
                  <span v-if="s.author" class="text-amber-700">By {{ s.author }}</span>
                </div>
                <p class="mt-2 text-sm text-gray-600 whitespace-pre-line line-clamp-3">{{ s.body }}</p>
                <button @click="toggleExpand($event)" class="mt-1 text-sm font-medium text-amber-600 hover:text-amber-500 focus:outline-none">
                  Read more
                </button>
              </div>
              <div class="shrink-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button @click="toggleStory(s)" :class="s.published ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'" class="p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                  <span class="sr-only">{{ s.published ? 'Unpublish' : 'Publish' }}</span>
                  <svg v-if="s.published" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                  <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button @click="removeStory(s)" class="p-1.5 rounded-full text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <span class="sr-only">Delete</span>
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Blogs Card -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h2 class="text-xl font-semibold text-gray-800">Blog Posts</h2>
          <span class="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-800">{{ blogs.length }} posts</span>
        </div>
        <form @submit.prevent="createBlogUI" class="grid grid-cols-1 gap-3 mb-5 p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input v-model="blogDraft.title" placeholder="Enter blog post title" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Publish Date</label>
            <input v-model="blogDraft.date" type="datetime-local" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea v-model="blogDraft.body" placeholder="Write your blog post content here..." rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" v-model="blogDraft.published" class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
              <span>Publish immediately</span>
            </label>
            <button type="submit" class="px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
              Publish Blog Post
            </button>
          </div>
        </form>
        <div v-if="blogs.length === 0" class="p-8 text-center bg-white/50 rounded-lg border-2 border-dashed border-gray-200">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No blog posts</h3>
          <p class="mt-1 text-sm text-gray-500">Get started by creating your first blog post.</p>
        </div>
        <ul class="space-y-4">
          <li v-for="b in blogs" :key="b.id" class="group relative bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors duration-150">
            <div class="flex items-start justify-between gap-4">
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-base font-medium text-gray-900">{{ b.title }}</h3>
                  <span :class="b.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {{ b.published ? 'Published' : 'Draft' }}
                  </span>
                </div>
                <p class="mt-1 text-sm text-gray-500">{{ formatDate(b.date) }}</p>
                <p class="mt-2 text-sm text-gray-600 whitespace-pre-line line-clamp-3">{{ b.body }}</p>
                <button @click="toggleExpand($event)" class="mt-1 text-sm font-medium text-amber-600 hover:text-amber-500 focus:outline-none">
                  Read more
                </button>
              </div>
              <div class="shrink-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button @click="toggleBlog(b)" :class="b.published ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'" class="p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                  <span class="sr-only">{{ b.published ? 'Unpublish' : 'Publish' }}</span>
                  <svg v-if="b.published" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                  <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button @click="removeBlog(b)" class="p-1.5 rounded-full text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <span class="sr-only">Delete</span>
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { isAuthenticated, logout } from '../../services/authService'
import { useRouter } from 'vue-router'
import {
  getAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement,
  getVideos, createVideo, updateVideo, deleteVideo,
  getStories, createStory, updateStory, deleteStory,
  getBlogs, createBlog, updateBlog, deleteBlog,
  exportJSON, importJSON
} from '../../services/contentService'
import NotificationDemo from '../../components/admin/NotificationDemo.vue'

const router = useRouter()

if (!isAuthenticated()) {
  router.replace({ path: '/admin/login' })
}

// Announcements state
const announcements = ref([])
const annDraft = ref({ title: '', body: '', date: new Date().toISOString().slice(0,16), published: true })

// Videos state
const videos = ref([])
const videoDraft = ref({ title: '', url: '', description: '', date: new Date().toISOString().slice(0,16), published: true })

// Stories state
const stories = ref([])
const storyDraft = ref({ title: '', body: '', author: '', date: new Date().toISOString().slice(0,16), published: true })

// Blogs state
const blogs = ref([])
const blogDraft = ref({ title: '', body: '', date: new Date().toISOString().slice(0,16), published: true })

// Toggle expand/collapse for content
function toggleExpand(event) {
  const content = event.target.previousElementSibling;
  if (content.classList.contains('line-clamp-3')) {
    content.classList.remove('line-clamp-3');
    event.target.textContent = 'Show less';
  } else {
    content.classList.add('line-clamp-3');
    event.target.textContent = 'Read more';
  }
}

function refreshAll() {
  announcements.value = getAnnouncements()
  videos.value = getVideos()
  stories.value = getStories()
  blogs.value = getBlogs()
}

// Announcement handlers
function createAnnouncementUI() {
  createAnnouncement(annDraft.value)
  annDraft.value = { title: '', body: '', date: new Date().toISOString().slice(0,16), published: true }
  refreshAll()
}
function toggleAnnouncement(a) { updateAnnouncement(a.id, { published: !a.published }); refreshAll() }
function removeAnnouncement(a) { if (confirm('Delete announcement?')) { deleteAnnouncement(a.id); refreshAll() } }

// Videos handlers
function createVideoUI() {
  createVideo(videoDraft.value)
  videoDraft.value = { title: '', url: '', description: '', date: new Date().toISOString().slice(0,16), published: true }
  refreshAll()
}
function toggleVideo(v) { updateVideo(v.id, { published: !v.published }); refreshAll() }
function removeVideo(v) { if (confirm('Delete video?')) { deleteVideo(v.id); refreshAll() } }

// Stories handlers
function createStoryUI() {
  createStory(storyDraft.value)
  storyDraft.value = { title: '', body: '', author: '', date: new Date().toISOString().slice(0,16), published: true }
  refreshAll()
}
function toggleStory(s) { updateStory(s.id, { published: !s.published }); refreshAll() }
function removeStory(s) { if (confirm('Delete story?')) { deleteStory(s.id); refreshAll() } }

// Blogs handlers
function createBlogUI() {
  createBlog(blogDraft.value)
  blogDraft.value = { title: '', body: '', date: new Date().toISOString().slice(0,16), published: true }
  refreshAll()
}
function toggleBlog(b) { updateBlog(b.id, { published: !b.published }); refreshAll() }
function removeBlog(b) { if (confirm('Delete blog?')) { deleteBlog(b.id); refreshAll() } }

function formatDate(d) {
  try { return new Date(d).toLocaleString() } catch { return d }
}

function onLogout() { logout(); router.replace({ path: '/admin/login' }) }

function onExport() {
  const data = exportJSON()
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'site-content.json'
  a.click()
  URL.revokeObjectURL(url)
}

async function onImport(e) {
  const file = e.target.files?.[0]
  if (!file) return
  const text = await file.text()
  const res = await importJSON(text)
  if (!res.ok) alert('Import failed: ' + (res.error || 'Unknown error'))
  refreshAll()
}

onMounted(refreshAll)
</script>
