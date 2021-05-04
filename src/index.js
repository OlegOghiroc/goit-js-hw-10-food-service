import './styles.css';
import menu from './menu.json';

import templates from '../src/template/hnd_bar.hbs';

const jsMenuConteiner = document.querySelector('.js-menu');
const toggleButton = document.querySelector('#theme-switch-toggle')
const marcup = templates(menu);
const menuBody = document.querySelector('body');
menuBody.classList.add('light-theme');
// вставка розмітки
jsMenuConteiner.insertAdjacentHTML('afterbegin', marcup);

// toggle
onSaveThemeLocalStorage()
toggleButton.addEventListener('change', onToggleChangeTheme);

function onToggleChangeTheme(evt) {
  evt.preventDefault();
  if (evt.target.checked===true) {
    menuBody.classList.toggle('dark-theme');
    menuBody.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
  else {
    menuBody.classList.toggle('light-theme');
    menuBody.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
  // evt.target.checked ? menuBody.classList.replace('light-theme','dark-theme') : menuBody.classList.replace('dark-theme','light-theme');
}

function onSaveThemeLocalStorage() {
  const themeFromStorege = localStorage.getItem('theme');
  console.log(themeFromStorege)
  if (themeFromStorege === 'dark-theme') {
    menuBody.classList = themeFromStorege;
    toggleButton.checked = true;
  }
}