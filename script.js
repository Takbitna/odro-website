// script.js
// 로딩 스크린 숨기기
document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
});

// 모바일 메뉴 토글
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});
