// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

// Import all page components
import About from '../src/pages/About/About.vue'
import BoardAndStaff from '../src/pages/About/Board and staff.vue'
import History from '../src/pages/About/History.vue'
import OurMinistries from '../src/pages/ministries/OurMinistries.vue'
import EducationScholarship from '../src/pages/ministries/Education Scholarship.vue'
import SocialEnterprises from '../src/pages/ministries/Social Enterprises.vue'
import WorkplaceEvangelism from '../src/pages/ministries/Workplace Evangelism.vue'
import GetInvolved from '../src/pages/Involved/GetInvolved.vue'
import HowToSupport from '../src/pages/Involved/HowToSupport.vue'
import PartnerWithUs from '../src/pages/Involved/PartinerWithUs.vue'
import FundOurPrograms from '../src/pages/Involved/FundOurPrograms.vue'
import MediaAndResources from '../src/pages/Media and Resouces/Media and resources.vue'
import Contact from '../src/pages/Contact.vue'

const routes = [

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

