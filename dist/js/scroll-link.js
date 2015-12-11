import $ from 'jquery';

export default class ScrollLink {
  constructor(options) {
    this.options = $.extend({
      selector: '[data-scroll]',
      duration: 1000,
      easing: 'swing',
      delay: 0
    }, options);

    this._bindEvents();
  }

  _bindEvents() {
    $(this.options.selector).on('click', (e) => {
      e.preventDefault();
      setTimeout(() => {
        this._scrollToContent($(e.currentTarget));
      }, this.options.delay);
    });
  }

  _scrollToContent(target) {
    const duration = this.options.duration;
    const easing = this.options.easing;
    let scrollTarget = $(target).data('scroll');

    if (scrollTarget === '#') {
      scrollTarget = $('body');
    }

    $('html, body').animate({
      scrollTop: $(scrollTarget).offset().top
    }, duration, easing);

    if (history.replaceState) {
      history.replaceState({}, scrollTarget, scrollTarget);
    } else {
      window.location.hash = scrollTarget;
    }
  }
}
