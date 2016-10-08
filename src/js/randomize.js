export default (maximum, zeroIndexed) => {
  if (!zeroIndexed) {
    return Math.ceil(Math.random() * maximum);
  }

  return Math.ceil(Math.random() * (maximum + 1)) - 1;
}
