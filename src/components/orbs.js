'use strict';

! function() {

  let input = new Input();

  class Orbs {

    constructor() {
      this.amount = 100;
      this.duration = 75;
      this.reach = 200;
    }

    createStyle() {
      let css = '';

      for(let i = 1; i <= this.amount; i++) {
        let randomLeftStart = input.randomize(this.reach + 1) - 1;
        let randomTopStart = input.randomize(this.reach + 1) - 1;
        let randomLeftEnd = input.randomize(this.reach + 1) - 1;
        let randomTopEnd = input.randomize(this.reach + 1) - 1;

        css += '@keyframes float' + i + '{';
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

        let baseDuration = Math.round(this.duration / 2);
        let duration = input.randomize(baseDuration);
        duration = baseDuration + duration;

        let randomSize = input.randomize(sizes.length) - 1;

        orb.className = 'orb ' + sizes[randomSize];
        orb.style.animation = 'float' + i + ' ' + duration + 's linear infinite alternate';

        orbs.appendChild(orb);
      }

      document.body.appendChild(orbs);
    }

  }

  let orbs = new Orbs;

  orbs.createStyle();

}();
