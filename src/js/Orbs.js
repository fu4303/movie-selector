import randomize from './common/randomize.js';

export default class {
  constructor() {
    this.amount = 100;
    this.duration = 75;
    this.reach = 150;

    this.createStyle();
  }

  createStyle() {
    let css = '';

    for (let i = 1; i <= this.amount; i++) {
      const leftEnd = randomize(this.reach + 1, true);
      const leftStart = randomize(this.reach + 1, true);
      const negative = randomize(2) === 1 ? '-' : '';
      const topEnd = randomize(this.reach + 1, true);
      const topStart = randomize(this.reach + 1, true);

      css += `
        @keyframes float${i} {
          0% {
            left: ${negative + leftStart}%;
            top: ${negative + topStart}%;
          }
          100% {
            left: ${negative + leftEnd}%;
            top: ${negative + topEnd}%;
          }
        }
      `;
    }

    css = css.replace(/\s/g, '');
    css = css.replace(/keyframesfloat/g, 'keyframes float');

    this.appendStyle(css);
  }

  appendStyle(css) {
    const style = document.createElement('style');

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    document.head.appendChild(style);

    this.createOrbs();
  }

  createOrbs() {
    const orbs = document.createElement('div');
    const sizes = ['small', 'medium', 'large'];

    orbs.id = 'orbs';

    for (let i = 1; i <= this.amount; i++) {
      const baseDuration = Math.round(this.duration / 2);
      const duration = baseDuration + randomize(baseDuration);
      const orb = document.createElement('div');

      orb.className = 'orb ' + sizes[randomize(sizes.length, true)];
      orb.style.animation = `float${i} ${duration}s linear infinite alternate`;

      orbs.appendChild(orb);
    }

    document.body.appendChild(orbs);
  }
}
