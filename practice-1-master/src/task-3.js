export default function sumDigits(n) {
   return n.toString().split('').reduce(function (a, b) {return parseInt(a) + parseInt(b)});
//  let arr = n.toString().split(''),
//      i=0,
//      result = 0;
//  while(i<arr.length-1) {
//    result = arr[i] + arr[i+1];
//    i = i + 2;
//  }
//  return result;
}
