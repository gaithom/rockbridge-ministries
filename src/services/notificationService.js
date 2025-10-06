// Notification service for managing admin notifications
// Stores notifications in localStorage for persistence

const NOTIFICATIONS_KEY = 'rbm_admin_notifications';

// Sample notification types
export const NOTIFICATION_TYPES = {
  USER_REGISTRATION: 'user_registration',
  FAILED_LOGIN: 'failed_login',
  SYSTEM: 'system'
};

// Get all notifications
export function getNotifications() {
  try {
    const stored = localStorage.getItem(NOTIFICATIONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading notifications:', error);
    return [];
  }
}

// Save notifications to localStorage
function saveNotifications(notifications) {
  try {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  } catch (error) {
    console.error('Error saving notifications:', error);
  }
}

// Create a new notification
export function createNotification(notification) {
  const notifications = getNotifications();
  const newNotification = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    type: notification.type,
    title: notification.title,
    message: notification.message,
    timestamp: new Date().toISOString(),
    read: false,
    metadata: notification.metadata || {}
  };
  
  notifications.unshift(newNotification); // Add to beginning
  saveNotifications(notifications);
  return newNotification;
}

// Mark a notification as read
export function markNotificationAsRead(notificationId) {
  const notifications = getNotifications();
  const notification = notifications.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
    saveNotifications(notifications);
  }
  return notification;
}

// Mark all notifications as read
export function markAllNotificationsAsRead() {
  const notifications = getNotifications();
  notifications.forEach(n => n.read = true);
  saveNotifications(notifications);
}

// Delete a notification
export function deleteNotification(notificationId) {
  const notifications = getNotifications();
  const filtered = notifications.filter(n => n.id !== notificationId);
  saveNotifications(filtered);
}

// Clear all notifications
export function clearAllNotifications() {
  saveNotifications([]);
}

// Create notification for new user registration
export function notifyUserRegistration(userInfo) {
  return createNotification({
    type: NOTIFICATION_TYPES.USER_REGISTRATION,
    title: 'New User Registration',
    message: `A new user registered: ${userInfo.email || userInfo.name || 'Unknown'}`,
    metadata: {
      userInfo: userInfo,
      ip: userInfo.ip,
      userAgent: userInfo.userAgent
    }
  });
}

// Create notification for failed login attempt
export function notifyFailedLogin(loginInfo) {
  return createNotification({
    type: NOTIFICATION_TYPES.FAILED_LOGIN,
    title: 'Failed Login Attempt',
    message: `Failed login attempt from ${loginInfo.ip || 'Unknown IP'}`,
    metadata: {
      ip: loginInfo.ip,
      userAgent: loginInfo.userAgent,
      timestamp: loginInfo.timestamp
    }
  });
}

// Create system notification
export function notifySystem(message, title = 'System Notification') {
  return createNotification({
    type: NOTIFICATION_TYPES.SYSTEM,
    title: title,
    message: message,
    metadata: {
      timestamp: new Date().toISOString()
    }
  });
}

// Get unread notification count
export function getUnreadCount() {
  const notifications = getNotifications();
  return notifications.filter(n => !n.read).length;
}

// Initialize with some sample notifications if none exist
export function initializeNotifications() {
  const notifications = getNotifications();
  
  if (notifications.length === 0) {
    const sampleNotifications = [
      {
        id: 'sample-1',
        type: NOTIFICATION_TYPES.USER_REGISTRATION,
        title: 'New User Registration',
        message: 'A new user registered: john.doe@example.com',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        read: false,
        metadata: {
          userInfo: { email: 'john.doe@example.com', name: 'John Doe' },
          ip: '192.168.1.100',
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      },
      {
        id: 'sample-2',
        type: NOTIFICATION_TYPES.FAILED_LOGIN,
        title: 'Failed Login Attempt',
        message: 'Failed login attempt from 192.168.1.150',
        timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        read: false,
        metadata: {
          ip: '192.168.1.150',
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
          timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString()
        }
      }
    ];
    
    saveNotifications(sampleNotifications);
  }
}


