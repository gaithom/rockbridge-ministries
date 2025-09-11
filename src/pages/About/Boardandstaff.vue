<template>
  <div class="bg-gray-50 min-h-screen font-sans antialiased text-gray-800">
    <section
      class="relative h-96 bg-cover bg-center overflow-hidden flex items-center justify-center"
      style="
        background-image: url('https://images.unsplash.com/photo-1549247775-654876b5d207?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&h=900&fit=crop');
      "
    >
      <div class="absolute inset-0 bg-gray-900 opacity-70 z-10"></div>
      <div class="container mx-auto px-6 text-center relative z-20">
        <h1 class="text-4xl md:text-5xl font-extrabold text-amber-200 mt-6">
          Board and Staff
        </h1>
        <div
          class="w-24 h-1 bg-gradient-to-r from-amber-100 to-orange-100 mx-auto mt-4 mb-5"
        ></div>
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Meet the dedicated leaders of R.O.C.K Bridge Ministries.
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <br /><br />
        <h3
          class="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
        >
          Kenyan Board of Directors
        </h3>
        <div
          class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 mb-5"
        ></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in kenyanBoardMembers"
            :key="member.id"
            @click="handleCardClick(member)"
            class="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 group overflow-hidden"
          >
            <div class="w-full h-64 overflow-hidden bg-slate-100">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="p-6">
              <h3
                class="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors duration-200"
              >
                {{ member.name }}
              </h3>
              <p
                class="text-xs inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-medium mb-3"
              >
                {{ member.position }}
              </p>
              <p class="text-slate-600 text-sm line-clamp-3">
                {{ member.shortBio }}
              </p>

              <button
                type="button"
                class="mt-4 inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
              >
                <span>Learn more</span>
                <svg
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Staff Members -->
      <div class="mb-16">
        <h3
          class="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
        >
          Staff Members
        </h3>
        <div
          class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 mb-5"
        ></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in staffMembers"
            :key="member.id"
            @click="handleCardClick(member)"
            class="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 group overflow-hidden"
          >
            <div class="w-full h-64 overflow-hidden bg-slate-100">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="p-6">
              <h3
                class="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors duration-200"
              >
                {{ member.name }}
              </h3>
              <p
                class="text-xs inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-medium mb-3"
              >
                {{ member.position }}
              </p>
              <p class="text-slate-600 text-sm line-clamp-3">
                {{ member.shortBio }}
              </p>

              <button
                type="button"
                class="mt-4 inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
              >
                <span>Learn more</span>
                <svg
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Board Directors -->
      <div>
        <h3
          class="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
        >
          American Board of Directors
        </h3>
        <div
          class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 mb-5"
        ></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in americanBoardMembers"
            :key="member.id"
            @click="handleCardClick(member)"
            class="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 group overflow-hidden"
          >
            <div class="w-full h-64 overflow-hidden bg-slate-100">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div class="p-6">
              <h3
                class="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors duration-200"
              >
                {{ member.name }}
              </h3>
              <p
                class="text-xs inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-medium mb-3"
              >
                {{ member.position }}
              </p>
              <p class="text-slate-600 text-sm line-clamp-3">
                {{ member.shortBio }}
              </p>

              <button
                type="button"
                class="mt-4 inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
              >
                <span>Learn more</span>
                <svg
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="selectedMember"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        @click="closeModal"
      >
        <div
          class="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-100"
          @click.stop
        >
          <div
            class="flex justify-between items-start p-6 border-b bg-slate-50/60"
          >
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-slate-900 mb-1">
                {{ selectedMember.name }}
              </h3>
              <p class="text-amber-700 font-medium text-sm">
                {{ selectedMember.position }}
              </p>
            </div>
            <button
              @click="closeModal"
              class="text-slate-400 hover:text-slate-600 transition-colors duration-200 ml-4"
            >
              <svg
                class="w-6 h-6"
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

          <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-1/3">
                <img
                  :src="selectedMember.image"
                  :alt="selectedMember.name"
                  class="w-full h-64 md:h-80 object-cover rounded-xl shadow-md border border-slate-100"
                />
              </div>

              <div class="md:w-2/3">
                <h4 class="text-xl font-semibold text-slate-900 mb-4">
                  Biography
                </h4>
                <div class="space-y-4">
                  <p
                    v-for="(paragraph, index) in selectedMember.fullBio"
                    :key="index"
                    class="text-slate-700 leading-relaxed text-justify"
                  >
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="px-6 py-4 bg-slate-50 border-t flex justify-end">
            <button
              @click="closeModal"
              class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  shortBio: string;
  fullBio: string[];
}

