export default (maximum, zeroIndexed) => {
  const random = Math.ceil(Math.random() * maximum);

  return zeroIndexed ? random - 1 : random;
}
