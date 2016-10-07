export default {
  template: `
    <div class="component">
      <h3>Genres<span>{{ optionsText }}</span></h3>
    </div>
  `,
  data: function() {
    return {
      optionsText: 'Show options'
    };
  }
}
