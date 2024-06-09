// No imports necessary up here now

type ModuleCache = {
  Analytics?: { Analytics: { recordEvent: (event: string) => void } };
  UserManagement?: { UserManagement: { loadUserProfile: (userId: string) => void } };
};

const moduleCache: ModuleCache = {};

const recordBtn = document.getElementById('record-btn');
if (!recordBtn) {
  console.error("Element with ID 'record-btn' not found.");
} else {
  recordBtn.addEventListener('click', async () => {
    try {
      if (!moduleCache.Analytics) {
        moduleCache.Analytics = await import('./analytics');
      }
      moduleCache.Analytics.Analytics.recordEvent('Button Clicked');
    } catch (error) {
      console.error("Failed to load the analytics module.", error);
    }
  });
}

const loadProfileBtn = document.getElementById('load-profile-btn');
if (!loadProfileBtn) {
  console.error("Element with ID 'load-profile-btn' not found.");
} else {
  loadProfileBtn.addEventListener('click', async () => {
    try {
      if (!moduleCache.UserManagement) {
        moduleCache.UserManagement = await import('./userManagement');
      }
      moduleCache.UserManagement.UserManagement.loadUserProfile('user123');
    } catch (error) {
      console.error("Failed to load the user management module.", error);
    }
  });
}
