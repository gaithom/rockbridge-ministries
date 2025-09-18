<template>
  <div class="flex flex-col items-center justify-center py-12">
    <div class="relative">
      <!-- Main spinner -->
      <div class="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin"></div>
      
      <!-- Inner pulse -->
      <div class="absolute inset-2 w-8 h-8 bg-amber-100 rounded-full animate-pulse"></div>
    </div>
    
    <div class="mt-6 text-center">
      <p class="text-amber-700 font-semibold text-lg">Processing your donation...</p>
      <p class="text-gray-500 text-sm mt-2">Please wait while we securely process your payment</p>
    </div>

    <!-- Progress indicators -->
    <div class="mt-6 flex space-x-2">
      <div class="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
      <div class="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
      <div class="w-2 h-2 bg-amber-300 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
    </div>
  </div>
</template>