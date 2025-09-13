// App Router

import { createRouter, createWebHistory } from 'vue-router'

// Import all page components (match actual file structure under src/pages)
import About from '../pages/About/About.vue'
import BoardAndStaff from '../pages/About/Boardandstaff.vue'
import History from '../pages/About/History.vue'
import OurMinistries from '../pages/Our ministries/Our ministries.vue'
import EducationScholarship from '../pages/Our ministries/Education Scholarship.vue'
import SocialEnterprises from '../pages/Our ministries/Social Enterprises.vue'
import WorkplaceEvangelism from '../pages/Our ministries/Workplace Evangelism.vue'
import GetInvolved from '../pages/Get involved/GetInvolved.vue'
import HowToSupport from '../pages/Get involved/HowToSupport.vue'
import PartnerWithUs from '../pages/Get involved/PartnerWithUs.vue'
import FundOurPrograms from '../pages/Get involved/Fundourprograms.vue'
import MediaAndResources from '../pages/Media and Resouces/Media and resources.vue'
import Contact from '../pages/Contact.vue'
import Home from '../pages/Home.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about/board-and-staff',
    name: 'BoardAndStaff',
    component: BoardAndStaff
  },
  {
    path: '/about/history',
    name: 'History',
    component: History
  },
  {
    path: '/our-ministries',
    name: 'OurMinistries',
    component: OurMinistries
  },
  {
    path: '/our-ministries/education-scholarship',
    name: 'EducationScholarship',
    component: EducationScholarship
  },
  {
    path: '/our-ministries/social-enterprises',
    name: 'SocialEnterprises',
    component: SocialEnterprises
  },
  {
    path: '/our-ministries/workplace-evangelism',
    name: 'WorkplaceEvangelism',
    component: WorkplaceEvangelism
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: GetInvolved
  },
  {
    path: '/get-involved/how-to-support',
    name: 'HowToSupport',
    component: HowToSupport
  },
  {
    path: '/get-involved/partner-with-us',
    name: 'PartnerWithUs',
    component: PartnerWithUs
  },
  {
    path: '/get-involved/fund-our-programs',
    name: 'FundOurPrograms',
    component: FundOurPrograms
  },
  {
    path: '/media-and-resources',
    name: 'MediaAndResources',
    component: MediaAndResources
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Add scroll behavior to ensure pages start from the top
  scrollBehavior(to, from, savedPosition) {
    // If there's a hash, scroll to that element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // Offset for fixed header if needed
      }
    }
    // Always scroll to top when navigating to a new route
    return { top: 0, behavior: 'smooth' }
  }
})

export default router 

