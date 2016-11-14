export default {
  open: `
    <div class="filter">
      <h3>
        {{ title }} <span v-on:click="toggleOpen()" v-bind:class="{'open': open}">{{ setText() }}</span>
      </h3>

      <transition name="slide">
        <div v-show="open">
  `,
  close: `
        </div>
      </transition>
    </div>
  `,
}
