<template>
  <div class="about-page">
    <!-- Hero/Header -->
    <section class="relative pt-28 pb-12 bg-gradient-to-b from-amber-100 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-extrabold text-amber-800 leading-tight">
            About Rock Bridge Ministries
          </h1>
          <p class="mt-5 text-lg text-slate-700">
            
          </p>
        </div>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="py-10">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">Who We Are</h2>
          <div class="mt-4 h-1 w-16 bg-amber-500 rounded"></div>
          <div class="mt-6 prose prose-slate max-w-none">
            <p class="text-slate-700">
         ROCKbridge Ministries is a Christian multi-denominational non-profit 
         organization that bridges communities in the United States with those in Kenya, 
         allowing a two-way flow of resources and opportunities to empower those communities to meet their 
         spiritual and physical needs with the love of Christ. ROCKbridge reaches out to the city of Nakuru, 
         Kenya through outreach, evangelism, and discipleship programs both independently and through partnerships 
         with local churches.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Mission (band) -->
    <section class="py-12 bg-amber-50">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl">
          <h2 class="text-2xl md:text-3xl font-bold text-amber-800">Our Mission</h2>
          <div class="mt-4 h-1 w-16 bg-amber-600 rounded"></div>
          <p class="mt-6 text-slate-800 leading-relaxed">
            ROCKbridge Ministries carries out its mission holistically, using the Gospel as the center from which a
            number of different ministries flow to comprehensively impact every area of a community. The individual 
            ministries ROCKbridge operates and supports are based on the core values of Spiritual Development, Education, 
            Sustainability, and Relationships. These values are carried out in a number of ways through spiritual 
            discipleship, leadership development programs, medical clinics, children’s homes, primary and secondary 
            schools, a nursing and trade college, a conference and retreat centre, and much more.
          </p>
        </div>
      </div>
    </section>

    

    <!-- What We Do / Overview -->
    <section class="py-8">
      <div class="container mx-auto px-6">
        <div class="bg-amber-50 rounded-2xl p-8 border border-amber-100">
          <h2 class="text-2xl md:text-3xl font-bold text-amber-800 mb-4">What We Do</h2>
          <p class="text-slate-700">
            Rock Bridge Ministries advances education through scholarships,
            nurtures faith through evangelism and discipleship, and creates
            sustainable impact through social enterprises and community
            development initiatives.
          </p>
        </div>
      </div>
    </section>

    

    <!-- Divider -->
    <div class="container mx-auto px-6"><hr class="my-10 border-slate-200" /></div>

    

    <!-- Leadership -->
    <section class="py-12">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl md:grid md:grid-cols-12 md:gap-8 items-start">
          <div class="md:col-span-8">
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Leadership</h2>
            <p class="text-slate-700 leading-relaxed">
              The leadership of ROCKbridge Ministries consists of a Kenyan Executive Director and Kenyan staff, 
              a Kenyan Board of Directors, and a Board of Directors in the United States. The Executive Director 
              and staff handle all of the day-to-day operations of the ministries in place in Nakuru, under the
              guidance and direction of the Kenyan Board of Directors. The American Board of Directors comes 
              alongside to provide advice, ideas, support, and access to resources and technology to assist the 
              Kenyan leadership in their mission.
            </p>
          </div>
          <div class="md:col-span-4 md:text-right mt-6 md:mt-0">
            <router-link
              to="/about/board-and-staff"
              class="inline-block bg-amber-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-amber-700 transition"
            >
              View Board and Staff
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

  <script>
  export default {
    name: 'AboutPage'
  }
  </script>

  <style scoped>
  /* Component-specific styles */
  </style>