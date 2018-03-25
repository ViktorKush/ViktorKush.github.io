export default function sumDigits(n) {
    const arrCounter = n.toString().split("");
    let result = 0;
    for (let i = 0; i < arrCounter.length; i++) {
        result = result + parseInt(arrCounter[i], 10);
    }
    return result;
}
