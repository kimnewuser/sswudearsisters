window.addEventListener('scroll', function () {
    const poster = document.getElementById('poster');
    const posterTop = poster.offsetTop;
    const posterBottom = posterTop + poster.offsetHeight;
    const scrollY = window.scrollY;
  
    // 포스터가 완전히 스크롤되어 올라가면 opacity 0
    if (scrollY >= posterBottom) {
      poster.style.opacity = 0;
    } else {
      const ratio = 1 - scrollY / posterBottom;
      poster.style.opacity = 0.5 * ratio;
    }
  });

const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});
