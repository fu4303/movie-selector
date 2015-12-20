'use strict';

! function() {

  let input = new Input();

  class Orbs {

    constructor() {
      this.amount = 30;
      this.duration = 60;
    }

    createOrbs() {
      let sizes = [
        'small',
        'medium',
        'large'
      ];

      let css = '';

      for(let i = 1; i <= this.amount; i++) {
        let randomLeftStart = input.randomize(101) - 1;
        let randomTopStart = input.randomize(101) - 1;
        let randomLeftEnd = input.randomize(101) - 1;
        let randomTopEnd = input.randomize(101) - 1;

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

      let orbs = document.createElement('div');
      let style = document.createElement('style');

      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));

      document.head.appendChild(style);

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

  orbs.createOrbs();

}();
