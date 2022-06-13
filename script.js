const toggleBtn = document.querySelector('.fa-bars');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_icons');
const sections = document.querySelector('section');
const bubble = document.querySelector('bubble');

// 메뉴 보여주기
function showMenu() {
  menu.classList.toggle('.active');
  icons.classList.toggle('.active');

}
toggleBtn.addEventListener('click', showMenu);

// 현재 위치
let observe = new IntersectionObserver();