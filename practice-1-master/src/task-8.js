export default function getTopLetter(str) {
  let map = new Map(),
    topLetter = "",
    quantity = 0;
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
    if (map.get(str[i]) > quantity) {
      quantity = map.get(str[i]);
      topLetter = str[i];
    }
  }
  return (topLetter);
}

