
const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});

// script.js 하단에 추가 (선택)
sideMenu.addEventListener('transitionend', () => {
  if (sideMenu.classList.contains('active')) {
    const firstLink = sideMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  }
});
