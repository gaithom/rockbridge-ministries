// This file will contain shared data and utilities for the navbar components
export const navItems = [
  {
    to: '/',
    icon: 'home',
    text: 'Home',
    hasDropdown: false
  },
  {
    to: '/about',
    icon: 'info-circle',
    text: 'About',
    hasDropdown: true,
    dropdownItems: [
      { to: '/about/board-and-staff', icon: 'users', text: 'Board and Staff' },
      { to: '/about/history', icon: 'history', text: 'History' }
    ]
  },
  {
    to: '/our-ministries',
    icon: 'church',
    text: 'Our Ministries',
    hasDropdown: true,
    dropdownItems: [
      { to: '/our-ministries/education-scholarship', icon: 'graduation-cap', text: 'Education Scholarship' },
      { to: '/our-ministries/social-enterprises', icon: 'building', text: 'Social Enterprises' },
      { to: '/our-ministries/workplace-evangelism', icon: 'briefcase', text: 'Workplace Evangelism' }
    ]
  },
  {
    to: '/get-involved',
    icon: 'hands-helping',
    text: 'Get Involved',
    hasDropdown: true,
    dropdownItems: [
      { to: '/get-involved/how-to-support', icon: 'question-circle', text: 'How to Support' },
      { to: '/get-involved/partner-with-us', icon: 'handshake', text: 'Partner with Us' },
      { to: '/get-involved/fund-our-programs', icon: 'donate', text: 'Fund our Programs' }
    ]
  },
  {
    to: '/media-and-resources',
    icon: 'photo-video',
    text: 'Media and Resources',
    hasDropdown: false
  },
  {
    to: '/contact',
    icon: 'envelope',
    text: 'Contact',
    hasDropdown: false
  }
];

// Animation classes for transitions
export const animationClasses = {
  enterActiveClass: 'transition-opacity duration-300 ease-out',
  leaveActiveClass: 'transition-opacity duration-200 ease-in',
  enterFromClass: 'opacity-0',
  enterToClass: 'opacity-100',
  leaveFromClass: 'opacity-100',
  leaveToClass: 'opacity-0'
};
