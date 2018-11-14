import homeSlider from './homeSlider';
import ScrollReveal from 'scrollreveal';
import tabs from './tabs';

const App = {
  init() {
    homeSlider.init();
    tabs.init();
  }
};

export default App;

document.addEventListener('DOMContentLoaded', App.init());
