<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 h-96">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 overflow-hidden">
        <img 
          src="/images/getinvolved.jpg" 
          alt="Community coming together" 
          class="w-full h-full object-cover opacity-40"
        >
      </div>
      
      <!-- Hero Content -->
      <div class="relative max-w-7xl mx-auto h-full flex items-center px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Get Involved
          </h1>
          <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto italic">
            "Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth." - 2 Timothy 2:15
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
     

     
    <div id="get-involved" class="container mx-auto px-6 py-16 tab-content">
      <!-- Header Section -->
      <div class="text-center mb-16">
        
        <div class="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
        <p class="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
          We want to invite you to form a relationship with us at R.O.C.K Bridge Ministries! We are a group of people who feel called to obey Christ by reaching out to the community of Nakuru, Kenya. We believe that everyone has something to offer, and we would love to find a way for you to get involved.
        </p>
      </div>


      <!-- Tab Navigation -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-md">
          <button
            @click="scrollToSection('ways-to-get-involved')"
            :class="{
              'bg-amber-500 text-white shadow-lg': currentSection === 'ways-to-get-involved',
              'text-gray-700 hover:bg-gray-100': currentSection !== 'ways-to-get-involved'
            }"
            class="px-6 py-2 rounded-md font-medium transition-all duration-200"
          >
            Ways to Get Involved
          </button>
          <button
            @click="scrollToSection('how-to-support-mission')"
            :class="{
              'bg-amber-500 text-white shadow-lg': currentSection === 'how-to-support-mission',
              'text-gray-700 hover:bg-gray-100': currentSection !== 'how-to-support-mission'
            }"
            class="px-6 py-2 rounded-md font-medium transition-colors duration-200"
          >
            How to Support Our Mission
          </button>
          <button
            @click="scrollToSection('fund-our-programs')"
            :class="{
              'bg-amber-500 text-white shadow-lg': currentSection === 'fund-our-programs',
              'text-gray-700 hover:bg-gray-100': currentSection !== 'fund-our-programs'
            }"
            class="px-6 py-2 rounded-md font-medium transition-colors duration-200"
          >
            Fund Our Programs
          </button>
          <button
            @click="scrollToSection('partner-with-us')"
            :class="{
              'bg-amber-500 text-white shadow-lg': currentSection === 'partner-with-us',
              'text-gray-700 hover:bg-gray-100': currentSection !== 'partner-with-us'
            }"
            class="px-6 py-2 rounded-md font-medium transition-colors duration-200"
          >
            Partner With Us
          </button>
        </div>
      </div>

      <!-- Ways to Get Involved Content -->
      <div id="ways-to-get-involved" class="mb-20">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-12" data-aos="fade-up">
          Ways You Can Make a Difference
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Donate -->
          <div 
            class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="mb-6 flex justify-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center font-bold text-gray-900 mb-4">Donate</h3>
            <p class="text-gray-600 mb-6 text-center flex-grow">
              Your donation will help us continue our work in Nakuru. We use donations to fund our programs, such as our scholarship program, our clean water initiative, and our community development projects.
            </p>
            <button @click="scrollToSection('fund-our-programs')" class="w-full bg-amber-100 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mt-auto group/btn">
              Make a Donation
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <!-- Partner -->
          <div 
            class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="mb-6 flex justify-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center font-bold text-gray-900 mb-4">Partner</h3>
            <p class="text-gray-600 mb-6 text-center flex-grow">
              At R.O.C.K Bridge ministries we believe in partnerships and collaborations that pools resources together for the betterment of our community.
            </p>
            <button @click="scrollToSection('partner-with-us')" class="w-full bg-gray-900 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mt-auto group/btn">
              Become a Partner
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <!-- Volunteer -->
          <div 
            class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="mb-6 flex justify-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl text-center font-bold text-gray-900 mb-4">Volunteer</h3>
            <p class="text-gray-600 mb-6 text-center flex-grow">
              We are always looking for volunteers to help us with our work. You can volunteer your time in a variety of ways, professional consultant or working on our construction projects.
            </p>
            <button @click="scrollToSection('how-to-support-mission')" class="w-full bg-amber-100 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/btn">
                Join as Volunteer
              </button>
          </div>

          <!-- Pray & Spread the Word (Combined) -->
          <div 
            class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3 lg:justify-self-center lg:max-w-3xl w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Pray -->
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Pray</h3>
                <p class="text-gray-600">
                  Prayer is our most powerful weapon. We would love for you to pray for us and for the people we serve.
                </p>
              </div>

              <!-- Spread the Word -->
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Spread the Word</h3>
                <p class="text-gray-600">
                  Tell your friends and family about R.O.C.K Bridge Ministries and encourage them to get involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Impact Section -->
      <div class="bg-gray-900 rounded-3xl p-12 mb-20" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-white text-center mb-12">
          Our Impact Areas
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Workplace Evangelism -->
          <router-link to="/our-ministries/workplace-evangelism" class="block text-center group">
            <div class="relative mb-6">
              <img src="/images/ourimpact1.jpg" 
                   alt="Workplace Evangelism" 
                   class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl group-hover:from-black/70 transition-colors duration-300"></div>
              <span class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl group-hover:text-amber-300 transition-colors duration-300">Workplace Evangelism</span>
            </div>
            <p class="text-gray-300 group-hover:text-amber-200 transition-colors duration-300">
              Equipping Christians to share their faith effectively in professional settings.
            </p>
          </router-link>

          <!-- Education Scholarship -->
          <router-link to="/our-ministries/education-scholarship" class="block text-center group">
            <div class="relative mb-6">
              <img src="/images/ourimpact2.jpg" 
                   alt="Education Scholarship" 
                   class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl group-hover:from-black/70 transition-colors duration-300"></div>
              <span class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl group-hover:text-amber-300 transition-colors duration-300">Education Scholarship</span>
            </div>
            <p class="text-gray-300 group-hover:text-amber-200 transition-colors duration-300">
              Providing quality education and scholarships to underprivileged students.
            </p>
          </router-link>

          <!-- Social Enterprises -->
          <router-link to="/our-ministries/social-enterprises" class="block text-center group">
            <div class="relative mb-6">
              <img src="/images/ourimpact3.jpg" 
                   alt="Social Enterprises" 
                   class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl group-hover:from-black/70 transition-colors duration-300"></div>
              <span class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xl group-hover:text-amber-300 transition-colors duration-300">Social Enterprises</span>
            </div>
            <p class="text-gray-300 group-hover:text-amber-200 transition-colors duration-300">
              Building sustainable community projects and social enterprises that create lasting change.
            </p>
          </router-link>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-amber-50 rounded-3xl p-12 mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          Ready to Make a Difference?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          No matter how you choose to get involved, we are grateful for your support. Together, we can make a difference in the lives of people in Nakuru.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          
        </div>
        <p class="text-sm text-gray-500 mt-6">
          To learn more about how you can get involved, please visit our website or 
          <router-link to="/contact" class="text-green-600 font-semibold hover:text-amber-700 transition-colors duration-200">contact us</router-link>!
        </p>
      </div>

      <!-- How to Support Our Mission Content -->
      <div id="how-to-support-mission" class="bg-gradient-to-b from-gray-50 to-white py-16 px-6 rounded-3xl shadow-lg mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Invest in Our Mission
            </h2>
            <div class="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
            <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Your support helps us transform lives through education and community development in Kenya.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <!-- Left Column -->
            <div class="space-y-12">
              <!-- Individual Donations -->
              <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Individual Donations</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  The power to open pathways to education. Your donation helps students from needy backgrounds transition to higher education and achieve their educational goals.
                </p>
                <div class="space-y-3 mt-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Online:</span> Make a secure donation on our website
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">By mail:</span> Send a check to Gibbon House, P.O. Box 16142-20100, Nakuru, Kenya
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">In person:</span> Visit our office at Gibbon House, Opposite Nyayo Garden
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <button @click="openDonationModal('General Donation')" class="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200 group/link">
                    Donate Now
                    <svg class="ml-2 h-5 w-5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Foundation Grants -->
              <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-right" data-aos-delay="100">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Foundation Grants</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  We invite like-minded organizations and donors to help us pursue grants for our scholarship program and improve education in our community.
                </p>
                <div class="space-y-3 mt-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Scholarship grants:</span> Help provide scholarships to more students from needy backgrounds
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">General operating grants:</span> Support the overall operations of our ministry
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <router-link to="/contact" class="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200 group/link">
                    Learn More
                    <svg class="ml-2 h-5 w-5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>

            </div>

            <!-- Right Column -->
            <div class="space-y-12">
              <!-- Corporate Sponsorships -->
              <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Corporate Sponsorships</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Partner with us to help students from needy backgrounds while achieving your organization's community and social responsibility objectives.
                </p>
                <div class="space-y-3 mt-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Event sponsorships:</span> Sponsor our outreach events to create more impact
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Program sponsorship:</span> Support specific initiatives like our Scholarship Program
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      <span class="font-semibold">Product or service support:</span> Provide operational supplies and services
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <router-link to="/contact" class="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200 group/link">
                    Partner With Us
                    <svg class="ml-2 h-5 w-5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>

              <!-- In-Kind Donations -->
              <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-left" data-aos-delay="100">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">In-Kind Donations</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Your donation of goods or services can help reduce our operating costs and free up more resources for our programs.
                </p>
                <div class="space-y-3 mt-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      Office supplies and equipment
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      Printing and design services
                    </p>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p class="ml-3 text-gray-700">
                      Materials for holiday homes and community projects
                    </p>
                  </div>
                </div>
                <div class="mt-6">
                  <router-link to="/contact" class="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200 group/link">
                    Contact Us to Donate
                    <svg class="ml-2 h-5 w-5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fund Our Programs Content -->
      <div id="fund-our-programs" class="container mx-auto p-6 md:p-12 bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-xl mt-12">
        <!-- Ministry Introduction -->
        <section class="mb-16" data-aos="fade-up">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
              R.O.C.K. Bridge Ministries
            </h2>
            <p class="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
              If you wish to help us expand our ministries of discipleship,
              development, and empowerment in Nakuru, we invite you to partner
              with R.O.C.K. Bridge Ministries. We believe in creating
              sustainability in missions and not dependence on our help;
              therefore, the donations we collect are used for creating lifelong
              investments in the Kingdom of God in Nakuru.
            </p>
          </div>
        </section>

        <!-- Ministry Cards -->
        <section class="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2
            class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Our Ministry Initiatives
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <MinistryCard
              v-for="ministry in ministries"
              :key="ministry.title"
              :ministry="ministry"
              @donate="openDonationModal"
            />
          </div>
        </section>

        <!-- Payment Information -->
        <section class="bg-white rounded-xl shadow-lg p-8 mb-16" data-aos="fade-up" data-aos-delay="300">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Payment Options -->
            <div class="space-y-6">
              <div class="p-4 bg-amber-100 border-l-4 border-amber-600 rounded">
                <h2 class="font-bold text-lg mb-2">DONATE NOW</h2>
                <p class="text-sm">
                  All donations to R.O.C.K. Bridge Ministries are 501(c)(3)
                  tax-deductible.
                </p>
              </div>

              <p class="text-sm leading-relaxed text-gray-600">
                If you feel led to support R.O.C.K. Bridge Ministries or one of
                our ministries/projects you have a couple of options for giving.
                We would encourage you to consider using a credit card by choosing
                one of the options above. You have the availability to make a full
                one-time payment or set up regular automatic monthly payments.
              </p>

              <div class="flex items-center space-x-2 flex-wrap">
                <img src="/images/visa.png" alt="Visa" class="h-8" />
                <img src="/images/mastercard.png" alt="Mastercard" class="h-8" />
                <img src="/images/discover.png" alt="Discover" class="h-8" />
                <img src="/images/amex.png" alt="American Express" class="h-8" />
                <img src="/images/jcb.png" alt="JCB" class="h-8" />
              </div>
            </div>

            <!-- Contact & Alternative Payment Methods -->
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold text-gray-800 mb-3">
                  Alternative Payment Method
                </h3>
                <p class="text-sm text-gray-600 mb-2">Checks may be mailed to:</p>
                <address
                  class="not-italic text-sm text-gray-600 bg-gray-50 p-4 rounded-lg"
                >
                  <strong>R.O.C.K. Bridge Ministries, Inc.</strong><br />
                  3375 Piedmont Rd NE, Bldg 12, Ste 1330<br />
                  Atlanta, GA 30305<br />
                  <span class="font-medium">Phone: 770-308-7276</span>
                </address>
              </div>

              <div class="space-y-4">
                <h3 class="font-semibold text-gray-800">Other Ways to Give</h3>
                <div class="flex flex-col space-y-3">
                  <a
                    href="https://www.gofundme.com/f/rockbridge-ministries-water-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block"
                  >
                    <img
                      src="/images/gofundme.jpg"
                      alt="GoFundMe"
                      class="h-12 w-auto"
                    />
                  </a>
                  <a href="#" class="block">
                    <img src="/images/amazon-smile-logo.png" alt="Amazon Smile" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Partner With Us Content -->
      <div id="partner-with-us" class="w-full px-6 sm:px-8 py-16">
        <div class="w-full max-w-7xl mx-auto">
          <!-- Top actions row: right aligned Contact -->
          <div class="flex justify-end mb-10">
            <router-link to="/contact">
              <button class="px-4 py-2 text-xs font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-200">
                Contact
              </button>
            </router-link>
          </div>

          <!-- Intro strip -->
          <div class=" rounded-2xl p-6 md:p-8 mb-12 text-center w-full">
            <p class="text-gray-700 text-base md:text-lg max-w-4xl mx-auto">
              Partner with R.O.C.K Bridge Ministries through workplace evangelism, education scholarships, and social enterprises.
              Your partnership fuels sustainable, Gospel-centered impact in Kenya.
            </p>
          </div>

          <!-- Creative grid cards - modified layout -->
          <div class="space-y-8 lg:space-y-10">
            <!-- Top row with two cards side by side -->
            <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <!-- Workplace Evangelism Card -->
              <section class=" rounded-3xl p-8 shadow-sm hover: duration-300 hover:-translate-y-1 h-full" data-aos="fade-right">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shadow-inner">
                  <svg class="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div class="inline-flex items-center gap-2 mb-1">
                    <span class="text-xs uppercase tracking-wider font-semibold text-amber-700">Workplace Evangelism</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Ambassadors</span>
                  </div>
                  <h3 class="text-xl font-bold text-slate-900">Be a Light Where You Work</h3>
                </div>
              </div>
              <ul class="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed list-disc pl-6">
                <li>
                  <span class="font-semibold">Become a Workplace Ambassador:</span>
                  ROCK Bridge Ministries Workplace Ambassadors are individuals who are committed to sharing their faith in the workplace.
                  They receive training and resources to help them do this effectively. 
                  To become a Workplace Ambassador, you can contact ROCK Bridge Ministries.
                </li>
                <li>
                  <span class="font-semibold">Share your story with colleagues:</span>
                  One of the best ways to share your faith in the workplace is to simply share your story. 
                  Talk to your colleagues about how your faith has impacted your life and how it has helped you to be a better person.
                </li>
              </ul>
              </section>
              <!-- Education Scholarships Card -->
              <section class=" rounded-3xl p-8 shadow-sm hover: duration-300 hover:-translate-y-1 h-full" data-aos="fade-up" data-aos-delay="100">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shadow-inner">
                  <svg class="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.468 9.563 5 8 5a4 4 0 000 8h2.167M12 6.253c1.168.174 2.437.53 4 1.247M10 19h4m-2-12V5" />
                  </svg>
                </div>
                <div>
                  <div class="inline-flex items-center gap-2 mb-1">
                    <span class="text-xs uppercase tracking-wider font-semibold text-amber-700">Education Scholarships</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Students</span>
                  </div>
                  <h3 class="text-xl font-bold text-slate-900">Open Pathways to Education</h3>
                </div>
              </div>
              <ul class="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed list-disc pl-6">
                <li>
                  <span class="font-semibold">Donate to the scholarship fund:</span>
                  You can donate to the ROCK Bridge Ministries scholarship fund by visiting their website or by sending a check to their mailing address.
                  Your donation will help to provide scholarships to students in Kenya who need financial assistance to afford quality education.
                </li>
                <li>
                  <span class="font-semibold">Sponsor a student:</span>
                  You can sponsor a student through ROCK Bridge Ministries by making a monthly donation. 
                  Your sponsorship will help to cover the student’s tuition, fees, and living expenses.
                </li>
                <li>
                  <span class="font-semibold">Volunteer to tutor or mentor:</span>
                  You can volunteer your time to tutor or mentor students through ROCK Bridge Ministries. 
                  This is a great way to help students succeed in school and to share your faith with them.
                </li>
              </ul>
            </section>
            </div>
            
            <!-- Social Enterprises Card - Full Width -->
            <section class=" rounded-3xl p-8 duration-300 hover:-translate-y-1 h-full" data-aos="fade-up" data-aos-delay="200">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shadow-inner">
                  <svg class="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" />
                  </svg>
                </div>
                <div>
                  <div class="inline-flex items-center gap-2 mb-1">
                    <span class="text-xs uppercase tracking-wider font-semibold text-amber-700">Social Enterprises</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Sustainability</span>
                  </div>
                  <h3 class="text-xl font-bold text-slate-900">Build Sustainable Impact</h3>
                </div>
              </div>
              <p class="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                ROCK Bridge Ministries operates several social enterprises that generate income to support its other programs.<br><br>
                These enterprises include:
              </p>
              <div class="grid md:grid-cols-3 gap-6">
                <!-- Clean Water -->
                <div class="rounded-2xl border border-slate-200 p-5 bg-amber-50/40">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                      <svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3C8 8 6 11 6 13a6 6 0 0012 0c0-2-2-5-6-10z"/></svg>
                    </span>
                    <span class="font-semibold text-slate-900">Clean Water Initiative</span>
                  </div>
                  <p class="text-gray-700 text-sm md:text-base"> These initiatives provide clean water to communities in need, which helps to improve health and sanitation. The surplus from these initiative is used to fund the organization’s other programs,
                     including scholarships and meeting ministry’s operating costs.</p>
                </div>
                <!-- Holiday Homes -->
                <div class="rounded-2xl border border-slate-200 p-5 bg-amber-50/40">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                      <svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-7 9 7v7a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                    </span>
                    <span class="font-semibold text-slate-900">Holiday Homes</span>
                  </div>
                  <p class="text-gray-700 text-sm md:text-base">These homes provide lodging for local and international guests visiting Nakuru. The revenue generated from these homes is used to offer scholarships to students in higher education,
                     ensuring effective transition from secondary to universities/colleges and tertiary institutions. </p>
                </div>
                <!-- Lish AI Labs -->
                <div class="rounded-2xl border border-slate-200 p-5 bg-amber-50/40">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                      <svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                    </span>
                    <span class="font-semibold text-slate-900">Lish AI Labs</span>
                  </div>
                  <p class="text-gray-700 text-sm md:text-base">This is a digital skills training and job aggregator firm that offers youths training and online jobs opportunities in AI and machine learning. The goal of this enterprise is to create 
                    jobs for young people and help them develop in the digital space.</p>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>

    <!-- Ready to Partner CTA Section (Moved Outside Main Container) -->
    <div class="bg-gradient-to-b from-gray-800 to-gray-900 text-amber-50 py-16">
      <div class="container mx-auto text-center px-6 lg:px-8">
        <h3 class="text-2xl md:text-3xl font-bold mb-3 text-white">Ready to Partner?</h3>
        <p class="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          We believe in the power of collaboration and generous giving. Learn how you can make a tangible difference through donations or by becoming a strategic partner with us.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button @click="scrollToSection('fund-our-programs')" class="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-md">
            Fund Our Programs
          </button>
          <router-link to="/contact">
            <button class="px-6 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 transition-colors shadow-md">
              Contact Us to Partner
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Donation Modal -->
    <DonationModal
      :is-open="showDonationModal"
      :selected-initiative="selectedInitiative"
      :donation="donation"
      :is-processing="isProcessing"
      :error-message="errorMessage"
      :success-message="successMessage"
      @close="closeModal"
      @submit="handleDonation"
      @error="handleError"
    />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, onUnmounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DonationModal from '../../components/DonationModal.vue';
