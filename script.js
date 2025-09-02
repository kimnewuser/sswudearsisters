
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

// 공통 모달 요소 가져오기
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".image-modal .close");

// 모든 exhibition-image에 클릭 이벤트 달기
document.querySelectorAll(".exhibition-image").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex"; // flex로 가운데 정렬
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// 닫기 버튼 클릭
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 배경 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
