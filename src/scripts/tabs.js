import $ from 'jquery';

const tabs = {
  init() {
    window.jQuery = $;
    this.initializeTabs();
    this.bindEvents();
  },
  bindEvents() {
    $(document).on('click', '.tabs a', this.handleTabTriggerClick.bind(this));
    $('ul.tabs').on('keydown', 'a', this.handleKeyboardPress.bind(this));
    $(window).on('hashchange', this.handleHashChange.bind(this));
  },
  initializeTabs() {
    const $tabs = $('.tabs__container');
    const hash = window.location.hash;
    $tabs.each((idx, tab) => {
      this.generateIds($(tab));
      this.generateAriaLabels($(tab));
      const $list = $(tab).find('.tabs__container-links > ul');
      if (
        hash &&
        $(hash).length === 1 &&
        $(`a[href="${hash}"]`)
          .closest('ul')
          .is('[role="tablist"]')
      ) {
        const index = $(tab)
          .find(`a[href="${hash}"]`)
          .parent()
          .index();
        this.activateTab($(tab), index);
        this.scrollToTabs($(tab));
      } else if ($list.find('.active-tab').length === 1) {
        const index = $list.find('.active-tab').index();
        this.activateTab($(tab), index);
      } else {
        this.activateTab($(tab), 0);
      }
    });
  },

  activateTab($tabContainer, index) {
    // Activate the tab handler
    const $tabs = $tabContainer.find(' > .tabs__container-links > ul.tabs');
    const $content = $tabContainer.find(' > .tabs__container-content');
    $tabs.find('li').removeClass('active-tab');
    $tabs.find(`li:eq(${index})`).addClass('active-tab');
    // Update ARIA and tabindex
    $tabs.find('a').attr({
      'aria-selected': false,
      tabindex: -1
    });
    $tabs.find(`li:eq(${index}) a`).attr({
      'aria-selected': true,
      tabindex: 0
    });

    // Activate the content
    $content.find(' > .tab-content').prop('hidden', true);
    $content.find(` > .tab-content:eq(${index})`).prop('hidden', false);
    $('.tab-title').click(function() {
      if (index === 1) {
        $('#iframe2').attr('src', $('#iframe2').attr('src'));
        $('#iframe3').attr('src', $('#iframe3').attr('src'));
      } else if (index === 2) {
        $('#iframe1').attr('src', $('#iframe1').attr('src'));
        $('#iframe3').attr('src', $('#iframe3').attr('src'));
      } else {
        $('#iframe1').attr('src', $('#iframe1').attr('src'));
        $('#iframe2').attr('src', $('#iframe2').attr('src'));
      }
    });
  },
  generateIds($tabContainer) {
    const $tabs = $tabContainer.find(' > .tabs__container-links > ul.tabs');
    const $content = $tabContainer.find(' > .tabs__container-content');
    const id = $tabContainer.attr('id');
    $tabs.find('a').each((idx, link) => {
      const text = $(link).text();
      let alias = text.replace(/\W+(?!$)/g, '-').toLowerCase();
      alias = alias.replace(/\W$/, '').toLowerCase();
      const attribute = `${id}-${alias}`;
      $(link).attr('href', `#${attribute}`);
      $content.find(`.tab-content:eq(${idx})`).attr('id', attribute);
    });
  },
  generateAriaLabels($tabContainer) {
    const id = $tabContainer.attr('id');
    const $content = $tabContainer.find(' > .tabs__container-content');
    $content.find(' > .tab-content').each((idx, tab) => {
      if ($(tab).find(':header:first-child').length > 0) {
        const attribute = `${id}-title-${idx}`;
        $(tab)
          .find(':header:first-child')
          .attr('id', attribute);
        $(tab).attr('aria-labelledby', attribute);
      }
    });
  },
  handleTabTriggerClick(ev) {
    ev.preventDefault();
    const $clickedLink = $(ev.target);
    const $tabContainer = $clickedLink.closest('.tabs__container');
    const index = $clickedLink.closest('li').index();
    this.activateTab($tabContainer, index);

    // update the URL, doesn't trigger hashchanged event
    // further reference https://stackoverflow.com/a/4585031/497828
    history.pushState(null, null, $clickedLink.attr('href'));
  },
  handleHashChange() {
    const hash = window.location.hash;
    if (
      hash &&
      $(hash).length === 1 &&
      $(`a[href="${hash}"]`)
        .closest('ul')
        .is('[role="tablist"]')
    ) {
      const $tab = $(`a[href="${hash}"]`).closest('.tabs__container');
      const index = $tab
        .find(`a[href="${hash}"]`)
        .parent()
        .index();
      this.activateTab($tab, index);
      this.scrollToTabs($tab, 500);
    }
  },
  handleKeyboardPress(ev) {
    const $tab = $(ev.target);
    const $tabs = $tab.closest('ul.tabs');
    switch (ev.which) {
      // prev and home
      case 37:
      case 38:
        if ($tab.parent().prev().length !== 0) {
          $tab
            .parent()
            .prev()
            .find('a')
            .click()
            .focus();
        } else {
          $tabs
            .find('li:last > a')
            .click()
            .focus();
        }
        break;
      // next and end
      case 39:
      case 40:
        if ($tab.parent().next().length !== 0) {
          $tab
            .parent()
            .next()
            .find('a')
            .click()
            .focus();
        } else {
          $tabs
            .find('li:first a')
            .click()
            .focus();
        }
        break;
    }
  },
  scrollToTabs($tab, speed) {
    let easingSpeed = speed || 1000;
    $('html, body').animate(
      {
        scrollTop: $tab.offset().top
      },
      easingSpeed
    );
  }
};

export default tabs;
