import homeSlider from './homeSlider';
const App = {
  init() {
    homeSlider.init();
  }
};

export default App;

document.addEventListener('DOMContentLoaded', App.init());
