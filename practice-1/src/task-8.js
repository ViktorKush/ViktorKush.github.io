export default function getTopLetter(str) {
    const myArr = str.split("");
    const result = {};
    myArr.map(item => {
        if (!result[item]) {
            result[item] = 1;
        } else {
            result[item] = result[item] + 1;
        }
        return result[item];
    });
    let max = 0;
    let maxSymbolName = "";
    for (const name in result) {
        if (max < result[name]) {
            max = result[name];
            maxSymbolName = name;
        }
    }
    return maxSymbolName;
}
