export function countBits(n) {
  if (n > 0) {
    // Pregram Me
    const numberString = n.toString(2);

    return (numberString.match(/1/g) || 0).length;
  }
  return 0;
}
