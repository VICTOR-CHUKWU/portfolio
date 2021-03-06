/* eslint-disable prefer-const */
const ToggleBar = document.querySelector('.toggle-button');
const body = document.querySelector('body');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const cancelModal = document.querySelector('.cancels');
const anchorLink = document.querySelectorAll('.anchor-link');
const modalButton = document.querySelectorAll('.btn-modal');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const width = window.innerWidth;
const form = document.querySelector('.signup');
const email = document.querySelector('.email');
const names = document.querySelector('.name');
const text = document.querySelector('.text');
const erremail = document.querySelector('.error');
const formInputs = form.querySelectorAll('input, textarea');

const projects = [
  {
    key: 0,
    name: 'Crowd funding landing Page',
    description: '  A landing page for a crowd Funding site where users can fund a particular project of they choice at rates given to them easily.',
    featuredImage: 'img/newProject1.PNG',
    desktopImage: 'img/newProject1.PNG',
    technologies: ['css', 'Html', 'Bootstrap', 'Ruby'],
    linktoliveversion: 'https://victor-chukwu.github.io/crowdFundingLandingPage/',
    linktosource: 'https://github.com/VICTOR-CHUKWU/crowdFundingLandingPage',
  },
  {
    key: 1,
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/ImgPlaceholder(2).png',
    desktopImage: './img/ImgPlaceholderdesktop1.png',
    technologies: ['css', 'Html', 'Bootstrap', 'Ruby'],
    linktoliveversion: 'https://victor-chukwu.github.io/portfolio/',
    linktosource: 'https://github.com/VICTOR-CHUKWU/portfolio',
  },
  {
    key: 2,
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/ImgPlaceholder(2).png',
    desktopImage: './img/imgPlaceholderdesktop2.png',
    technologies: ['css', 'Html', 'Bootstrap', 'Ruby'],
    linktoliveversion: 'https://victor-chukwu.github.io/portfolio/',
    linktosource: 'https://github.com/VICTOR-CHUKWU/portfolio',
  },
  {
    key: 3,
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/ImgPlaceholder(2).png',
    desktopImage: './img/imgPlaceholderdesktop3.png',
    technologies: ['css', 'Html', 'Bootstrap', 'Ruby'],
    linktoliveversion: 'https://victor-chukwu.github.io/portfolio/',
    linktosource: 'https://github.com/VICTOR-CHUKWU/portfolio',
  },
  {
    key: 4,
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/ImgPlaceholder(2).png',
    desktopImage: './img/ImgPlaceholderdesktop1.png',
    technologies: ['css', 'Html', 'Bootstrap', 'Ruby'],
    linktoliveversion: 'https://victor-chukwu.github.io/portfolio/',
    linktosource: 'https://github.com/VICTOR-CHUKWU/portfolio',
  },
  {
    key: 5,
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/ImgPlaceholder(2).png',
    desktopImage: './img/imgPlaceholderdesktop2.png',
    technologies: ['css', 'Html', 'Bootstrap', 'Ruby'],
    linktoliveversion: 'https://victor-chukwu.github.io/portfolio/',
    linktosource: 'https://github.com/VICTOR-CHUKWU/portfolio',
  },
  {
    key: 6,
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: './img/ImgPlaceholder(2).png',
    desktopImage: './img/imgPlaceholderdesktop3.png',
    technologies: ['css', 'Html', 'Bootstrap', 'Ruby'],
    linktoliveversion: 'https://victor-chukwu.github.io/portfolio/',
    linktosource: 'https://github.com/VICTOR-CHUKWU/portfolio',
  },
];

function openSideBar() {
  sideBar.classList.add('show-side-bar');
  body.classList.add('noscroll');
}

function closeSideBar() {
  sideBar.classList.remove('show-side-bar');
  body.classList.remove('noscroll');
}

const openModals = ({
  description, name, linktoliveversion, linktosource, featuredImage, desktopImage, technologies,
}) => () => {
  let displayModal = '';
  modal.classList.add('show-modal');
  displayModal += `
       <div class="modal-head">
        <h3 class="modal-title">${name}</h3>
       </div>
        <ul class="anchor-div flex-align-center">
          <li><a href="#">${technologies[0]}</a></li>
          <li><a href="#">${technologies[1]}</a></li>
          <li><a href="#">${technologies[2]}</a></li>
          <li><a href="#">${technologies[3]}</a></li>
        </ul>
        <div class='grid-modal'>
        <div class='modal-img-container' >
          <img src='${width > 1024 ? desktopImage : featuredImage}' alt="modal picture" class="modal-img">
        </div>
        <div class='grid-item-two'>
        <div class="modal-text">
         ${description}
        </div>
        <div class="modal-buttons ">
          <a href='${linktoliveversion}' class="btn mr">
            See Live
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="white"/>
              </svg>
          </a>
          <a href='${linktosource}' class="btn mr">
            See Source
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="white"/>
              </svg>
          </a>
        </div>
        </div>
        </div>

    `;
  modalInner.innerHTML = displayModal;
};

function closeModal() {
  modal.classList.remove('show-modal');
}

ToggleBar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);
cancelModal.addEventListener('click', closeModal);

modalButton.forEach((button, index) => {
  button.addEventListener('click', openModals(projects[index]));
});

anchorLink.forEach((anchor) => {
  anchor.addEventListener('click', closeSideBar);
});

form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase()) {
    erremail.textContent = '';
  } else {
    e.preventDefault();
    erremail.innerHTML = '*email must be in lower case';
  }
});
const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const formData = getFromLocalStorage('formData');
if (formData !== null) {
  names.value = formData.name;
  email.value = formData.email;
  text.value = formData.message;
}

formInputs.forEach((fe) => {
  fe.addEventListener('input', () => {
    const objectForLocalStorage = {
      name: names.value,
      email: email.value,
      message: text.value,
    };
    saveToLocalStorage('formData', objectForLocalStorage);
  });
});