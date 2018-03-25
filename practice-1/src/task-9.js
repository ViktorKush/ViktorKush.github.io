export default function merge(data) {
    const result = {};
    for (let i = 0; i < data.length; i++) {
        const currentObj = data[i];
        for (const key in currentObj) {
            if (!result.hasOwnProperty(key)) {
                result[key] = [currentObj[key]];
            } else {
                result[key].push(currentObj[key]);
            }
        }
    }
    return result;
}
