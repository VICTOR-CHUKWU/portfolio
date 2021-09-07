const ToggleBar = document.querySelector('.toggle-button');
const body = document.querySelector('body');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const anchorLink = document.querySelectorAll('.anchor-link');

function openSideBar() {
  sideBar.classList.add('show-side-bar');
  body.classList.add('noscroll');
}

function closeSideBar() {
  sideBar.classList.remove('show-side-bar');
  body.classList.remove('noscroll');
}

ToggleBar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);

anchorLink.forEach((anchor) => {
  anchor.addEventListener('click', closeSideBar);
});
