import homeSlider from './homeSlider';
import ScrollReveal from 'scrollreveal';
import tabs from './tabs';
// import lightbox from './lightbox';

const App = {
  init() {
    homeSlider.init();
    tabs.init();
    // lightbox.init();
  }
};

export default App;

document.addEventListener('DOMContentLoaded', App.init());
