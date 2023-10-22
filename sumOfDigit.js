export function digitalRoot(n) {
  if (n < 10) return n;

  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return digitalRoot(sum);
}

export function digitalRootBest(n) {
  return ((n - 1) % 9) + 1;
}
