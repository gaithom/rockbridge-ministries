// Media and Resources Service
// Handles CRUD operations for media content (videos, stories, photos)

const STORAGE_KEY = 'rbm_media_v1'

// Get all media content
export function getAllMedia() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : getDefaultMedia()
  } catch (error) {
    console.error('Error loading media:', error)
    return getDefaultMedia()
  }
}

// Get media by type
export function getMediaByType(type) {
  const allMedia = getAllMedia()
  return allMedia.filter(item => item.type === type)
}

// Get published media by type
export function getPublishedMediaByType(type) {
  const allMedia = getAllMedia()
  return allMedia.filter(item => item.type === type && item.published !== false)
}

// Generate automatic route for media items
function generateAutoRoute(name, type, id) {
  // Create a URL-friendly slug from the name
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim('-') // Remove leading/trailing hyphens
  
  return `/media-and-resources/${type}/${slug}-${id}`
}

// Create new media item
export function createMedia(mediaData) {
  try {
    const allMedia = getAllMedia()
    const id = Date.now() + Math.random()
    
    // Generate automatic route if none provided
    let route = mediaData.route
    if (!route || route.trim() === '') {
      route = generateAutoRoute(mediaData.name, mediaData.type, Math.floor(id))
    }
    
    const newMedia = {
      id: id,
      ...mediaData,
      route: route,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    allMedia.push(newMedia)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allMedia))
    return { ok: true, data: newMedia }
  } catch (error) {
    console.error('Error creating media:', error)
    return { ok: false, error: error.message }
  }
}

// Update media item
export function updateMedia(id, updates) {
  try {
    const allMedia = getAllMedia()
    const index = allMedia.findIndex(item => item.id === id)
    if (index === -1) {
      return { ok: false, error: 'Media item not found' }
    }
    
    allMedia[index] = {
      ...allMedia[index],
      ...updates,
      updatedAt: new Date().toISOString()
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allMedia))
    return { ok: true, data: allMedia[index] }
  } catch (error) {
    console.error('Error updating media:', error)
    return { ok: false, error: error.message }
  }
}

// Delete media item
export function deleteMedia(id) {
  try {
    const allMedia = getAllMedia()
    const filteredMedia = allMedia.filter(item => item.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredMedia))
    return { ok: true }
  } catch (error) {
    console.error('Error deleting media:', error)
    return { ok: false, error: error.message }
  }
}

// Toggle published status
export function toggleMediaPublished(id) {
  try {
    const allMedia = getAllMedia()
    const index = allMedia.findIndex(item => item.id === id)
    if (index === -1) {
      return { ok: false, error: 'Media item not found' }
    }
    
    allMedia[index].published = !allMedia[index].published
    allMedia[index].updatedAt = new Date().toISOString()
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allMedia))
    return { ok: true, data: allMedia[index] }
  } catch (error) {
    console.error('Error toggling media status:', error)
    return { ok: false, error: error.message }
  }
}

// Export media data
export function exportMediaData() {
  const allMedia = getAllMedia()
  return {
    media: allMedia,
    exportDate: new Date().toISOString(),
    version: '1.0'
  }
}

// Import media data
export function importMediaData(data) {
  try {
    if (!data.media || !Array.isArray(data.media)) {
      return { ok: false, error: 'Invalid media data format' }
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.media))
    return { ok: true }
  } catch (error) {
    console.error('Error importing media:', error)
    return { ok: false, error: error.message }
  }
}

