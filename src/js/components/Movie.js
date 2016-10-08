export default {
  template: `
    <div v-if="result" id="movie"></div>
  `,
  data: () => {
    return {
      result: false
    };
  }
}
