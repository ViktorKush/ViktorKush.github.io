export default function convertToRoman(n) {
    const fontAr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const fontRom = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let result = "";
    if (n < 0 || n > 3999) {
        result = "err";
    } else {
        let i = fontAr.length - 1;
        while (n > 0) {
            if (n >= fontAr[i]) {
                result += fontRom[i];
                n -= fontAr[i];
            } else {
                i--;
            }
        }
    }
    return result;
}






