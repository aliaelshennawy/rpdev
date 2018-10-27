import homeSlider from './homeSlider';
import ScrollReveal from 'scrollreveal';
import tabs from './tabs';

const App = {
  init() {
    homeSlider.init();
    tabs.init();
    ScrollReveal().reveal('.random-image-1', { delay: 100 }, { duration: 50000000 });
    ScrollReveal().reveal('.random-image-1', { delay: 100 }, { duration: 50000000 });
    ScrollReveal().reveal('.random-image-2', { delay: 200 }, { duration: 50000000 });
    ScrollReveal().reveal('.random-image-3', { delay: 300 }, { duration: 50000000 });
    ScrollReveal().reveal('.random-image-4', { delay: 400 }, { duration: 50000000 });
  }
};

export default App;

document.addEventListener('DOMContentLoaded', App.init());
