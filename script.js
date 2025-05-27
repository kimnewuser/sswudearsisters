window.addEventListener('scroll', function () {
    const poster = document.getElementById('poster');
    const posterTop = poster.offsetTop;
    const posterBottom = posterTop + poster.offsetHeight;
    const scrollY = window.scrollY;

  });

const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});
