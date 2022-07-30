import utils from './utils.js';
import { grabRandomUser, populateUsers } from './randomUser.js';

const burgerMenuIcon = utils.qs('header img');
const burgerMenuIconClose = utils.qs('.mobile-menu img');
const burgerMenu = utils.qs('.mobile-menu');
const burgerMenuBackground = utils.qs('div', burgerMenu);
const menuList = utils.qs('ul.desktop-visible');

const closeMenu = () => {
  const ul = utils.qs('ul', utils.qsa('.mobile-menu div')[1]);

  burgerMenu.addEventListener(
    'transitionend',
    (e) => {
      ul.remove();
      ul.classList.add('desktop-visible');
      utils.qs('header').appendChild(ul);
    },
    { once: true }
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
  }
});

const grabSpeakers = async () => {
  populateUsers(await grabRandomUser());

  const button = utils.qs('#teachers button');

  button.textContent = 'more';
  button.appendChild(
    utils.createElement({
      tagName: 'img',
      src: './img/burger/arrow_down.png',
      alt: 'More speakers',
    })
  );
};

grabSpeakers();
