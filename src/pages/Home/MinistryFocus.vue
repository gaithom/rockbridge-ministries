<!-- <template>
    <section id="stats" class="py-20 bg-white">
       <div class="container mx-auto px-4">
            <header data-aos="fade-up" data-aos-delay="500">
                <h2 class="text-4xl font-bold text-dark mb-5 text-center text-green-900 relative">Wildlife In Crisis</h2>
                <div class="w-16 h-1 bg-orange-500 mx-auto mb-5"></div>
                <p class="section-subtitle text-center text-xl mb-5 text-gray-600 ">Our planet's biodiversity is under threat. 
                  <br />Here are some alarming statistics:</p>
           </header>
           
            <ul
                data-aos="fade-up"
                data-aos-delay="500"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  <li v-for="(statistics,index) in statistics" :key="index">
                    <article class="bg-green-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-px-5] h-full flex flex-col"
                    >
                       <figure class="mb-6">
                          <img
                             :src="statistics.icon"
                             class="w-14 h-14 object-contain"
                             aria-hidden="true" 
                          />  
                       </figure>
                       
                       <strong class="text-4xl font-bold text-green-900">
                          {{ statistics.value }} 
                       </strong>

                       <p
                          class="text-xl font-semi-bold text-gray-800 mb-3">
                          {{ statistics.text }}
                       </p>
                    </article>
                  </li>          
            </ul>
       </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import SpeciesIcon from '../assets/icons/Species.png'
import TreeIcon from '../assets/icons/Tree.png'
import LionIcon from '../assets/icons/Lion.png'
import PlasticIcon from '../assets/icons/Plastic.png'
const statistics = ref([
     {
         icon:SpeciesIcon,
         value:"42000+",
         text:"Species at risk of extinction",
     },

     {
         icon:TreeIcon,
         value:"10%",
         text:"Forest cover lost since 1990",
     },

     {
         icon:LionIcon,
         value:"68%",
         text:"Decline in Wildlife Populations Since 1970",
     },

    {
         icon:PlasticIcon,
         value:"8M",
         text:"Tons of Plastic Entering Oceans Yearly"
    },

]);
</script>
 -->


 <template>
  <section id="stats" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <header data-aos="fade-up" data-aos-delay="500">
        <h2 class="text-4xl font-bold text-dark mb-5 text-center text-green-900 relative">
          Wildlife In Crisis
        </h2>
        <div class="w-16 h-1 bg-orange-500 mx-auto mb-5"></div>
        <p class="section-subtitle text-center text-xl mb-5 text-gray-600">
          Our planet's biodiversity is under threat. 
          <br />Here are some alarming statistics:
        </p>
      </header>

      <!-- Stats Grid -->
      <ul
        data-aos="fade-up"
        data-aos-delay="500"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <li v-for="(stat, index) in statistics" :key="index">
          <article
            class="bg-green-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-px-5] h-full flex flex-col"
          >
            <figure class="mb-6">
              <Icon
                :icon="stat.icon"
                class="w-14 h-14 text-green-900"
                aria-hidden="true"
              />
            </figure>

            <strong class="text-4xl font-bold text-green-900">
              {{ stat.value }}
            </strong>

            <p class="text-xl font-semi-bold text-gray-800 mb-3">
              {{ stat.text }}
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

// Choose icons from https://icon-sets.iconify.design
const statistics = ref([
  {
    icon: 'mdi:paw', // Species
    value: '42000+',
    text: 'Species at risk of extinction',
  },
  {
    icon: 'mdi:tree', // Forest
    value: '10%',
    text: 'Forest cover lost since 1990',
  },
  {
    icon: 'mdi:lion', // Lion
    value: '68%',
    text: 'Decline in Wildlife Populations Since 1970',
  },
  {
    icon: 'mdi:bottle-soda-classic-outline', // Plastic
    value: '8M',
    text: 'Tons of Plastic Entering Oceans Yearly',
  },
])
</script>
