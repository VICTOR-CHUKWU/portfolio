const ToggleBar = document.querySelector('.toggle-button');
const body = document.querySelector('body');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const cancelModal = document.querySelector('.cancels');
const anchorLink = document.querySelectorAll('.anchor-link');
const modalButton = document.querySelectorAll('.btn-modal');
const modal = document.querySelector('.modal');

function openSideBar() {
  sideBar.classList.add('show-side-bar');
  body.classList.add('noscroll');
}

function closeSideBar() {
  sideBar.classList.remove('show-side-bar');
  body.classList.remove('noscroll');
}

function openModal() {
  modal.classList.add('show-modal');
}

function closeModal() {
  modal.classList.remove('show-modal');
}

ToggleBar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);
cancelModal.addEventListener('click', closeModal);

modalButton.forEach((button) => {
  button.addEventListener('click', openModal);
});

anchorLink.forEach((anchor) => {
  anchor.addEventListener('click', closeSideBar);
});
