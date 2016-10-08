import store from '../../store.js';

export default {
  template: `
    <div class="component">
      <h3>Years<span v-on:click="active = !active" v-bind:class="{'active': active}">{{ setText() }}</span></h3>

      <transition name="slide">
        <ol v-show="active">
          <li v-for="year in years" v-on:click="toggleActive(year.id)">
            <div class="check">
              <transition name="appear">
                <span class="mark" v-show="isActive(year.id)"></span>
              </transition>
            </div>

            <p>{{ year.name }}</p>
          </li>
        </ol>
      </transition>
    </div>
  `,
  data: () => {
    return {
      active: false,
      years: store.state.years,
    };
  },
  methods: {
    isActive: id => {
      return store.state.active.years.indexOf(id) !== -1;
    },
    setText: function()  {
      if (this.active) {
        return 'Hide options';
      } else {
        return 'Show options';
      }
    },
    toggleActive: id => {
      store.commit('toggleActive', {
        type: 'years',
        id: id
      });
    },
  }
}
