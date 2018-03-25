export default function getPolynomial(...coefficients) {
    // Change me!
    let polynominal;
    polynominal = coefficients.reduceRight((acc, val, index, arr) => {
        return acc = (!(val === 0) ? `${val}*x^${coefficients.length-index-1}+` + acc : acc).toString()
    }).replace(/\+-/g, "-").replace(/\^1\+/g, "+").replace(/^1\*/g, "").replace(/\+1\*/g, "+").replace(/\-1\*/g, "-").replace(/\+0/g, "");
    return polynominal;
}
getPolynomial(8, 3.5, -1, 0, 12, 1);
