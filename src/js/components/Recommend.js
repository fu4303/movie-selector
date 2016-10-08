import api from '../api.js';
import http from '../http.js';
import randomize from '../randomize.js';
import store from '../store.js';

export default {
  template: `
    <a class="button" v-on:click="recommend()" v-on:keyup.enter="recommend()" tabindex="1">Recommend</a>
  `,
  methods: {
    recommend: () => {
      http(api.recommend).subscribe({
        next: response => {
          http(api.page(randomize(response.total_pages))).subscribe({
            next: response => {
              store.commit('setResult', response.results[randomize(response.results.length - 1, true)]);
            }
          });
        }
      });
    },
  }
}
