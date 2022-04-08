import { templates } from '../settings.js';

class Home {
  constructor(element) {
    const thisPage = this;
    thisPage.render(element);
  }

  render(element) {
    const thisPage = this;

    thisPage.dom = {};
    thisPage.dom.wrapper = element;
    const generatedHTMLHome = templates.homePage();
    thisPage.dom.wrapper.innerHTML = generatedHTMLHome;
  }
}

export default Home;