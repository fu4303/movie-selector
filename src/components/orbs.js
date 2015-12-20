'use strict';

! function() {

  let input = new Input();

  class Orbs {

    createOrbs() {
      let sizes = [
        'small',
        'medium',
        'large'
      ];

      let css = '';

      let orbs = document.createElement('div');
      let style = document.createElement('style');

      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));

      document.head.appendChild(style);

      orbs.id = 'orbs';

      for(let i = 0; i < 40; i++) {
        let orb = document.createElement('div');

        let randomSize = input.randomize(sizes.length) - 1;
        let randomLeft = input.randomize(101) - 1;
        let randomTop = input.randomize(101) - 1;

        orb.className = 'orb ' + sizes[randomSize];
        orb.style.left = randomLeft + '%';
        orb.style.top = randomTop + '%';
        orb.style.animation = randomTop + '%';

        orbs.appendChild(orb);
      }

      document.body.insertBefore(orbs, null);
    }

  }

  let orbs = new Orbs;

  orbs.createOrbs();

}();
