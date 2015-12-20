'use strict';

! function() {

  let input = new Input();

  class Orbs {

    constructor() {
      this.amount = 100;
      this.duration = 120;
      this.reach = 200;
    }

    createStyle() {
      let css = '';

      for(let i = 1; i <= this.amount; i++) {
        let randomLeftStart = input.randomize(this.reach + 1) - 1;
        let randomTopStart = input.randomize(this.reach + 1) - 1;
        let randomLeftEnd = input.randomize(this.reach + 1) - 1;
        let randomTopEnd = input.randomize(this.reach + 1) - 1;

        css += '@keyframes test' + i + '{';
          css += '0% {';
            css += 'left: ' + randomLeftStart + '%;';
            css += 'top: ' + randomTopStart + '%;';
          css += '}';
          css += '100% {';
            css += 'left: ' + randomLeftEnd + '%;';
            css += 'top: ' + randomTopEnd + '%;';
          css += '}';
        css += '}';
      }

      this.appendStyle(css);
    }

    appendStyle(css) {
      let style = document.createElement('style');

      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));

      document.head.appendChild(style);

      this.createOrbs();
    }

    createOrbs() {
      let sizes = [
        'small',
        'medium',
        'large'
      ];
      
      let orbs = document.createElement('div');

      orbs.id = 'orbs';

      for(let i = 1; i <= this.amount; i++) {
        let orb = document.createElement('div');

        let randomSize = input.randomize(sizes.length) - 1;

        orb.className = 'orb ' + sizes[randomSize];
        orb.style.animation = 'test' + i + ' ' + this.duration + 's ease-out forwards';

        orbs.appendChild(orb);
      }

      document.body.insertBefore(orbs, null);
    }

  }

  let orbs = new Orbs;

  orbs.createStyle();

}();
