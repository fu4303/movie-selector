import filter from '../mixins/filter.js'
import store from '../store.js'
import wrapper from '../templates/filter.js'

export default {
  template: `
    ${wrapper.open}
      <ol>
        <li v-for="option in options" v-on:click="toggleActive(option.id)">
          <div class="check">
            <transition name="appear">
              <span class="mark" v-show="isActive(option.id)"></span>
            </transition>
          </div>

          <p>{{ option.name }}</p>
        </li>
      </ol>
    ${wrapper.close}
  `,
  mixins: [filter],
  data: function() {
    return {
      options: store.state[this.type],
    };
  },
}
