import $ from 'jquery';

export default class scrollLink {
  constructor(options) {
    super();
    this.$el = $(options.el);

    this.options = $.extend({
      duration: 1000
    }, options);

    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', (e) => {
      e.preventDefault();
      this.scrollToContent(this.$el);
    });
  }

  scrollToContent(target) {
    const duration = this.options.duration;
    let target = $(target).attr('href');
    if (target === '#') {
      target = $('body');
    }

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, duration);
  }
}
