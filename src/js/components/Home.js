import { templates, select, classNames } from '../settings.js';

class Home {
  constructor(element) {
    const thisPage = this;
    thisPage.render(element);
    thisPage.initLinks();
  }

  render(element) {
    const thisPage = this;

    thisPage.dom = {};
    thisPage.dom.wrapper = element;
    const generatedHTMLHome = templates.homePage();
    thisPage.dom.wrapper.innerHTML = generatedHTMLHome;
  }

  initLinks(){
    const thisPage = this;
    thisPage.pages = document.querySelector(select.containerOf.pages).children;
    thisPage.navLinks = document.querySelectorAll(select.nav.links);
    thisPage.blocksLinks = document.querySelectorAll(select.containerOf.blocksLinks);

    for (let link of thisPage.blocksLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisPage.activatePage(id);
        window.location.hash = '#/' + id;
        console.log('pagechange');
      });
    }
  }

  activatePage(pageId){
    const thisPage = this;

    for (let page of thisPage.pages){
      page.classList.toggle(classNames.pages.active, page.id === pageId);
    }
    for (let link of thisPage.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') === '#' + pageId
      );
    }
  }
}

export default Home;