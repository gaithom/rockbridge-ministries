<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Donation Amount -->
    <div class="space-y-2">
      <label for="amount" class="block text-sm font-medium text-gray-700">
        Donation Amount (USD) *
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          id="amount"
          type="number"
          v-model.number="localDonation.amount"
          class="block w-full pl-7 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
          placeholder="0.00"
          min="1"
          step="1"
          required
        />
      </div>
    </div>

    <!-- Personal Information Grid -->
    <div class="space-y-4">
      <h4 class="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-2">
        Personal Information
      </h4>
      
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-1">
          <label for="firstName" class="block text-sm font-medium text-gray-700">
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            v-model="localDonation.firstName"
            required
            class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
          />
        </div>
        
        <div class="space-y-1">
          <label for="lastName" class="block text-sm font-medium text-gray-700">
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            v-model="localDonation.lastName"
            required
            class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      <div class="space-y-1">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          v-model="localDonation.email"
          required
          class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
        />
      </div>

      <div class="space-y-1">
        <label for="phone" class="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          v-model="localDonation.phone"
          class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
        />
      </div>

      <div class="space-y-1">
        <label for="postalCode" class="block text-sm font-medium text-gray-700">
          ZIP/Postal Code *
        </label>
        <input
          id="postalCode"
          type="text"
          v-model="localDonation.postalCode"
          required
          class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
        />
      </div>

      <div class="space-y-1">
        <label for="message" class="block text-sm font-medium text-gray-700">
          Message (Optional)
        </label>
        <textarea
          id="message"
          v-model="localDonation.message"
          rows="3"
          class="block w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors resize-none"
          placeholder="Share why this cause is important to you..."
        ></textarea>
      </div>
    </div>

    <!-- Payment Information -->
    <div class="space-y-4">
      <h4 class="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-2">
        Payment Information
      </h4>
      
      <div class="space-y-3">
        <div
          id="card-element"
          class="p-4 border-2 border-gray-200 rounded-lg bg-gray-50 transition-colors focus-within:border-amber-400 focus-within:bg-white"
        >
          <!-- Stripe Elements will be mounted here -->
        </div>
        <div id="card-errors" role="alert" class="text-red-600 text-sm"></div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="pt-6 border-t border-gray-200">
      <button
        type="submit"
        :disabled="!stripe || !localDonation.amount"
        class="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-semibold text-base hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
      >
        <span v-if="localDonation.amount">
          Donate ${{ localDonation.amount }}
        </span>
        <span v-else>Enter Amount to Donate</span>
      </button>
      
      <!-- Security Notice -->
      <div class="mt-3 flex items-center justify-center space-x-2 text-gray-500">
        <svg
          class="w-4 h-4 text-green-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <span class="text-xs">Secure and encrypted donation via Stripe</span>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, watch, onMounted } from 'vue'

const props = defineProps({
  donation: {
    type: Object,
    required: true
  },
  stripe: Object,
  cardElement: Object
})

const emit = defineEmits(['submit', 'card-ready'])

// Local reactive copy to avoid direct prop mutation
const localDonation = reactive({ ...props.donation })

// Watch for changes in props and update local copy
watch(() => props.donation, (newDonation) => {
  Object.assign(localDonation, newDonation)
}, { deep: true })

// Watch for changes in local copy and emit updates
watch(localDonation, (newData) => {
  Object.assign(props.donation, newData)
}, { deep: true })

onMounted(() => {
  emit('card-ready')
})

const handleSubmit = () => {
  emit('submit')
}
</script>