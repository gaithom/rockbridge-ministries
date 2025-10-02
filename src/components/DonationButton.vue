<template>
  <div>
    <button
      @click="openModal"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
    >
      <i class="fas fa-donate mr-2"></i>
      {{ buttonText }}
    </button>

    <DonationModal
      v-if="showModal"
      :is-open="showModal"
      :selected-initiative="initiative"
      :donation="donation"
      :is-processing="isProcessing"
      :error-message="errorMessage"
      :success-message="successMessage"
      @close="closeModal"
      @submit="handleSubmit"
      @error="handleError"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DonationModal from './DonationModal.vue';

const props = defineProps({
  buttonText: {
    type: String,
    default: 'Donate Now'
  },
  initiative: {
    type: String,
    default: 'Our Mission'
  }
});

const emit = defineEmits(['success', 'error']);

const showModal = ref(false);
const isProcessing = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const donation = ref({
  amount: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  postalCode: '',
  isRecurring: false,
  frequency: 'one-time',
  comments: ''
});

const openModal = () => {
  showModal.value = true;
  errorMessage.value = '';
  successMessage.value = '';
};

const closeModal = () => {
  showModal.value = false;
};

const handleSubmit = async (formData) => {
  try {
    isProcessing.value = true;
    errorMessage.value = '';
    
    // Here you would typically make an API call to process the donation
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    successMessage.value = 'Thank you for your generous donation!';
    emit('success', formData);
    
    // Close the modal after a short delay
    setTimeout(() => {
      closeModal();
    }, 2000);
  } catch (error) {
    errorMessage.value = error.message || 'An error occurred while processing your donation.';
    emit('error', error);
  } finally {
    isProcessing.value = false;
  }
};

const handleError = (error) => {
  errorMessage.value = error.message || 'An error occurred with the donation form.';
  emit('error', error);
};
</script>
