const navTriggerBtn = document.querySelector("#nav-trigger");
const navMenu = document.querySelector("#nav-menu");

/* event listeners */

navTriggerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-is-open');
});