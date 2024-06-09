// no imports necessary up here now

const recordBtn = document.getElementById('record-btn');
if (!recordBtn) {
  console.error("Element with ID 'record-btn' not found.");
} else {
  recordBtn.addEventListener('click', async () => {
    try {
      const { Analytics } = await import('./analytics');
      Analytics.recordEvent('Button Clicked');
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
      const { UserManagement } = await import('./userManagement');
      UserManagement.loadUserProfile('user123');
    } catch (error) {
      console.error("Failed to load the user management module.", error);
    }
  });
}
