import api from '../api.js';
import http from '../http.js';
import randomize from '../randomize.js';

export default {
  template: `
    <a class="button" v-on:click="recommend()" v-on:keyup.enter="recommend()" tabindex="1">Recommend</a>
  `,
  methods: {
    recommend: () => {
      http(api.recommend).subscribe({
        next: response => {}
      });
    },
  }
}
