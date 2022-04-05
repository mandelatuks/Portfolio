const humberg = document.querySelector('.navigation');
const navList = document.querySelector('.nav-list');
const times = document.querySelector('.times');
const navLink = document.querySelectorAll('.nav-link');
function closeNavItems() {
  navList.classList.replace('open', 'nav-list');
  navList.style.display = '';
}
humberg.addEventListener('click', () => {
  navList.classList.replace('nav-list', 'open');
  times.classList.add('fa-times');
  navList.style.display = 'block';
});

times.addEventListener('click', () => {
  closeNavItems();
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 600) {
      closeNavItems();
    }
  });
});
