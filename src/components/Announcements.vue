<template>
  <section v-if="list.length" class="max-w-5xl mx-auto p-6">
    <h2 class="text-xl font-semibold mb-3">Announcements</h2>
    <ul class="space-y-3">
      <li v-for="a in list" :key="a.id" class="border rounded p-4 bg-white/60">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="font-semibold">{{ a.title }}</h3>
            <p class="text-sm text-gray-600">{{ formatDate(a.date) }}</p>
            <p class="mt-2 whitespace-pre-line">{{ a.body }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPublishedAnnouncements } from '../services/contentService'

const list = ref([])

function refresh() {
  list.value = getPublishedAnnouncements()
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleString()
  } catch {
    return d
  }
}

onMounted(refresh)
</script>