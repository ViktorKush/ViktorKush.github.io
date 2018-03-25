export default function getStats(data) {
  let arrLength = data.length;
  if (data.length === 0) {
    return {
      min: null,
      max: null,
      avg: null
    };
  } else {
    return {
      min: Math.min(...data),
      max: Math.max(...data),
      avg: Number(data.map(function (elem, i, data) {return elem / arrLength}).reduce(function (a, b) {return a + b
      }).toFixed(2))
    };
  }

};
