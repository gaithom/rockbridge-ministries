<template>
  <div>
    <nav
      :class="['fixed w-full z-50 transition-all duration-300 ease-in-out']"
      :style="{
        backgroundColor: isMediaAndResourcesPage ? 'rgb(17, 24, 39)' : (scrolledUp && !isBoardAndStaffPage ? '' : 'rgb(17, 24, 39)'),
        backdropFilter: isMediaAndResourcesPage ? 'none' : (scrolledUp && !isBoardAndStaffPage ? 'none' : 'blur(8px)')
      }"
      @mouseleave="isMediaAndResourcesPage ? null : restoreTransparency()"
    >
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo and Brand -->
        <LogoSection />

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-2">
          <template v-for="(item, index) in navItems" :key="index">
            <NavItem 
              :to="item.to"
              :icon="item.icon"
              :text="item.text"
              :has-dropdown="item.hasDropdown"
              :is-active="isActive(item)"
              @navigate="handleNavigation"
            >
              <template v-if="item.hasDropdown">
                <NavDropdown :items="item.dropdownItems" @navigate="handleNavigation" />
              </template>
            </NavItem>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <MobileMenuButton 
          :is-open="mobileMenuOpen" 
          @toggle="toggleMobileMenu" 
        />
      </div>

      <!-- Mobile Menu -->
      <MobileMenu 
        v-if="mobileMenuOpen"
        :is-open="mobileMenuOpen"
        :nav-items="navItems"
        :is-active="isActive"
        @close="closeMobileMenu"
        @navigate="handleNavigation"
      />
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useRoute } from 'vue-router';
import { navItems } from './navbar/NavbarParts';
import LogoSection from './LogoSection.vue';
import NavItem from './navbar/NavItemSimple.vue';
import NavDropdown from './navbar/NavDropdownSimple.vue';
import MobileMenu from './navbar/MobileMenuSimple.vue';
import MobileMenuButton from './MobileMenuButton.vue';

const route = useRoute();
const scrolledUp = ref(true);
const mobileMenuOpen = ref(false);
const isHovered = ref(false);
let ticking = false;

// Computed properties for route checks
const isBoardAndStaffPage = computed(() => {
  return route.path.includes('board-and-staff') || route.path.includes('how-to-support');
});

const isMediaAndResourcesPage = computed(() => {
  return route.path.includes('media-and-resources') && !route.path.includes('videos');
});

// Check if a nav item is active
const isActive = (item) => {
  if (item.to === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(item.to);
};

// Navigation methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'auto';
  
  if (mobileMenuOpen.value) {
    scrolledUp.value = false;
  } else {
    handleScroll();
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = 'auto';
};

const handleNavigation = () => {
  closeMobileMenu();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const restoreTransparency = () => {
  isHovered.value = false;
  scrolledUp.value = window.scrollY === 0;
};

const handleScroll = () => {
  if (isHovered.value || isMediaAndResourcesPage.value) return;
  
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrolledUp.value = isMediaAndResourcesPage.value ? false : window.scrollY < 10;
      ticking = false;
    });
    ticking = true;
  }
};

// Lifecycle hooks
onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = 'auto';
});
</script>
