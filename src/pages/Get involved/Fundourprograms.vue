<template>
  <div>
    <header class="relative bg-cover bg-center min-h-screen flex items-center justify-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/give.jpg');">
      <div class="container mx-auto text-center px-4 py-24">
        
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
          GIVE
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white">
          “Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.”
          <br>
          -2 Corinthians 9:7
        </p>
      </div>
    </header>

    <main class="container mx-auto p-6 md:p-12">
      <!-- General Ministry Section -->
      <section class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-amber-600 mb-4">R.O.C.K. Bridge Ministries</h2>
          <p class="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            If you wish to help us expand our ministries of discipleship, development, and empowerment in Nakuru, we invite you to partner with R.O.C.K. Bridge Ministries. We believe in creating sustainability in missions and not dependence on our help; therefore, the donations we collect are used for creating lifelong investments in the Kingdom of God in Nakuru.
          </p>
        </div>
      </section>

      <!-- Donation Cards Grid -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Our Ministry Initiatives</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          <!-- Holiday Homes Card -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div class="h-48 overflow-hidden">
              <img src="/images/holidayhomes.jpg" alt="Holiday Homes" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-xl font-bold text-gray-800 mb-3">Holiday Homes</h3>
              <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                High-end hospitality business builds a sustainable, income-generating model to aid aspiring students from vulnerable communities. Revenue from Holiday Homes will support higher education for children from aiekele communities and the orphans graduating from Tumaini Mission School and Children's Home.
              </p>
              <blockquote class="italic border-l-4 border-amber-600 pl-3 text-sm text-gray-500 mb-4">
                "Even though there are many limitations during these difficult days, it is not time to be sleeping. The time to build is now!" - Zablon Koria
              </blockquote>
              <div class="mt-auto pt-4">
                <div class="flex flex-col space-y-2">
                <button @click="openDonationModal('Holiday Homes')" class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-sm shadow-md hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl w-full">
                  <span class="mr-2">DONATE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <span class="text-sm text-gray-500 text-center">Support Holiday Homes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Clean Water Initiative Card -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div class="h-48 overflow-hidden">
              <img src="/images/water.jpg" alt="Clean Water Initiative" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-xl font-bold text-gray-800 mb-3">Clean Water Initiative</h3>
              <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                R.O.C.K. Bridge Ministries is committed to sustainability through our Clean Water Initiative. Started in 2019, we provide clean, accessible water to households. With donations from U.S. partners, we surpassed our first water target and continue supplying water to the community.
              </p>
              <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                In memory of Reverend Dr. Lane, we've acquired two more water trucks. Your donation helps us purchase more water trucks and drilling equipment to reach vulnerable groups in need.
              </p>
              <div class="mt-auto pt-4">
                <div class="flex flex-col space-y-2">
                <button @click="openDonationModal('Clean Water Initiative')" class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-sm shadow-md hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl w-full">
                  <span class="mr-2">DONATE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <span class="text-sm text-gray-500 text-center">Support Clean Water Initiative</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Workplace Ministry Card -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div class="h-48 overflow-hidden">
              <img src="/images/workplace.jpg" alt="Workplace Ministry" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-xl font-bold text-gray-800 mb-3">Workplace Ministry</h3>
              <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                Supporting this rapidly growing ministry helps us meet requests from business owners who want someone to share God's word in their workplace. We need ongoing support and additional staff to expand this ministry.
              </p>
              <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                We need a ministry van for workplace evangelism logistics, home visits, and community outreach, plus a laptop for teachings and communications.
              </p>
              <div class="mt-auto pt-4">
                <div class="flex flex-col space-y-2">
                <button @click="openDonationModal('Workplace Ministry')" class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-sm shadow-md hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl w-full">
                  <span class="mr-2">DONATE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <span class="text-sm text-gray-500 text-center">Support Workplace Ministry</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Lish AI Labs Card -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div class="h-48 overflow-hidden">
              <img src="/images/lishai.jpg" alt="Lish AI Labs" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-xl font-bold text-gray-800 mb-3">Lish AI Labs</h3>
              <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                A digital skills training and job aggregator firm based in Nakuru. In partnership with R.O.C.K Bridge ministries, the ministry of ICT, and other key stakeholders, we provide young people with digital skills in AI and Machine Learning while creating employment opportunities.
              </p>
              <div class="mt-auto pt-4">
                <div class="flex flex-col space-y-2">
                <button @click="openDonationModal('Lish AI Labs')" class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-sm shadow-md hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl w-full">
                  <span class="mr-2">DONATE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <span class="text-sm text-gray-500 text-center">Support Lish AI Labs</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Upendo Academy Card -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div class="h-48 overflow-hidden">
              <img src="/images/upendo.jpg" alt="Upendo Academy" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-xl font-bold text-gray-800 mb-3">Upendo Academy</h3>
              <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                The majority of children in the Kaptembwa Estate surrounding the Upendo Church cannot attend school due to inability to pay fees. Supporting these children provides quality education, school uniforms, and nutritional meals.
              </p>
              <div class="mt-auto pt-4">
                <div class="flex flex-col space-y-2">
                <button @click="openDonationModal('Upendo Academy')" class="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-sm shadow-md hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl w-full">
                  <span class="mr-2">DONATE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <span class="text-sm text-gray-500 text-center">Support Upendo Academy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Payment Information Section -->
      <section class="bg-white rounded-xl shadow-lg p-8 mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Payment Options -->
          <div class="space-y-6">
            <div class="p-4 bg-amber-100 border-l-4 border-amber-600 rounded">
              <h2 class="font-bold text-lg mb-2">DONATE NOW</h2>
              <p class="text-sm">All donations to R.O.C.K. Bridge Ministries are 501(c)(3) tax-deductible.</p>
            </div>
            
            <p class="text-sm leading-relaxed text-gray-600">
              If you feel led to support R.O.C.K. Bridge Ministries or one of our ministries/projects you have a couple of options for giving. We would encourage you to consider using a credit card by choosing one of the options above. You have the availability to make a full one-time payment or set up regular automatic monthly payments.
            </p>
            
            <div class="flex items-center space-x-2 flex-wrap">
              <img src="/images/visa.png" alt="Visa" class="h-8">
              <img src="/images/mastercard.png" alt="Mastercard" class="h-8">
              <img src="/images/discover.png" alt="Discover" class="h-8">
              <img src="/images/amex.png" alt="American Express" class="h-8">
              <img src="/images/jcb.png" alt="JCB" class="h-8">
            </div>
          </div>

          <!-- Contact & Alternative Payment Methods -->
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold text-gray-800 mb-3">Alternative Payment Method</h3>
              <p class="text-sm text-gray-600 mb-2">Checks may be mailed to:</p>
              <address class="not-italic text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <strong>R.O.C.K. Bridge Ministries, Inc.</strong><br>
                3375 Piedmont Rd NE, Bldg 12, Ste 1330<br>
                Atlanta, GA 30305<br>
                <span class="font-medium">Phone: 770-308-7276</span>
              </address>
            </div>

            <div class="space-y-4">
              <h3 class="font-semibold text-gray-800">Other Ways to Give</h3>
              <div class="flex flex-col space-y-3">
                <a href="https://www.gofundme.com/f/rockbridge-ministries-water-project" target="_blank" rel="noopener noreferrer" class="block">
                  <img src="/images/gofundme.jpg" alt="GoFundMe" class="h-12 w-auto">
                </a>
                <a href="#" class="block">
                  <img src="/images/amazon-smile-logo.png">
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  

  <!-- Donation Form Modal - Fits Screen -->
  <div v-if="showDonationModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeModal">
    <div class="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div class="sticky top-0 bg-white z-10 p-4 border-b border-gray-100">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-xl font-semibold text-gray-900">Support {{ selectedInitiative }}</h3>
            <p class="text-gray-500 text-xs">Your generous contribution makes a difference</p>
          </div>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Form Content -->
      <div class="p-4 sm:p-6">
        <form @submit.prevent="handleDonation" class="space-y-4">
          <!-- Donation Amount -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">Donation Amount (USD)</label>
            <input type="number" 
                   v-model.number="donation.amount"
                   class="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                   placeholder="Enter amount"
                   min="1"
                   step="1"
                   required>
          </div>
          
          <!-- Personal Information -->
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <div class="space-y-1">
                <label for="firstName" class="block text-xs font-medium text-gray-700">First Name *</label>
                <input type="text" id="firstName" v-model="donation.firstName" required
                      class="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400">
              </div>
              <div class="space-y-1">
                <label for="lastName" class="block text-xs font-medium text-gray-700">Last Name *</label>
                <input type="text" id="lastName" v-model="donation.lastName" required
                      class="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400">
              </div>
            </div>
            
            <div class="space-y-1">
              <label for="email" class="block text-xs font-medium text-gray-700">Email Address *</label>
              <input type="email" id="email" v-model="donation.email" required
                    class="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400">
            </div>
            
            <div class="space-y-1">
              <label for="phone" class="block text-xs font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone" v-model="donation.phone"
                    class="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400">
            </div>
            
            <!-- Payment Information -->
            <div class="pt-4 border-t border-gray-100">
              <h4 class="text-xs font-medium text-gray-700 mb-3">PAYMENT INFORMATION</h4>
              
              <div class="space-y-3">
                <div class="space-y-1">
                  <label for="cardNumber" class="block text-xs font-medium text-gray-700">Card Number *</label>
                  <input type="text" id="cardNumber" v-model="donation.cardNumber" required
                        class="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                        placeholder="1234 5678 9012 3456">
                </div>
                
                <div class="grid grid-cols-2 gap-3">
                  <div class="space-y-1">
                    <label for="expiry" class="block text-xs font-medium text-gray-700">Expiry Date *</label>
                    <input type="text" id="expiry" v-model="donation.expiry" required
                          class="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                          placeholder="MM/YY">
                  </div>
                  <div class="space-y-1">
                    <label for="cvv" class="block text-xs font-medium text-gray-700">CVV *</label>
                    <input type="text" id="cvv" v-model="donation.cvv" required
                          class="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                          placeholder="123">
                  </div>
                </div>
                
                <div class="space-y-1">
                  <label for="zipCode" class="block text-xs font-medium text-gray-700">ZIP/Postal Code *</label>
                  <input type="text" id="zipCode" v-model="donation.zipCode" required
                        class="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400">
                </div>
              </div>
            </div>
            
            <div class="pt-2">
              <button type="submit" 
                      class="w-full bg-amber-600 text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-md hover:shadow-lg">
                Donate ${{ donation.amount || '' }}
              </button>
              <div class="mt-2 flex items-center justify-center space-x-2 text-gray-500">
                <svg class="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="text-[11px]">Secure and encrypted donation</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const showDonationModal = ref(false);
const selectedInitiative = ref('');

const donation = reactive({
  amount: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  zipCode: '',
  initiative: ''
});

const openDonationModal = (initiative) => {
  selectedInitiative.value = initiative;
  donation.initiative = initiative;
  showDonationModal.value = true;
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showDonationModal.value = false;
  // Re-enable body scroll
  document.body.style.overflow = '';
};

const handleDonation = () => {
  // Here you would typically send the donation data to your payment processor
  console.log('Processing donation:', donation);
  // For demo purposes, we'll just show an alert and close the modal
  alert(`Thank you for your donation of $${donation.amount} to ${donation.initiative}!`);
  closeModal();
  
  // Reset form
  Object.assign(donation, {
    amount: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    zipCode: '',
    initiative: ''
  });
};
</script>