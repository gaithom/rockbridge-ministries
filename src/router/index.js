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
import GrandLaunch from '../pages/Media and Resouces/Grand Launch.vue'
import CETCT from '../pages/Media and Resouces/CETCT.vue'
import MDDSPG from '../pages/Media and Resouces/MDDSPG.vue'
import Contact from '../pages/Contact.vue'
import Home from '../pages/Home.vue'
import JourneyToNursing from '../pages/Media and Resouces/journey to nursing.vue'
import TheDreamOfADoctor from '../pages/Media and Resouces/The dream of a doctor.vue'
import HydrologyDegree from '../pages/Media and Resouces/Hydrology Degree.vue'
import RBScholarship from '../pages/Media and Resouces/RB scholarship.vue'
import HolidayHomesPhotos from '../pages/Media and Resouces/Holiday homes photos.vue'
import CleanWaterInitiatives from '../pages/Media and Resouces/Clean water intitiative.vue'
import LishAiLabs from '../pages/Media and Resouces/Lish ai Labs.vue'
import MedicalClinicPhotos from '../pages/Media and Resouces/Medical clinic photos.vue'
import MedicalTripVideo from '../pages/Media and Resouces/videos/Medical trip video.vue'
import NursingCollegeVideo from '../pages/Media and Resouces/videos/Nursing college video.vue'
import OverviewVideo from '../pages/Media and Resouces/videos/Overview.vue'
import TumainiCenterVideo from '../pages/Media and Resouces/videos/Tumaini center video.vue'
import WorkplaceVideo from '../pages/Media and Resouces/videos/Work place video.vue'
import YouthVideo from '../pages/Media and Resouces/videos/Youth video.vue'

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
    path: '/media-and-resources/grand-launch',
    name: 'GrandLaunch',
    component: GrandLaunch
  },
  {
    path: '/media-and-resources/CETCT',
    name: 'CETCT',
    component: CETCT
  },
  {
    path: '/media-and-resources/MDDSPG',
    name: 'MDDSPG',
    component: MDDSPG
  },
  {
    path: '/media-and-resources/journey-to-nursing',
    name: 'journey-to-nursing',
    component: JourneyToNursing
  },
  {
    path: '/media-and-resources/the-dream-of-a-doctor',
    name: 'the-dream-of-a-doctor',
    component: TheDreamOfADoctor
  },
  {
    path: '/media-and-resources/hydrology-degree',
    name: 'hydrology-degree',
    component: HydrologyDegree
  },
  {
    path: '/media-and-resources/rb-scholarship',
    name: 'rb-scholarship',
    component: RBScholarship
  },
  {
    path: '/media-and-resources/holiday-homes-photos',
    name: 'holiday-homes-photos',
    component: HolidayHomesPhotos
  },
  {
    path: '/media-and-resources/clean-water-initiatives',
    name: 'clean-water-initiatives',
    component: CleanWaterInitiatives
  },
  {
    path: '/media-and-resources/lish-ai-labs',
    name: 'lish-ai-labs',
    component: LishAiLabs
  },
  {
    path: '/media-and-resources/medical-clinic-photos',
    name: 'medical-clinic-photos',
    component: MedicalClinicPhotos
  },
  {
    path: '/media-and-resources/medical-trip-video',
    name: 'medical-trip-video',
    component: MedicalTripVideo
  },
  {
    path: '/media-and-resources/nursing-college-video',
    name: 'nursing-college-video',
    component: NursingCollegeVideo
  },
  {
    path: '/media-and-resources/overview-video',
    name: 'overview-video',
    component: OverviewVideo
  },
  {
    path: '/media-and-resources/tumaini-center-video',
    name: 'tumaini-center-video',
    component: TumainiCenterVideo
  },
  {
    path: '/media-and-resources/workplace-video',
    name: 'workplace-video',
    component: WorkplaceVideo
  },
  {
    path: '/media-and-resources/youth-video',
    name: 'youth-video',
    component: YouthVideo
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

