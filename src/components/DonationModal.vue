<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 overflow-y-auto"
      @click.self="$emit('close')"
    >
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      ></div>

      <!-- Modal Container -->
      <div
        class="relative flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8"
      >
        <div
          class="relative w-full max-w-lg transform rounded-2xl bg-white shadow-2xl transition-all"
          @click.stop
        >
          <!-- Header -->
          <div
            class="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 rounded-t-2xl"
          >
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 truncate">
                Support {{ selectedInitiative }}
              </h3>
              <p class="text-sm text-gray-500 mt-1">
                Your generous contribution makes a difference
              </p>
            </div>
            <button
              @click="$emit('close')"
              class="ml-4 flex-shrink-0 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Scrollable Content -->
          <div class="max-h-[calc(100vh-12rem)] overflow-y-auto">
            <div class="px-6 py-6">
              <!-- Loading State -->
              <LoadingSpinner v-if="isProcessing" />

              <!-- Messages -->
              <AlertMessage
                v-if="errorMessage"
                type="error"
                :message="errorMessage"
                class="mb-6"
                dismissible
                @dismiss="$emit('error', '')"
              />

              <AlertMessage
                v-if="successMessage"
                type="success"
                :message="successMessage"
                class="mb-6"
              />

              <!-- Donation Form -->
              <DonationForm
                v-if="!isProcessing && !successMessage"
                :donation="donation"
                @submit="handleSubmit"
                @error="handleFormError"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import LoadingSpinner from "./LoadingSpinner.vue";
import AlertMessage from "./AlertMessage.vue";
import DonationForm from "./DonationForm.vue";

const props = defineProps({
  isOpen: Boolean,
  selectedInitiative: String,
  donation: Object,
  isProcessing: Boolean,
  errorMessage: String,
  successMessage: String,
});

const emit = defineEmits(["close", "submit", "error"]);

const handleSubmit = (result) => {
  emit("submit", result);
};

const handleFormError = (error) => {
  emit("error", error);
};
</script>
