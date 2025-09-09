// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import all page components
import Home from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import BoardAndStaff from '../pages/About/Board and staff.vue'
import History from '../pages/About/History.vue'
import OurMinistries from '../pages/Our ministries/Our ministries.vue'
import EducationScholarship from '../pages/Our ministries/Education Scholarship.vue'
import SocialEnterprises from '../pages/Our ministries/Social Enterprises.vue'
import WorkplaceEvangelism from '../pages/Our ministries/Workplace Evangelism.vue'
import GetInvolved from '../pages/Get involved/Get involved.vue'
import HowToSupport from '../pages/Get involved/How to support.vue'
import PartnerWithUs from '../pages/Get involved/Partner with us.vue'
import FundOurPrograms from '../pages/Get involved/Fund our programs.vue'
import MediaAndResources from '../pages/Media and Resources/Media and Resources.vue'
import Contact from '../pages/Contact.vue'

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
  routes
})

export default router