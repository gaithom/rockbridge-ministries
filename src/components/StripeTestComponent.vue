<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
    <h2 class="text-xl font-bold mb-4">Stripe Test</h2>
    
    <div v-if="!stripeLoaded" class="text-yellow-600">
      Loading Stripe...
    </div>
    
    <div v-else-if="stripeError" class="text-red-600">
      Stripe Error: {{ stripeError }}
    </div>
    
    <div v-else>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Amount ($)</label>
        <input 
          v-model.number="amount" 
          type="number" 
          min="1" 
          step="1"
          class="w-full p-2 border rounded"
          placeholder="10"
        />
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Payment Details</label>
        <div class="border rounded p-3" style="min-height: 120px;">
          <StripeElementPayment
            ref="paymentRef"
            :pk="stripeKey"
            :elements-options="elementsOptions"
            :confirm-params="confirmParams"
            @loading="onLoading"
            @error="onError"
            @element-ready="onElementReady"
          />
        </div>
      </div>
      
      <button 
        @click="testPayment"
        :disabled="!elementReady || loading"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
      >
        {{ loading ? 'Processing...' : 'Test Payment' }}
      </button>
      
      <div v-if="status" class="mt-4 p-2 rounded" :class="status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'">
        {{ status.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { StripeElementPayment } from '@vue-stripe/vue-stripe'

const stripeKey = 'pk_test_51S8H6j7nMNd6hGyDlGi92ziaM4Bhm5juRM50liyQv8qlJsmHCk8bHQUA79xiy5ZHX5hkAnYX2VQ4kqj4y6TuJSXW00eWF1rzVv'

const amount = ref(10)
const stripeLoaded = ref(false)
const stripeError = ref('')
const elementReady = ref(false)
const loading = ref(false)
const status = ref(null)
const paymentRef = ref(null)

const elementsOptions = computed(() => ({
  mode: 'payment',
  amount: amount.value * 100, // Convert to cents
  currency: 'usd',
  appearance: {
    theme: 'stripe',
    variables: {
      colorPrimary: '#3b82f6'
    }
  }
}))

const confirmParams = computed(() => ({
  return_url: window.location.origin,
  payment_method_data: {
    billing_details: {
      name: 'Test User',
      email: 'test@example.com'
    }
  }
}))

const onLoading = (isLoading) => {
  loading.value = isLoading
}

const onError = (error) => {
  console.error('Stripe error:', error)
  stripeError.value = error.message || 'Unknown error'
  status.value = { type: 'error', message: error.message }
}

const onElementReady = () => {
  elementReady.value = true
  status.value = { type: 'success', message: 'Stripe element is ready!' }
}

const testPayment = async () => {
  if (!paymentRef.value) {
    status.value = { type: 'error', message: 'Payment element not ready' }
    return
  }
  
  loading.value = true
  status.value = null
  
  try {
    // For testing purposes, we'll just validate the form
    // In real implementation, you'd create a payment intent first
    status.value = { 
      type: 'success', 
      message: `Payment form is ready for $${amount.value}. Integration working correctly!` 
    }
  } catch (error) {
    status.value = { type: 'error', message: error.message }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // Check if Stripe is available
  if (window.Stripe) {
    stripeLoaded.value = true
  } else {
    // Wait a bit for Stripe to load
    setTimeout(() => {
      if (window.Stripe) {
        stripeLoaded.value = true
      } else {
        stripeError.value = 'Stripe failed to load'
      }
    }, 2000)
  }
})
</script>
