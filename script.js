const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.container .nav_menu');
const lists = document.querySelectorAll('.nav_menu li');
const icons = document.querySelector('.container .nav_icons');
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const home = document.querySelector('[data-page=home]');
const about = document.querySelector('[data-page=about]');
const lecture = document.querySelector('[data-page=lecture]');
const qna = document.querySelector('[data-page=qna]');
const contact = document.querySelector('[data-page=contact]');

home.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

about.addEventListener('click', () => {
  window.scrollTo(0, 713);
});

lecture.addEventListener('click', () => {
  window.scrollTo(0, 1418);
});

qna.addEventListener('click', () => {
  window.scrollTo(0, 2130);
});

contact.addEventListener('click', () => {
  window.scrollTo(0, 2840);
});
// scroll 좌표 얻기
window.addEventListener("scroll", () => {
  let scrollY = this.scrollY;
  let scrollX = this.scrollX;
  console.log(scrollY);
  console.log(scrollX);
});
window.addEventListener('scroll', () => {
  console.log('scrolling...');
});

// 메뉴 보여주기
function showMenu() {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
}
toggleBtn.addEventListener('click', showMenu);

// 현재 위치 페이지 관찰
const options = {
  threshold: 0.3
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const location = activeAnchor.getBoundingClientRect();
    const directions = {
      top: location.top,
      left: location.left,
      width: location.width,
      height: location.height
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
    };
  })
}
// 아직 잘 모르겠다..
sections.forEach(section => {
  observer.observe(section);
});
// 다음 페이지 보여줌
const firstPage = document.querySelector('.main_section');
const moreBtn = document.querySelector('.text_box button');
const nextPage = document.querySelector('.nextPage');

function moveNextPage() {
  firstPage.classList.add('hidden');
  nextPage.classList.remove('hidden');
}

moreBtn.addEventListener('click', moveNextPage);

// 뒤로가기 (홈으로)
const backBtn = document.querySelector('.nextPage fa-solid');

function moveBefore() {
  history.go(-1);
}

backBtn.addEventListener('click', moveBefore);
