<template>


  <div class="about-page bg-slate-50 min-h-screen antialiased text-slate-700">
    
    <!-- Hero section with video background and overlay -->
    <section class="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center">

      <div class="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/82iipouWg5U?autoplay=1&mute=1&loop=1&playlist=82iipouWg5U&controls=0&showinfo=0&autohide=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[120vw] h-[120vh] pointer-events-none"
        ></iframe>
      </div>
      <div class="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div class="container mx-auto px-6 relative z-30">
        <div class="max-w-4xl text-center mx-auto">
          <h1
            class="text-5xl md:text-6xl font-extrabold text-gray-500/90 leading-tight tracking-tight drop-shadow-lg animate-fade-in-up"
          >
            About Us
          </h1>
        </div>
      </div>
    </section>

    <!-- Main content sections -->
    <main class="relative z-40 -mt-16">
      <section class="py-12 md:py-16">
        <div class="container mx-auto px-6">
          <!-- Who We Are section: centered content (image removed per request) -->
          <div class="grid gap-12 items-center justify-items-center">
            <div
              class="space-y-6 text-center md:text-center max-w-3xl lg:max-w-4xl"
            >
              <span
                class="inline-block text-amber-600 font-semibold  text-2xl  uppercase tracking-wider"
                >Our Foundation</span
              >
              <h2
                class="text-3xl md:text-2xl font-bold text-slate-900 leading-tight"
              >
                Who We Are
              </h2>

              <p class="text-base md:text-lg leading-relaxed">
                ROCKbridge Ministries is a Christian multi-denominational
                non-profit organization that bridges communities in the United
                States with those in Kenya, allowing a two-way flow of resources
                and opportunities. We empower these communities to meet their
                spiritual and physical needs with the love of Christ.
              </p>
              <p class="text-base md:text-lg leading-relaxed">
                We reach out to the city of Nakuru, Kenya through outreach,
                evangelism, and discipleship programs, both independently and
                through partnerships with local churches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission summary with value highlights (centered content) -->
      <section class="py-12 md:py-16 bg-white shadow-inner">
        <div class="container mx-auto px-6">
          <div
            class="bg-white rounded-3xl p-8 md:p-12 transition-shadow duration-300 hover:shadow-xl text-center"
          >
            <!-- Center icon + heading row -->
            <div class="flex items-center justify-center mb-6">
              <div>
                <span
                  class="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider"
                  >Our Guiding Light</span
                >
                <h2
                  class="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
                >
                  Our Mission
                </h2>
              </div>
            </div>
            <!-- Center the mission paragraph block -->
            <p class="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              ROCKbridge Ministries carries out its mission holistically, using
              the Gospel as the center from which a number of different
              ministries flow to comprehensively impact every area of a
              community. The individual ministries we operate and support are
              based on the core values of
              <span class="font-bold text-amber-800"
                >Spiritual Development, Education, Sustainability,</span
              >
              and <span class="font-bold text-amber-800">Relationships.</span>
            </p>
            <!-- Center feature cards within the grid -->
            <div
              class="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
            >
              <div class="flex items-start bg-amber-100 p-4 rounded-xl">


                <svg class="h-6 w-6 text-slate-900 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <p class="text-sm font-medium text-gray-900">Spiritual Discipleship</p>
              </div>
              <div class="flex items-start bg-amber-100 p-4 rounded-xl">
                <svg class="h-6 w-6 text-slate-900 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.468 9.563 5 8 5a4 4 0 000 8h2.167M12 6.253c1.168.174 2.437.53 4 1.247m-4-1.247C12 5.074 12 5 12 5s.074 0 .148.01c.219.034.428.093.633.178M12 6.253v13m-2.167 0h4.334m-4.334 0a9.923 9.923 0 01-1.464-.234" /></svg>
                <p class="text-sm font-medium text-gray-900">Medical Clinics & Schools</p>
              </div>
              <div class="flex items-start bg-amber-100 p-4 rounded-xl">
                <svg class="h-6 w-6 text-slate-900 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c1.657 0 3 1.343 3 3v2h2v2h-2v-2h-2v-2h-2v-2z" /></svg>
                <p class="text-sm font-medium text-gray-900">Trade College & Retreat Centre</p>
              </div>
              <div class="flex items-start bg-amber-100 p-4 rounded-xl">
                <svg class="h-6 w-6 text-slate-900 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c1.657 0 3 1.343 3 3v2h2v2h-2v-2h-2v-2h-2v-2z" /></svg>
                <p class="text-sm font-medium text-gray-900">Children's Homes</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 md:py-16">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="relative group order-2 md:order-1">
              <img
                src="/images/whatwedo.jpg"
                alt="Group of diverse people working together"
                class="rounded-3xl shadow-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-amber-600 rounded-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-10"
              ></div>
            </div>
            <div class="space-y-6 order-1 md:order-2">
              <span
                class="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider"
                >Our Impact</span
              >
              <h2
                class="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
              >
                What We Do
              </h2>
              <p class="text-base md:text-lg leading-relaxed">
                Rock Bridge Ministries advances education through scholarships,
                nurtures faith through evangelism and discipleship, and creates
                sustainable impact through social enterprises and community
                development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Leadership CTA section -->

      <section class="py-12 md:py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <span
              class="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider"
              >Our Team</span
            >
            <h2
              class="mt-2 text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
            >
              Leadership
            </h2>
            <p class="mt-6 text-base md:text-lg leading-relaxed">
              The leadership of ROCKbridge Ministries consists of a Kenyan
              Executive Director and Kenyan staff, a Kenyan Board of Directors,
              and a Board of Directors in the United States. This dual-board
              structure ensures strong local guidance while leveraging
              international support.
            </p>
            <p class="mt-4 text-base md:text-lg leading-relaxed">
              The Kenyan leadership handles all of the day-to-day operations in
              Nakuru, while the American Board provides advice, ideas, and
              access to resources and technology to assist the Kenyan leadership
              in their mission.
            </p>
            <div class="mt-8">
              <router-link
                to="/about/board-and-staff"
                class="group inline-flex items-center justify-center text-center bg-gray-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-amber-700 transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                <span class="mr-2">View Board & Staff</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
/* Add animations with Tailwind CSS JIT compiler */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
