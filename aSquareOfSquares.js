export function isSquare(n) {
  if (n < 0) {
    return false;
  }

  //   iterasi manual
  //   for (let i = 0; i * i <= n; i++) {
  //     if (i * i === n) {
  //       return true;
  //     }
  //   }

  //   iterasi bawaan javascript
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
}


export function bestPracticIsSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}