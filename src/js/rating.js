export default {
  create: rating => {
    let decimal = rating.toFixed(2);

    decimal = decimal.split('.');
    decimal = parseInt(decimal[1]);

    if (decimal >= 25 && decimal < 75) {
      return Math.floor(rating) + ',5';
    }

    return Math.round(rating);
  },
}
