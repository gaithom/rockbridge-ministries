<template>
  <div :class="alertClasses" role="alert">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <component :is="iconComponent" :class="iconClasses" />
      </div>
      <div class="ml-3 flex-1">
        <p :class="textClasses" v-html="message"></p>
      </div>
      <div v-if="dismissible" class="ml-4 flex-shrink-0">
        <button
          @click="$emit('dismiss')"
          :class="dismissButtonClasses"
          type="button"
        >
          <span class="sr-only">Dismiss</span>
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  message: {
    type: String,
    required: true
  },
  dismissible: {
    type: Boolean,
    default: false
  }
})

defineEmits(['dismiss'])

const alertClasses = computed(() => {
  const baseClasses = 'rounded-lg p-4 shadow-sm border'
  const typeClasses = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200',
    info: 'bg-blue-50 border-blue-200'
  }
  return `${baseClasses} ${typeClasses[props.type]}`
})

const iconClasses = computed(() => {
  const baseClasses = 'h-5 w-5'
  const typeClasses = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-yellow-400',
    info: 'text-blue-400'
  }
  return `${baseClasses} ${typeClasses[props.type]}`
})

const textClasses = computed(() => {
  const typeClasses = {
    success: 'text-green-800',
    error: 'text-red-800',
    warning: 'text-yellow-800',
    info: 'text-blue-800'
  }
  return `text-sm font-medium ${typeClasses[props.type]}`
})

const dismissButtonClasses = computed(() => {
  const typeClasses = {
    success: 'text-green-500 hover:text-green-600 focus:text-green-600',
    error: 'text-red-500 hover:text-red-600 focus:text-red-600',
    warning: 'text-yellow-500 hover:text-yellow-600 focus:text-yellow-600',
    info: 'text-blue-500 hover:text-blue-600 focus:text-blue-600'
  }
  return `${typeClasses[props.type]} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${props.type === 'success' ? 'green' : props.type === 'error' ? 'red' : props.type === 'warning' ? 'yellow' : 'blue'}-500 rounded-md`
})

const iconComponent = computed(() => {
  const icons = {
    success: 'CheckCircleIcon',
    error: 'XCircleIcon',
    warning: 'ExclamationTriangleIcon',
    info: 'InformationCircleIcon'
  }
  return icons[props.type]
})

// Icon components
const CheckCircleIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`
}

const XCircleIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>`
}

const ExclamationTriangleIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>`
}

const InformationCircleIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`
}
</script>