// Default media content (existing content from the page)
function getDefaultMedia() {
  return [
    // Videos
    {
      id: 1,
      name: "NURSING COLLEGE VIDEO",
      image: "/images/nursing.jpg",
      route: "/media-and-resources/nursing-college-video",
      type: 'video',
      published: true,
      description: "Learn about our nursing college program and how we're training healthcare professionals.",
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: "WORKPLACE MINISTRY VIDEO",
      image: "/images/workplacemini.jpg",
      route: "/media-and-resources/workplace-video",
      type: 'video',
      published: true,
      description: "Discover how we bring ministry into workplace environments.",
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      name: "OVERVIEW",
      image: "/images/overview.jpg",
      route: "/media-and-resources/overview-video",
      type: 'video',
      published: true,
      description: "A comprehensive overview of our ministry work and impact.",
      createdAt: new Date().toISOString()
    },
    {
      id: 4,
      name: "YOUTH DEPARTMENT VIDEO",
      image: "/images/youth.jpg",
      route: "/media-and-resources/youth-video",
      type: 'video',
      published: true,
      description: "See how we're empowering youth through various programs.",
      createdAt: new Date().toISOString()
    },
    {
      id: 5,
      name: "MEDICAL TRIP VIDEO",
      image: "/images/medicaltrip.jpg",
      route: "/media-and-resources/medical-trip-video",
      type: 'video',
      published: true,
      description: "Join us on our medical mission trips to serve communities in need.",
      createdAt: new Date().toISOString()
    },
    {
      id: 6,
      name: "TUMAINI CENTER VIDEO",
      image: "/images/tumainicenter.jpg",
      route: "/media-and-resources/tumaini-center-video",
      type: 'video',
      published: true,
      description: "Explore the Tumaini Center and its impact on the community.",
      createdAt: new Date().toISOString()
    },
    {
      id: 7,
      name: "FAITH'S STORY VIDEO",
      image: "/images/faith.jpg",
      route: "/media-and-resources/faith-story-video",
      type: 'video',
      published: true,
      description: "An inspiring story of faith and transformation.",
      createdAt: new Date().toISOString()
    },
    {
      id: 8,
      name: "TUMAINI BETHANY VIDEO",
      image: "/images/tumainibethany.jpg",
      route: "/media-and-resources/tumaini-bethany-video",
      type: 'video',
      published: true,
      description: "Learn about the Tumaini Bethany program and its beneficiaries.",
      createdAt: new Date().toISOString()
    },
    
    // Stories
    {
      id: 9,
      name: "Grand Launch of Fin-Tech Hub for Youth and Community Development",
      image: "/images/DSC_0104-scaled.jpg",
      route: "/media-and-resources/grand-launch",
      type: 'story',
      published: true,
      description: "The exciting launch of our new Fin-Tech Hub designed to empower youth with digital skills.",
      createdAt: new Date().toISOString()
    },
    {
      id: 10,
      name: "Community Empowerment Through Collaborative Technology",
      image: "/images/rbm3.jpeg",
      route: "/media-and-resources/cetct",
      type: 'story',
      published: true,
      description: "How collaborative technology is transforming communities and creating opportunities.",
      createdAt: new Date().toISOString()
    },
    {
      id: 11,
      name: "ROCK Bridge Ministries Joins Daraja 360 Digital Skills Program Graduation",
      image: "/images/IMG_7544-scaled.jpg",
      route: "/media-and-resources/MDDSPG",
      type: 'story',
      published: true,
      description: "Celebrating the graduation of participants from the Daraja 360 Digital Skills Program.",
      createdAt: new Date().toISOString()
    },
    {
      id: 12,
      name: "13-Year Painful Journey to Nursing",
      image: "/images/WhatsApp-Image-2023-09-15-at-2.01.16-PM-2-1.jpeg",
      route: "/media-and-resources/journey-to-nursing",
      type: 'story',
      published: true,
      description: "An inspiring story of perseverance and determination in pursuing a nursing career.",
      createdAt: new Date().toISOString()
    },
    {
      id: 13,
      name: "The Dream of a Doctor",
      image: "/images/girl.png",
      route: "/media-and-resources/the-dream-of-a-doctor",
      type: 'story',
      published: true,
      description: "Following one young woman's journey to become a doctor and serve her community.",
      createdAt: new Date().toISOString()
    },
    {
      id: 14,
      name: "One Girl's Journey to a Hydrology Degree",
      image: "/images/IMG_20230703_153409-scaled.jpg",
      route: "/media-and-resources/hydrology-degree",
      type: 'story',
      published: true,
      description: "How education opened doors to a career in hydrology and environmental science.",
      createdAt: new Date().toISOString()
    },
    {
      id: 15,
      name: "ROCK Bridge Scholarship Beneficiaries Graduating from PCEA",
      image: "/images/Franciskenji.jpg",
      route: "/media-and-resources/MDDSPG",
      type: 'story',
      published: true,
      description: "Celebrating the academic achievements of our scholarship recipients.",
      createdAt: new Date().toISOString()
    },
    
    // Photos
    {
      id: 16,
      name: "HOLIDAY HOMES PHOTOS",
      image: "/images/homes.jpg",
      route: "/media-and-resources/holiday-homes-photos",
      type: 'photo',
      published: true,
      description: "A collection of photos from our holiday homes program, bringing joy to families.",
      createdAt: new Date().toISOString()
    },
    {
      id: 17,
      name: "CLEAN WATER INITIATIVE PHOTOS",
      image: "/images/water.jpeg",
      route: "/media-and-resources/clean-water-initiatives",
      type: 'photo',
      published: true,
      description: "Photos documenting our clean water projects and their impact on communities.",
      createdAt: new Date().toISOString()
    }
  ]
}