const selectedMember = ref<TeamMember | null>(null);

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "ZABLON KURIA",
    position: "Founder & Executive Director, R.O.C.K Bridge Ministries",
    image: "/images/Zablonkuria.jpg",
    shortBio:
      "Former insurance salesman turned missionary and ministry founder.",
    fullBio: [
      "Mr. Kuria was a successful insurance salesman until 1999 when he left his job to pursue a degree in Biblical Education and Leadership in the United States. After graduation in 2006, Mr. Kuria was commissioned by Roswell Presbyterian Church in Georgia to return to Kenya as a missionary. It was after coming back to his country that he started R.O.C.K. Bridge Ministries.",
      "His main calling is to act as a bridge which connects churches, foundations, and corporations abroad to those in Kenya who are serving as the hands and feet of Christ. This way, Mr. Kuria says he is able to mobilize the Kenyan church in the mission of a holistic gospel; preaching the good news to all while uplifting the lives and spirits of the needy. To this end, he continues to seek partnerships with like-minded organizations and individuals who share his vision of transforming communities through Christ-centered development.",
    ],
  },
  {
    id: 2,
    name: "JANE MUTHONI MACHARIA",
    position: "Treasurer",
    image: "/images/Janemuthoni.jpg",
    shortBio:
      "Former teacher turned charitable business leader with a passion for music ministry.",
    fullBio: [
      "A teacher by profession, Mrs. Macharia quit her career to join her husband in business shortly after they married. After he passed, she carried his legacy forward as a charitable business person with a heart for employee empowerment. However, with a passion for teaching music, she has continued instructing at her church, where she plays the keyboard as the music advisor.",
      "Mrs. Macharia actively participates in development projects and mercy ministries within her church. Despite her busy schedule, Mrs. Macharia always makes ample time to serve the needy, as this is one of her basic callings which she yearns to fulfill.",
    ],
  },
  {
    id: 3,
    name: "PRISCA TUITOWEK",
    position:
      "Kenyan Board of Directors, Member at Large Africa Gospel Church: Ngata, Nakuru",
    image: "/images/Priscatuitowek.jpg",
    shortBio:
      "University lecturer and nutrition expert dedicated to empowering marginalized communities.",
    fullBio: [
      "Professor Tuitowek is a lecturer in Human Nutrition at Egerton University where she has been working for over 20 years, where she is also director of Quality Assurance. At her church, Professor Tuitowek serves as an elder in charge of the Protocol section. She is a board member in several institutions, including the Rift Valley Institute of Science and Technology, Kenya Highlands Evangelical University, and Moi High School in Kabarak.",
      "Professor Tuitowek passionately sponsors bright students from poor backgrounds, especially those who come from marginalized communities such as Pokot, Turkana, Ilchamus and Samburu. She is also a private health and nutrition consultant.",
    ],
  },
  {
    id: 4,
    name: "Prof. MARY KARIUKI",
    position: "Nakuru Pentecostal Church",
    image: "/images/Marykariuki.jpg",
    shortBio:
      "Psychology lecturer committed to serving social groups and women's empowerment.",
    fullBio: [
      "Dr. Kariuki is a psychology lecturer at Egerton University in Njoro and is a part-time business lady. She is the President of the Nakuru Business and Professional Women Organization and the Vice Chair of the Nakuru County Peace Committee. She is a member of the Nakuru Business Association's governing council and the Kenya Chamber of Commerce.",
      "Dr. Kariuki has an interest in serving social groups with a bias towards women's empowerment. She would like to see all women treated with respect and dignity at all social levels and for children to receive their right to good shelter and education.",
    ],
  },
  {
    id: 5,
    name: "Prof. VICTORIA MURAYA",
    position: "P.C.E.A. Nakuru West",
    image: "/images/ProfVictoria.jpg",
    shortBio:
      "Former secretary turned entrepreneur dedicated to full-time service for the needy.",
    fullBio: [
      "After working as a secretary in a transport company for 14 years, Mrs. Muraya quit her job to venture into business. While in business, she found it easier balancing between her self-employment and taking care of her family. She later stopped managing her business and now serves on the board of R.O.C.K. Bridge Ministries.",
      "A gentle and generous spirit, Mrs. Muraya finds her joy in full-time service to the needy; a calling she says gives her satisfaction in day-to-day life. She dreams of a day when all children in Africa will no longer suffer; when they will have access to a good education and life's basic needs. For this to be achieved, Mrs. Muraya believes there is need for Christians to give full-time service to the needy.",
    ],
  },
  {
    id: 6,
    name: "DICK MULLOY",
    position: "Food Service Industry",
    image: "/images/Dickmulloy.jpg",
    shortBio:
      "Food service industry professional with a love for the Kenyan people.",
    fullBio: [
      "Dick Mulloy began serving in Nakuru, Kenya with R.O.C.K. Bridge Ministries in 2011 and has been blessed to make numerous trips since then. Dick's love of the Kenyan people has continued to grow stronger with each visit and refers to Nakuru as his 'Fields of Grace'.",
      "Dick joined the R.O.C.K. Ministries board in 2014. Dick has spent his life in the Food Service industry and today is the owner of ServSafe-ly, a company that offers food safety classes to the food service industry.",
    ],
  },
  {
    id: 7,
    name: "LARRY FELDMAN",
    position: "First Baptist Church of Roswell, Roswell, GA",
    image: "/images/Larryfeldman.jpg",
    shortBio:
      "Pharmaceutical industry expert and deacon committed to ministry and his community.",
    fullBio: [
      "Larry spent 38 years in the pharmaceutical industry calling on doctors, nurses, pharmacists, clinics and hospitals. After retiring from GlaxoSmithKline in 2010 he went on his first medical mission trip to Nakuru, Kenya with First Baptist Roswell, Jeff Beech, and R.O.C.K. Bridge Ministries. He joined R.O.C.K. Bridge Ministries as a board member in 2011 and he completed his fifth medical mission trip to Nakuru in January 2016.",
      "Larry grew up in Chattanooga, TN. He is a graduate of the University of Tennessee and he attended graduate school at the University of Notre Dame. He is an active member of First Baptist Roswell in Roswell, GA. He is a Deacon and served as Deacon Chairman in 2013. He is also a member of the Missions Committee and Marketing Committee. He is married and has 3 daughters, 2 sons-in-laws and 5 grandchildren. He enjoys spending time with his family. He jogs in the Peachtree Road Race each year, is an avid college football fan, and loves 80's muscle cars.",
    ],
  },
  {
    id: 8,
    name: "ROGER WOLFF",
    position: "Lake Geneva, Wisconsin, Lake Geneva Lutheran Church",
    image: "/images/Rogerwolff.jpg",
    shortBio:
      "Foundation founder and real estate investor committed to supporting people with special needs.",
    fullBio: [
      "Roger Wolff and his family started a foundation, Christian Partners Foundation in 2005, for the purpose of supporting people with developmental disabilities and their families. They have been partnering with Rock bridge Ministries since that time. Roger's profession is primarily focused in the real estate investment industry.",
      "He is also involved in several other boards in the U.S. that provide services to people with special needs.",
    ],
  },
  {
    id: 9,
    name: "ELLEN LUCCIOLA",
    position: "Roswell Presbyterian Church",
    image: "/images/Ellenlucciola.jpg",
    shortBio:
      "Tax manager and ministry volunteer with a passion for serving homeless families.",
    fullBio: [
      "Ellen Lucciola was first introduced to Kenya and ROCK Bridge Ministries when Zablon Kuria became a member of Roswell Presbyterian Church over 10 years ago. Passionate about serving others, Ellen has been actively involved with several local organizations primarily focused on homeless families. She recently fulfilled a dream by going to Kenya to see first hand all the work God has done through ROCK Bridge Ministries. Ellen feels blessed to be called to this ministry to continue the call and work of God through ROCK Bridge Ministries.",
      "Ellen and her husband of 22 years live in Roswell with their three teenage children, Emma, Wesley and Jake. Ellen works as a Tax Manager with Ronald Blue & Co. CPAs and Consultants, LLC in their Atlanta office where she has over 10 years of experience working with not-for-profit organizations, high net worth individuals, and small businesses. Ellen specializes in tax planning, tax compliance, board governance, and internal controls consulting. She has performed audits of not-for profits, performed internal control reviews, consulted on policies and procedures and prepared required tax filings. Prior to joining Ronald Blue & Co. CPAs and Consultants, Ellen worked with both KPMG and Ernst & Young as a consultant focused on operational improvement and internal controls.",
    ],
  },
  {
    id: 10,
    name: "HANNAH COX",
    position: "Peace Corps Office of the Inspector General, Washington, DC",
    image: "/images/Hannahcox.jpg",
    shortBio:
      "Cultural anthropologist and development professional with extensive international experience.",
    fullBio: [
      "Hannah Cox joined ROCK Bridge Ministries' board in 2015. She currently works as writer/editor for the Peace Corps Office of the Inspector General in Washington, DC. Hannah has a background in cultural anthropology and qualitative research. She has worked on two USAID-funded projects regarding WASH monitoring and climate change response and for the Pathways Program to Empowerment for women in rural agriculture at CARE.",
      "Hannah served as a Peace Corps education volunteer in Tanzania from 2011-2013 (and speaks Swahili!). Hannah holds a B.A. in Anthropology and a B.A. in English from the University of Georgia, and Master's in Development Practice with a Graduate Certificate in Human Rights from Emory University.",
    ],
  },
  {
    id: 11,
    name: "MATT NELSON",
    position: "Church of the Highlands, Anniston, AL",
    image: "/images/Mattnelson.jpg",
    shortBio:
      "Business executive and church leader dedicated to advancing God's mission in Kenya.",
    fullBio: [
      "Married for 23 years to his wife Millie, Matt has 3 kids Kelly – 19, Reaves-17 and Will-15. Matt lives in Anniston, AL. and is Vice President of BR Williams in Oxford, AL. Matt and his family attend Church of the Highlands in Birmingham, AL where he and his Millie are small group leaders.",
      "While in Nakuru in the summer of 2015 with his daughter Kelly and her Pastor Antony and Humphrey (Church Elder) with Upendo Church. While there, God birthed a passion and burden in his heart for the school, kids and community of Kaptembwa. Matt is asking God to use him to advance his mission in this area in whatever way He chooses.",
    ],
  },
  {
    id: 12,
    name: "CHRIS CONNER",
    position: "Milstead Baptist Church, Conyers, Georgia",
    image: "/images/Chrisconner.jpg",
    shortBio:
      "Business owner and ministry supporter with a deep heart for Kenya and its children.",
    fullBio: [
      "Chris went to Kenya in 2009 with his family for the first time. He and his wife Angela have truly developed a heart for Kenya. They have returned at least once every year since that first visit. Both Chris and Angela have developed a passion for the church, medical facility and school at Upendo.",
      "They also have a love for the kids at Tumaini and Upendo and have sponsored children in the Tumaini orphan program. Chris is the owner of Sign Solutions in Conyers, GA.",
    ],
  },
];

