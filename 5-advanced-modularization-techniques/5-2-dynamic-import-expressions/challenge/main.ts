import { Analytics } from './analytics';
import { UserManagement } from './userManagement';

const recordBtn = document.getElementById('record-btn');
if (!recordBtn) {
  console.error("Element with ID 'record-btn' not found.");
} else {
  recordBtn.addEventListener('click', () => {
    Analytics.recordEvent('Button Clicked');
  });
}

const loadProfileBtn = document.getElementById('load-profile-btn');
if (!loadProfileBtn) {
  console.error("Element with ID 'load-profile-btn' not found.");
} else {
  loadProfileBtn.addEventListener('click', () => {
    UserManagement.loadUserProfile('user123');
  });
}
