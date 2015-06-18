# Bigcommerce Scroll Link Module

Scroll to the top or any ID

### Installation

```
jspm install --save bc-scroll-link=bitbucket:pixelunion/bc-scroll-link
```

### Usage

```
import $ from 'jquery';
import ScrollLink from 'bc-scroll-link';

new ScrollLink({
  duration: 1000,
  easing: 'swing'
});
```

### Options

`duration`: the scroll duration in milliseconds.

`easing`: easing (only 'swing' and 'linear' available by default).

### Some sample markup

```
<button data-scroll="#">Top</button>

<button data-scroll="#some-section">Jump to: Some Section</button>
```