<template>
  <div class="min-h-screen text-gray-800">
    <!-- Add Leaflet CSS -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/mZEZPo5RsVEI1EHV44="
      crossorigin=""
    />
    <!-- Hero Section -->
    <div class="bg-gradient-to-b from-gray-800 to-gray-900 text-amber-50 pt-24 md:pt-32 pb-14 md:pb-20 relative overflow-hidden">
      <!-- Decorative wave divider -->
      <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg class="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                class="fill-current text-amber-600 opacity-20"></path>
        </svg>
      </div>
      
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <div class="w-16 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p class="text-lg text-amber-100/90 max-w-2xl mx-auto">
            We'd love to hear from you! Feel free to reach out to us
          </p>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6 py-12">
      <div class="container mx-auto px-6 pb-16 grid lg:grid-cols-2 gap-12">
        <div class="space-y-12">
          <div>
            <h2 class="text-2xl font-bold mb-6">Get in Touch!</h2>

            <div class="bg-white p-8 rounded-lg shadow-xl space-y-6">
              <div>
                <h3 class="font-semibold text-lg flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.26 1.13a11.042 11.042 0 005.516 5.516l1.13-2.26a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z" />
                  </svg>
                  Give Us a Call
                </h3>
                <div class="text-gray-600">
                  <p class="mb-2">If you would like to speak to someone, please call:</p>
                  <div class="flex flex-col space-y-2 pl-4">
                    <a href="tel:+14049349728" class="text-blue-600 hover:underline">(404) 934-9728</a>
                    <a href="tel:+14042597735" class="text-blue-600 hover:underline">(404) 259-7735</a>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="font-semibold text-lg flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Our Locations
                </h3>
                
                <!-- Atlanta Map -->
                <div class="mb-8">
                  <h4 class="font-medium text-gray-700 mb-2">R.O.C.K. Bridge Ministries, Inc.</h4>
                  <p class="text-gray-600 mb-3">
                    3575 Piedmont Rd NE Bldg 15 Ste 1550<br>
                    Atlanta, GA 30305
                  </p>
                  <div id="atlantaMap" class="h-64 rounded-lg shadow-md"></div>
                </div>
                
                <!-- Kenya Map -->
                <div>
                  <h4 class="font-medium text-gray-700 mb-2">Kenya Office</h4>
                  <p class="text-gray-600 mb-3">
                    P.O. Box 16412-20100<br>
                    Nakuru, Kenya
                  </p>
                  <div id="kenyaMap" class="h-64 rounded-lg shadow-md"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-2xl font-bold mb-6">Follow Us</h2>
            <div class="flex space-x-4">

              <a href="https://www.facebook.com/rockbridgeministrieskenya/" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-[-5deg] transform-gpu overflow-hidden">
                <!-- Animated background elements -->
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <!-- Icon with 3D effect -->
                <div class="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-7H8.5v-3H10V9.5c0-1.38 1.11-2.5 2.5-2.5h2v3h-1.5c-.28 0-.5.22-.5.5V12h2.5v3H13v7.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </div>
                <!-- Shine effect on hover -->
                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-shine"></div>
                <!-- Tooltip -->
                <span class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                  Follow us on Facebook
                  <svg class="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 16 8">
                    <path d="M0 0h16L8 8 0 0z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-xl h-fit">
          <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form>
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="first-name" placeholder="Your first name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="last-name" placeholder="Your last name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              </div>
            </div>
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" placeholder="your.email@example.com" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-6">
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone (Optional)</label>
              <input type="tel" id="phone" placeholder="(540) 555-0123" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-6">
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" placeholder="How can we help you?" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" placeholder="Tell us how we can help or what questions you have..." class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-900 text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition-colors duration-200">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Vite
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

const locations = {
  atlanta: {
    coords: [33.8466, -84.3625],
    zoom: 15,
    title: 'R.O.C.K. Bridge Ministries, Inc.',
    address: '3575 Piedmont Rd NE Bldg 15 Ste 1550, Atlanta, GA 30305'
  },
  kenya: {
    coords: [-0.3031, 36.0800],
    zoom: 13,
    title: 'R.O.C.K. Bridge Ministries, Kenya',
    address: 'P.O. Box 16412-20100, Nakuru, Kenya'
  }
};

onMounted(() => {
  // Initialize Atlanta Map
  const atlantaMap = L.map('atlantaMap').setView(locations.atlanta.coords, locations.atlanta.zoom);
  
  // Add tile layer to Atlanta map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(atlantaMap);
  
  // Add marker for Atlanta location with popup
  const atlantaMarker = L.marker(locations.atlanta.coords, { 
    icon: defaultIcon,
    title: locations.atlanta.title
  }).addTo(atlantaMap);
  
  atlantaMarker.bindPopup(`
    <div class="p-2">
      <h3 class="font-bold text-sm">${locations.atlanta.title}</h3>
      <p class="text-xs">${locations.atlanta.address}</p>
    </div>
  `).openPopup();

  // Initialize Kenya Map
  const kenyaMap = L.map('kenyaMap').setView(locations.kenya.coords, locations.kenya.zoom);
  
  // Add tile layer to Kenya map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(kenyaMap);
  
  // Add marker for Kenya location with popup
  const kenyaMarker = L.marker(locations.kenya.coords, { 
    icon: defaultIcon,
    title: locations.kenya.title
  }).addTo(kenyaMap);
  
  kenyaMarker.bindPopup(`
    <div class="p-2">
      <h3 class="font-bold text-sm">${locations.kenya.title}</h3>
      <p class="text-xs">${locations.kenya.address}</p>
    </div>
  `).openPopup();
});
</script>

<style scoped>
/* Ensure the map containers have proper dimensions */
#atlantaMap, #kenyaMap {
  width: 100%;
  height: 300px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
  z-index: 1;
}

/* Style for popup content */
:deep(.leaflet-popup-content) {
  margin: 8px 12px;
  line-height: 1.4;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

:deep(.leaflet-popup-tip) {
  background: white;
}
</style>