export default function getNthItem(a, n) {
  let nth = 0;
  for (let i = 0; i < n; i++) {
    nth = a - 2 * nth;
  }
  return (nth);
};
