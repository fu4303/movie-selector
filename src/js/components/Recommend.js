import api from '../api.js';
import http from '../common/http.js';
import randomize from '../common/randomize.js';
import store from '../store.js';

export default {
  template: `
    <a class="button" v-on:click="recommend()" v-on:keyup.enter="recommend()" tabindex="1">Recommend</a>
  `,
  methods: {
    recommend: () => {
      store.commit('removeResult');

      scrollTo(0, 0);

      http(api.recommend()).subscribe({
        next: response => {
          http(api.page(randomize(response.total_pages))).subscribe({
            next: response => {
              store.commit('setResult', response.results[randomize(response.results.length, true)]);
            }
          });
        }
      });
    },
  }
}
