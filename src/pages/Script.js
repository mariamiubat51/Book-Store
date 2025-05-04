// src/pages/Script.js

export function initFormToggle() {
  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');

  if (!loginBtn || !signupBtn) return;

  loginBtn.addEventListener('click', (e) => {
    let parent = e.target.closest('.login');
    parent.classList.add('slide-up');
    signupBtn.closest('.signup').classList.remove('slide-up');
  });

  signupBtn.addEventListener('click', (e) => {
    let parent = e.target.closest('.signup');
    parent.classList.add('slide-up');
    loginBtn.closest('.login').classList.remove('slide-up');
  });
}

// Make showTab globally available for use in HTML onclick
window.showTab = function(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => (tab.style.display = 'none'));

  document.getElementById(tabId).style.display = 'block';
};
