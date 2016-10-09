export default (maximum, zeroIndexed) => {
  const random = Math.ceil(Math.random() * maximum);

  if (!zeroIndexed) {
    return random;
  }

  return random - 1;
}