import MinistryCard from '../../components/MinistryCard.vue';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100, // Adjust offset for fixed header if any
      behavior: 'smooth',
    });
  }
};

const currentSection = ref('ways-to-get-involved'); // Default active section

const updateActiveSection = () => {
  const sections = [
    { id: 'ways-to-get-involved', el: document.getElementById('ways-to-get-involved') },
    { id: 'how-to-support-mission', el: document.getElementById('how-to-support-mission') },
    { id: 'fund-our-programs', el: document.getElementById('fund-our-programs') },
    { id: 'partner-with-us', el: document.getElementById('partner-with-us') },
  ];

  const scrollPosition = window.scrollY + window.innerHeight / 3; // Offset for better detection

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section.el && section.el.offsetTop <= scrollPosition) {
      currentSection.value = section.id;
      break;
    }
  }
};

// Reactive state from Fundourprograms.vue
const showDonationModal = ref(false);
const selectedInitiative = ref('');
const isProcessing = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const donation = reactive({
  amount: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  postalCode: '',
  message: '',
  ministry: '',
});

// Ministry data from Fundourprograms.vue
const ministries = ref([
  {
    title: 'Holiday Homes',
    image: '/images/holidayhomes.jpg',
    description: [
      'High-end hospitality business builds a sustainable, income-generating model to aid aspiring students from vulnerable communities. Revenue from Holiday Homes will support higher education for children from aiekele communities and the orphans graduating from Tumaini Mission School and Children\'s Home.',
    ],
    quote: {
      text: 'Even though there are many limitations during these difficult days, it is not time to be sleeping. The time to build is now!',
      author: 'Zablon Koria',
    },
  },
  {
    title: 'Clean Water Initiative',
    image: '/images/water.jpg',
    description: [
      'R.O.C.K. Bridge Ministries is committed to sustainability through our Clean Water Initiative. Started in 2019, we provide clean, accessible water to households. With donations from U.S. partners, we surpassed our first water target and continue supplying water to the community.',
      'In memory of Reverend Dr. Lane, we\'ve acquired two more water trucks. Your donation helps us purchase more water trucks and drilling equipment to reach vulnerable groups in need.',
    ],
  },
  {
    title: 'Workplace Ministry',
    image: '/images/workplace.jpg',
    description: [
      'Supporting this rapidly growing ministry helps us meet requests from business owners who want someone to share God\'s word in their workplace. We need ongoing support and additional staff to expand this ministry.',
      'We need a ministry van for workplace evangelism logistics, home visits, and community outreach, plus a laptop for teachings and communications.',
    ],
  },
  {
    title: 'Lish AI Labs',
    image: '/images/lishai.jpg',
    description: [
      'A digital skills training and job aggregator firm based in Nakuru. In partnership with R.O.C.K Bridge ministries, the ministry of ICT, and other key stakeholders, we provide young people with digital skills in AI and Machine Learning while creating employment opportunities.',
    ],
  },
  {
    title: 'Upendo Academy',
    image: '/images/upendo.jpg',
    description: [
      'The majority of children in the Kaptembwa Estate surrounding the Upendo Church cannot attend school due to inability to pay fees. Supporting these children provides quality education, school uniforms, and nutritional meals.',
    ],
  },
]);

