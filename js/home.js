const html = document.querySelector('html');
const logo = document.querySelector('.logo');
const text = document.querySelector('h1');

html.addEventListener('click', () => {
  logo.style.webkitAnimation = 'none';
  CSSStyleDeclaration.webkitAnimation = 'none';
  setTimeout(function() {
    logo.style.webkitAnimation = '';
    CSSStyleDeclaration.webkitAnimation = '';
  }, 10);
});