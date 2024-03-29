import utils from './utils.js';

const burgerMenuIcon = utils.qs('header img');
const burgerMenuIconClose = utils.qs('.mobile-menu img');
const burgerMenu = utils.qs('.mobile-menu');
const burgerMenuBackground = utils.qs('div', burgerMenu);
const header = utils.qs('header');
const scrollToTop = utils.qs('#scrollToTop');

if (window.innerWidth >= 768) {
  utils.qs('footer > a img').src = './img/logo_light.png';
}

const closeMenu = () => {
  const ul = utils.qs('ul', utils.qsa('.mobile-menu div')[1]);

  burgerMenu.addEventListener(
    'transitionend',
    () => {
      ul.remove();
      ul.classList.add('desktop-visible');
      utils.qs('header').appendChild(ul);
    },
    { once: true },
  );

  burgerMenu.classList.toggle('hidden');
  burgerMenuBackground.classList.toggle('hidden');
};

burgerMenuIcon.addEventListener('click', (e) => {
  e.preventDefault();

  const ul = utils.qs('header ul.desktop-visible');

  ul.remove();
  ul.classList.remove('desktop-visible');
  utils.qsa('.mobile-menu div')[1].appendChild(ul);

  burgerMenu.classList.toggle('hidden');
  burgerMenuBackground.classList.toggle('hidden');
});

burgerMenuIconClose.addEventListener('click', (e) => {
  e.preventDefault();

  closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !burgerMenu.classList.contains('hidden')) {
    const ul = utils.qs('ul', utils.qsa('.mobile-menu div')[1]);

    ul.remove();
    ul.classList.add('desktop-visible');
    utils.qs('header').appendChild(ul);

    burgerMenu.classList.toggle('hidden');
    burgerMenuBackground.classList.toggle('hidden');

    utils.qs('footer > a img').src = './img/logo_light.png';
  } else if (window.innerWidth >= 768) {
    utils.qs('footer > a img').src = './img/logo_light.png';
  } else {
    utils.qs('footer > a img').src = './img/logo.png';
  }
});

window.addEventListener('scroll', () => {
  if (header.getBoundingClientRect().bottom < 0) {
    scrollToTop.classList.remove('notThere');
  } else {
    scrollToTop.classList.add('notThere');
  }
});

scrollToTop.addEventListener('click', (e) => {
  e.preventDefault();
  header.scrollIntoView({ behavior: 'smooth' });
  scrollToTop.classList.add('notThere');
});
