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
            <a class="close-icon1">
            <img src="Images/Disabled.svg" alt="disabled button">
            </a>
            <img class="modal-image" src="Images/SnapshootPortfolio.svg" alt="project image">
              <div class="title-button">
                    <h2 class="modal-title2">
                    Keeping track of hundreds of
                      components 
                    </h2>
                      <a class="see-demo3" href="${projectData.liveVersion}">See live
                        <img src="Images/see-live.png" alt=" icon for live">
                      </a>
                      <a class="see-demo4" href="${projectData.sourceLink}">See Source
                          <img src="Images/see-source.png" alt="icon for github">
                      </a>
              </div>
              <div class="technologies">
                <ul class="technology-list">
                  ${technologies}
                </ul>
              </div>
              <p class="description2">
                ${projectData.description}
              </p>
  
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
            <img src="Images/Disabled.svg" alt="disabled button">
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
