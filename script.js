const toggleButtonMode = document.getElementById('dark-mode-toggle');
const toggleButtonLang = document.getElementById('changeLang');

toggleButtonMode.addEventListener('click', toggleDarkMode);

toggleButtonLang.addEventListener('click', toggleChangeLang);

function toggleDarkMode() {
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header')
  const button = document.getElementById('dark-mode-toggle');
  const about = document.querySelector('.about');
  const aboutInfo = document.querySelector('.about__info');
  const work = document.querySelector('.work');
  const contact = document.querySelector('.contact');
  const contactRow = document.querySelector('.contact__row');
  const footer = document.querySelector('.footer');
  const theme = document.querySelector('.slider__theme');
  const portfolio = document.querySelector('.portfolio');
  const project = document.querySelector('.project');
  const portfolioInfo = document.querySelector('.portfolio__info');

  nav.classList.toggle('dark-mode');
  button.classList.toggle('dark-mode');

  if (nav.classList.contains('dark-mode')) {
    nav.style.backgroundColor = '#222';
    nav.style.color = '#fff';
    header.style.backgroundColor = 'rgb(55 50 50)';
    header.style.color = '#fff';
    about.style.backgroundColor = '#222';
    about.style.color = '#fff';
    aboutInfo.style.backgroundColor = 'rgb(34, 34, 34)';
    work.style.backgroundColor = 'rgb(55 50 50)';
    work.style.color = '#fff';
    contact.style.background = 'rgb(55 50 50)';
    contact.style.color = '#fff';
    contactRow.style.backgroundColor = '#9ab9d2';
    footer.style.background = 'linear-gradient(to bottom, rgb(55 50 50), black)';
    theme.setAttribute('src', "./img/sun-svgrepo-com.svg")
    portfolio.style.backgroundColor = '#222';
    portfolio.style.color = '#fff';
    project.style.backgroundColor = '#9ab9d2';
    project.style.color = '#000';
    portfolioInfo.style.backgroundColor = '#222';

  } else {
    nav.style.backgroundColor = '#fff';
    nav.style.color = '#000';
    header.style.backgroundColor = '#e4d9d9';
    header.style.color = '#000';
    about.style.backgroundColor = '#fff';
    about.style.color = '#000';
    aboutInfo.style.backgroundColor = '#e4d9d9';
    work.style.backgroundColor = '#e4d9d9';
    work.style.color = '#000';
    contact.style.background = 'linear-gradient(to bottom, #e4d9d9, #cab9b9)';
    contact.style.color = '#000';
    contactRow.style.backgroundColor = '#e4d9d9';
    footer.style.background = 'linear-gradient(to bottom, #cab9b9, black)';
    theme.setAttribute('src', "./img/moon-svgrepo-com.svg")
    portfolio.style.backgroundColor = '#fff';
    portfolio.style.color = '#000';
    project.style.backgroundColor = '#fff';
    project.style.color = '#000';
    portfolioInfo.style.backgroundColor = '#e4d9d9';
  }
}

function toggleChangeLang() {
  const btnChangeLang = document.querySelector('.changeLang');
  const navEng = document.querySelector('.nav__list');
  const navRus = document.querySelector('.nav__list-rus');
  const headerEng = document.querySelector('.header__info');
  const headerRus = document.querySelector('.header__info-rus');
  const aboutTitle = document.querySelector('.about__title');
  const aboutTitleRus = document.querySelector('.about__title-rus');
  const aboutSubtitle = document.querySelector('.about__subtitle');
  const aboutSubtitleRus = document.querySelector('.about__subtitle-rus');
  const aboutInfo = document.querySelector('.about__descr');
  const aboutInfoRus = document.querySelector('.about__descr-rus');
  const workEng = document.querySelector('.work-eng');
  const workRus = document.querySelector('.work-rus');
  const portfolioEng = document.querySelector('.portfolio__descr');
  const portfolioRus = document.querySelector('.portfolio__descr-rus');
  const projectEng = document.querySelector('.project__info');
  const projectRus = document.querySelector('.project__info-rus');

  const contactEng = document.querySelector('.contact-eng');
  const contactRus = document.querySelector('.contact-rus');


  if (navEng.classList.contains("none")) {
    btnChangeLang.innerHTML = 'RUS'
    navRus.classList.add("none");
    navEng.classList.remove("none");
    headerRus.classList.add('none');
    headerEng.classList.remove('none');
    aboutTitleRus.classList.add('none');
    aboutTitle.classList.remove('none');
    aboutSubtitleRus.classList.add('none');
    aboutSubtitle.classList.remove('none');
    aboutInfoRus.classList.add('none');
    aboutInfo.classList.remove('none');
    workRus.classList.add('none');
    workEng.classList.remove('none');
    portfolioRus.classList.add('none');
    portfolioEng.classList.remove('none');
    projectRus.classList.add('none');
    projectEng.classList.remove('none');
    contactRus.classList.add('none');
    contactEng.classList.remove('none');

  } else {
    btnChangeLang.innerHTML = 'ENG'
    navEng.classList.add("none");
    navRus.classList.remove("none");
    headerEng.classList.add('none');
    headerRus.classList.remove('none');
    aboutTitle.classList.add('none');
    aboutTitleRus.classList.remove('none');
    aboutSubtitle.classList.add('none');
    aboutSubtitleRus.classList.remove('none');
    aboutInfo.classList.add('none');
    aboutInfoRus.classList.remove('none');
    workEng.classList.add('none');
    workRus.classList.remove('none');
    portfolioEng.classList.add('none');
    portfolioRus.classList.remove('none');
    projectEng.classList.add('none');
    projectRus.classList.remove('none');
    contactEng.classList.add('none');
    contactRus.classList.remove('none');
  }
}
