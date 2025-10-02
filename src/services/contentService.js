// Very simple content service using localStorage for persistence
// Provides import/export JSON helpers so you can commit content files to git manually.

// Keys
const LS_ANNOUNCEMENTS = 'rbm_announcements_v1';
const LS_VIDEOS = 'rbm_videos_v1';
const LS_STORIES = 'rbm_stories_v1';
const LS_BLOGS = 'rbm_blogs_v1';

// Generic helpers
function load(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (_) {
    return [];
  }
}

function save(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}

function nextId(list) {
  return list.length ? Math.max(...list.map(a => a.id || 0)) + 1 : 1;
}

// Announcements
export function getAnnouncements() {
  return load(LS_ANNOUNCEMENTS);
}

export function getPublishedAnnouncements() {
  return load(LS_ANNOUNCEMENTS).filter(a => a.published !== false);
}

export function createAnnouncement(data) {
  const list = load(LS_ANNOUNCEMENTS);
  const item = {
    id: nextId(list),
    title: data.title?.trim() || 'Untitled',
    body: data.body?.trim() || '',
    date: data.date || new Date().toISOString(),
    published: data.published ?? true,
  };
  list.unshift(item);
  save(LS_ANNOUNCEMENTS, list);
  return item;
}

export function updateAnnouncement(id, patch) {
  const list = load(LS_ANNOUNCEMENTS);
  const idx = list.findIndex(a => a.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...patch };
  save(LS_ANNOUNCEMENTS, list);
  return list[idx];
}

export function deleteAnnouncement(id) {
  const list = load(LS_ANNOUNCEMENTS);
  const next = list.filter(a => a.id !== id);
  save(LS_ANNOUNCEMENTS, next);
  return true;
}

// Videos
export function getVideos() {
  return load(LS_VIDEOS);
}

export function getPublishedVideos() {
  return load(LS_VIDEOS).filter(v => v.published !== false);
}

export function createVideo(data) {
  const list = load(LS_VIDEOS);
  const item = {
    id: nextId(list),
    title: data.title?.trim() || 'Untitled',
    url: data.url?.trim() || '',
    description: data.description?.trim() || '',
    date: data.date || new Date().toISOString(),
    published: data.published ?? true,
  };
  list.unshift(item);
  save(LS_VIDEOS, list);
  return item;
}

export function updateVideo(id, patch) {
  const list = load(LS_VIDEOS);
  const idx = list.findIndex(a => a.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...patch };
  save(LS_VIDEOS, list);
  return list[idx];
}

export function deleteVideo(id) {
  const list = load(LS_VIDEOS);
  const next = list.filter(a => a.id !== id);
  save(LS_VIDEOS, next);
  return true;
}

// Stories
export function getStories() {
  return load(LS_STORIES);
}

export function getPublishedStories() {
  return load(LS_STORIES).filter(s => s.published !== false);
}

export function createStory(data) {
  const list = load(LS_STORIES);
  const item = {
    id: nextId(list),
    title: data.title?.trim() || 'Untitled',
    body: data.body?.trim() || '',
    author: data.author?.trim() || '',
    date: data.date || new Date().toISOString(),
    published: data.published ?? true,
  };
  list.unshift(item);
  save(LS_STORIES, list);
  return item;
}

export function updateStory(id, patch) {
  const list = load(LS_STORIES);
  const idx = list.findIndex(a => a.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...patch };
  save(LS_STORIES, list);
  return list[idx];
}

export function deleteStory(id) {
  const list = load(LS_STORIES);
  const next = list.filter(a => a.id !== id);
  save(LS_STORIES, next);
  return true;
}

// Blogs
export function getBlogs() {
  return load(LS_BLOGS);
}

export function getPublishedBlogs() {
  return load(LS_BLOGS).filter(b => b.published !== false);
}

export function createBlog(data) {
  const list = load(LS_BLOGS);
  const item = {
    id: nextId(list),
    title: data.title?.trim() || 'Untitled',
    body: data.body?.trim() || '',
    date: data.date || new Date().toISOString(),
    tags: Array.isArray(data.tags) ? data.tags : [],
    published: data.published ?? true,
  };
  list.unshift(item);
  save(LS_BLOGS, list);
  return item;
}

export function updateBlog(id, patch) {
  const list = load(LS_BLOGS);
  const idx = list.findIndex(a => a.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...patch };
  save(LS_BLOGS, list);
  return list[idx];
}

export function deleteBlog(id) {
  const list = load(LS_BLOGS);
  const next = list.filter(a => a.id !== id);
  save(LS_BLOGS, next);
  return true;
}

// Import/Export
export function exportJSON() {
  return JSON.stringify({
    announcements: load(LS_ANNOUNCEMENTS),
    videos: load(LS_VIDEOS),
    stories: load(LS_STORIES),
    blogs: load(LS_BLOGS),
  }, null, 2);
}

export async function importJSON(jsonText) {
  try {
    const obj = JSON.parse(jsonText);
    const announcements = Array.isArray(obj.announcements) ? obj.announcements : [];
    const videos = Array.isArray(obj.videos) ? obj.videos : [];
    const stories = Array.isArray(obj.stories) ? obj.stories : [];
    const blogs = Array.isArray(obj.blogs) ? obj.blogs : [];

    save(LS_ANNOUNCEMENTS, announcements);
    save(LS_VIDEOS, videos);
    save(LS_STORIES, stories);
    save(LS_BLOGS, blogs);

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}
