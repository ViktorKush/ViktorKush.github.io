export default function getNthItem(a, n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = a - 2 * result;
    }
    return result;
}