// Staff members from the screenshot
const staffMembers: TeamMember[] = [
  {
    id: 13,
    name: "MOSES KIHARA",
    position: "Ministries Administrative Assistant",
    image: "/images/Moseskihara.jpg",
    shortBio:
      "Experienced manager with diverse background in hospitality and operations management.",
    fullBio: [
      "Moses Kihara is a seasoned professional with a diverse background in Hospitality Management and Operations Management in the service industry. He has made a record in both areas. With over a decade of managerial experience, Moses brings a wealth of knowledge and expertise to his role. His leadership style is rooted in precision, accountability, and innovation, making him a strategic and effective manager.",
      "Known for his decisive decision-making, unwavering support to his team, and a dedicated and objective approach to every task, Moses has consistently delivered exceptional results and lead teams towards success. As a Born-Again Christian, he has completed pastoral training with Nairobi Chapel, showcasing not only his commitment to personal and spiritual growth but also his ability to integrate strong ethical values into his managerial approach.",
      "Moses has successfully managed various aspects of services within the ministry as a Youth and Small Groups Pastor, displaying a focused and dedicated approach to spreading the message through his passion for prayer and evangelism. His managerial qualities extend beyond conventional boundaries, as he consistently demonstrates passion in his work. His innovative mindset and commitment to excellence make him a valuable asset in any managerial role.",
      "A meticulous professional, Moses ensures that tasks are executed with precision and efficiency. Currently serving as the Ministries Administrative Assistant at R.O.C.K BRIDGE MINISTRIES, Moses continues to exhibit precise leadership and managerial skills that align seamlessly with his role. His blend of extensive experience, diverse background in operations management, and genuine passion for pastoral ministry sets him apart as a manager well-equipped to lead effectively and contribute to the success of the ministry.",
    ],
  },
  {
    id: 14,
    name: "FRANCIS KENJI",
    position:
      "Workplace Ministry Evangelist, Teacher, Christ School of Ministries International",
    image: "/images/Franciskenji.jpg",
    shortBio:
      "Gospel teacher and evangelist passionate about workplace ministry and spiritual guidance.",
    fullBio: [
      "Kenji's role as a teacher of the gospel involves various activities, such as leading Bible studies, delivering sermons or talks, organizing spiritual retreats, and providing guidance and support to individuals seeking to deepen their understanding of their faith.",
      "His passion inspires and motivates others to explore their spirituality, develop a stronger relationship with their beliefs, and live according to the principles of the gospel. In addition, Mr. Kenji also helps in running the clean water initiative and currently is doubling up as the marketeer.",
      "Through his dedication to teaching and sharing the message of the gospel, Mr. Kenji plays a vital role in nurturing the spiritual growth and development of individuals within his community and helping them find meaning, purpose, and fulfillment in their faith journey.",
    ],
  },
  {
    id: 15,
    name: "MARTHA MURIRURI",
    position: "Social Worker",
    image: "/images/Marthamuiruri.jpg",
    shortBio:
      "Passionate social worker dedicated to empowering vulnerable communities and children with special needs.",
    fullBio: [
      "Martha Muriruri is a passionate social worker with a deep commitment to empowering the vulnerable in her community. She has a wealth of experience working with children and families, both in the classroom and in the community. She began her career as a teacher, but she soon realized she wanted to do more to help children with special needs. She received a scholarship from ROCK Bridge Ministries to pursue a Bachelor of Special Education at the Kenya University.",
      "She later pursued sign language at the University of Nairobi. After graduating, she worked as a sign language interpreter for Voluntary Service Overseas at a local community-based organization, as a social worker and program coordinator, giving back to the organization that supported her education.",
      "Currently, Martha plays a pivotal role in identifying and supporting needy cases, assessing needs, conducting home visits, following up on college/university placement, and providing mentoring and counseling. She is passionate about making a difference in the lives of those she serves and is committed to helping individuals and families overcome challenges and achieve their full potential.",
    ],
  },
  {
    id: 16,
    name: "BENSON NJUGUNA",
    position: "Media & Communication Specialist",
    image: "/images/Bensonnjuguna.png",
    shortBio:
      "Media specialist dedicated to empowering communities through digital content and technology solutions.",
    fullBio: [
      "Benson Njuguna, a member of R.O.C.K Bridge Ministries since 2021, serves as a part-time media and communications specialist. His journey to RBM began through a referral from Daniel 360, a community-based organization dedicated to empowering women, youths, and children to lead dignified and sustainable lives.",
      "While Benson initially pursued a course in procurement at the Kenya Institute of Management Studies, his deep-rooted passion for technology sparked his interest in website development, content creation, and social media marketing. Benson's dedication and diverse skill set helps R.O.C.K Bridge Ministries drive its mission to reach and impact a wider audience.",
      "Within R.O.C.K Bridge Ministries, Benson wears multiple hats. He is responsible for crafting engaging content for our website, managing social media platforms, and curating reports that capture the essence of our initiatives. His role involves producing reports, crafting proposals, and developing our newsletter.",
      "Benson's dedication and diverse skill set helps R.O.C.K Bridge Ministries drive its mission to reach and impact a wider audience. His technical expertise, combined with his passion for community development, makes him an invaluable member of our team, contributing significantly to our outreach efforts and organizational growth.",
    ],
  },
];

// Separate Kenyan and American board members
const kenyanBoardMembers = teamMembers.filter((member) => member.id <= 5);
const americanBoardMembers = teamMembers.filter((member) => member.id > 5);

const handleCardClick = (member: TeamMember) => {
  selectedMember.value = member;
};

const closeModal = () => {
  selectedMember.value = null;
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
