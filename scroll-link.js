import $ from 'jquery';

export default class scrollLink {
  constructor(options) {
    this.options = $.extend({
      duration: 1000,
      easing: 'swing'
    }, options);

    this._bindEvents();
  }

  _bindEvents() {
    $('[data-scroll]').on('click', (e) => {
      e.preventDefault();
      this._scrollToContent($(e.currentTarget));
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
  }
}
