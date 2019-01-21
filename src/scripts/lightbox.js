import fancybox from 'fancybox';

const lightbox = {
  init() {
    this.intializeLightbox();
  },
  intializeLightbox() {
    $(document).on('click', '[data-lightbox]', lity);
  }
};

export default lightbox;