// Modal functions from Fundourprograms.vue
const openDonationModal = (initiative) => {
  selectedInitiative.value = initiative;
  donation.ministry = initiative;
  showDonationModal.value = true;
  clearMessages();
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showDonationModal.value = false;
  document.body.style.overflow = '';
  resetForm();
};

const resetForm = () => {
  Object.assign(donation, {
    amount: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postalCode: '',
    message: '',
    ministry: '',
  });
};

const clearMessages = () => {
  errorMessage.value = '';
  successMessage.value = '';
};

const handleError = (error) => {
  console.error('Donation error:', error);
  errorMessage.value = error;
  isProcessing.value = false;
};

const handleDonation = async (result) => {
  console.log('Donation result:', result);

  isProcessing.value = true;
  clearMessages();

  try {
    if (result.success && result.paymentIntent) {
      // Payment was successful
      successMessage.value = `Thank you! Your donation of $${result.amount} to ${result.ministry} has been processed successfully. You should receive an email confirmation shortly.`;

      // Auto-close modal after 5 seconds
      setTimeout(() => {
        closeModal();
      }, 5000);
    } else {
      throw new Error('Payment was not completed successfully');
    }
  } catch (error) {
    console.error('Error processing donation:', error);
    handleError(
      error.message || 'An error occurred while processing your donation'
    );
  } finally {
    isProcessing.value = false;
  }
};

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
    offset: 100
  });
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection(); // Set initial active section
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});
</script>

<style scoped>
.tab-button {
  position: relative;
  overflow: hidden;
}

.tab-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background-color: #fbbf24; /* Directly use the hex code for amber-500 */
  transition: width 0.3s ease-in-out;
}

.tab-button.active::after {
  width: 100%;
}

.tab-button:hover::after {
  width: 100%;
}
</style>