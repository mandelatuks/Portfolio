const humberg = document.querySelector('.navigation');
const navList = document.querySelector('.nav-list');
const times = document.querySelector('.times');
const navLink = document.querySelectorAll('.nav-link');
const modalDesktop = document.querySelector('.modal-container');
const modalMobile = document.querySelector('.modal-mobile');

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
    if (window.innerWidth > 768) {
      closeNavItems();
    }
  });
});

// projectbutton.addEventListener

const projects = [
  {
    name: 'To Do List',
    mainImage: 'Images/todolistsmall.png',
    mobileImage: '',
    technologies: ['css', 'JavaScript', 'html'],
    mobileTechnologies: ['Ruby on rails', 'css', 'Javasript'],
    popupTechnologies: ['Github', 'JavaScript', 'Terminal'],
    description: 'This is the do list which can help an individual in their daily life so with this an individual can delete and add a task',
    liveVersion: 'https://mandelatuks.github.io/To-do-list-webApps/',
    sourceLink: 'https://github.com/mandelatuks/To-do-list-webApps',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    mainImage: 'Images/ImgPlaholder.png',
    mobileImage: '',
    technologies: ['Ruby on rails', 'css', 'Javasript', 'html'],
    mobileTechnologies: ['Ruby on rails', 'css', 'Javasript'],
    popupTechnologies: ['CodeKit', 'Github', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveVersion: 'https://github.com/mandelatuks/Portfolio',
    sourceLink: 'https://github.com/mandelatuks/Portfolio',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    mainImage: 'Images/ImgPlaholder.png',
    mobileImage: '',
    mobileTechnologies: ['Ruby on rails', 'css', 'Javasript'],
    technologies: ['Ruby on rails', 'css', 'Javasript', 'html'],
    popupTechnologies: ['CodeKit', 'Github', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveVersion: '#',
    sourceLink: 'https://github.com/mandelatuks/Portfolio',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    mainImage: 'Images/ImgPlaholder.png',
    mobileImage: '',
    mobileTechnologies: ['Ruby on rails', 'css', 'Javasript'],
    technologies: ['Ruby on rails', 'css', 'Javasript', 'html'],
    popupTechnologies: ['CodeKit', 'Github', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveVersion: 'https://github.com/mandelatuks/Portfolio',
    sourceLink: 'https://github.com/mandelatuks/Portfolio',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    mainImage: 'Images/ImgPlaholder.png',
    mobileImage: '',
    technologies: ['Ruby on rails', 'css', 'Javasript', 'html'],
    mobileTechnologies: ['Ruby on rails', 'css', 'Javasript'],
    popupTechnologies: ['CodeKit', 'Github', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveVersion: 'https://github.com/mandelatuks/Portfolio',
    sourceLink: 'https://github.com/mandelatuks/Portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    desktopName: 'Keeping track of hundreds of components ',
    mainImage: 'Images/ImgPlaholder.png',
    mobileImage: '',
    technologies: ['Ruby on rails', 'css', 'Javasript', 'html'],
    mobileTechnologies: ['Ruby on rails', 'css', 'Javasript'],
    popupTechnologies: ['CodeKit', 'Github', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveVersion: 'https://github.com/mandelatuks/Portfolio',
    sourceLink: 'https://github.com/mandelatuks/Portfolio',
  },
];
const enableClosePopup = () => {
  const closeIcon = document.querySelector('.close-icon1');
  closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (!modalDesktop.classList.contains('hidden')) {
      modalDesktop.classList.add('hidden');
    }
    if (!modalMobile.classList.contains('hidden')) {
      modalMobile.classList.add('hidden');
    }
  });
};
const enablePopUps = () => {
  const seeProjectBtns = document.querySelectorAll('.btn-card');
  seeProjectBtns.forEach((seeProjectBtn) => {
    seeProjectBtn.addEventListener('click', () => {
      const id = seeProjectBtn.getAttribute('id');
      const projectData = projects[id];
      if (window.innerWidth >= 768) {
        // show desktop popup
        let technologies = '';
        projectData.popupTechnologies.map((lang) => {
          technologies += `<li class="lang-rr">${lang}</li>`;
          return null;
        });
        const popUpData = `
          <div class="modal">
            <a class="close-icon1"><img src="Images/Disabled.svg" alt="disabled button" /></a>
            <img class="modal-image" src="Images/todolistsmall.png" alt="project image" />
              <div class="title-button">
                <h2 class="modal-title2">${projectData.name}</h2>
                <div class="linkBtnContainer">
                  <a class="see-demo3" href="${projectData.liveVersion}">See live <img src="Images/see-live.png" alt=" icon for live" /></a>
                  <a class="see-demo4" href="${projectData.sourceLink}">See Source <img src="Images/see-source.png" alt="icon for github" /></a>
                </div>
              </div>
                <ul class="technology-list">${technologies}</ul>
              <p class="description2">${projectData.description}</p>
        </div>
      `;

        if (modalDesktop.classList.contains('hidden')) {
          modalDesktop.classList.remove('hidden');
          modalDesktop.innerHTML = popUpData;
        }
        enableClosePopup();
      } else {
        // show mobile popup
        let mobileTechnologies = '';
        projectData.mobileTechnologies.map((lang) => {
          mobileTechnologies += `<li class="lang-rr">${lang}</li>`;
          return null;
        });
        const popUpData = `
          <div class="moblie-model">
            
            <div class="closeimage">
              <a  class="close-icon1">
                <img src="Images/Icon-Cancel.svg" alt="disabled button">
              </a>
            </div>
            <img class = "mainimage" src="Images/Snapshootmobile.svg" alt="project image">
              
                    <h2 class="modal-title">
                    Keeping track of hundreds of <br>
                      components  
                    
                    </h2>
                    <div class="technologies">
                      <ul class="technology-list">
                      ${mobileTechnologies}             
                    </ul>
                    </div>
            
              <p class="description">
                ${projectData.description}
              </p>
              <div class="action-button">
              <a class="see-demo1">See live
                <img class="seelive" src="Images/see-live.png" alt=" icon for live">
            </a>
            <a class="see-demo2">See Source
                <img src="Images/see-source.png" alt="icon for github">
            </a>
            </div>
          </div>
        `;
        if (modalMobile.classList.contains('hidden')) {
          modalMobile.classList.remove('hidden');
          modalMobile.innerHTML = popUpData;
        }
        enableClosePopup();
      }
    });
  });
};

const workSection = document.querySelector('.articlewraper');
projects.forEach((item, index) => {
  let technologies = '';
  item.technologies.map((lang) => {
    technologies += `<li class="lang-rr">${lang}</li>`;
    return null;
  });
  const project = `
    <article class="card-one">
      <img src="${item.mainImage}" alt="image holder" class="imgholder">

      <div class="description1">
        <h3>
          ${item.name}
        </h3>
        <ul class="project-languages">
          ${technologies}
        </ul>
        <button type="button" class="btn-card" id="${index}"> See Project</button>
      </div>
    </article>
  `;
  workSection.innerHTML += project;
});

enablePopUps();

// validate contact form
const form = document.querySelector('.form-detail');

function isValidated(input) {
  if (input === input.toLowerCase()) return true;
  return false;
}

form.addEventListener('submit', (event) => {
  const email = document.getElementById('email');
  if (!isValidated(email.value)) {
    event.preventDefault();
    const error = document.querySelector('.error-message');
    error.style.display = 'block';
  }
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
      || e.code === 1014
      || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
  }
}
// // Getting values from storage
function setInputsData() {
  const inputsDataObj = JSON.parse(localStorage.getItem('inputsData'));
  document.getElementById('fullName').value = inputsDataObj.name;
  document.getElementById('email').value = inputsDataObj.email;
  document.getElementById('message').value = inputsDataObj.message;
}

// Setting values in storage
function populateStorage() {
  const inputsDataObj = {};

  inputsDataObj.name = document.getElementById('fullName').value;
  inputsDataObj.email = document.getElementById('email').value;
  inputsDataObj.message = document.getElementById('message').value;
  localStorage.setItem('inputsData', JSON.stringify(inputsDataObj));
  setInputsData();
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  // Testing whether your storage has been populated
  if (!localStorage.getItem('inputsData')) {
    populateStorage();
  } else {
    setInputsData();
  }
}

// Update storage whenever a form value is changed
const fullNames = document.getElementById('fullName');
const email = document.getElementById('email');
const message = document.getElementById('message');

fullNames.addEventListener('input', populateStorage);
email.addEventListener('input', populateStorage);
message.addEventListener('input', populateStorage);
