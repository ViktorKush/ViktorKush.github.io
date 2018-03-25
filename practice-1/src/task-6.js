export default function getStats(data) {
    const result = {};
    let sum = 0;
    if (data.length > 0) {
        /*
        solution using methods of Math
        result.min = Math.min.apply(null, data);
        result.max = Math.max.apply(null, data);
        */
        for (let i = 0; i < data.length; i++) {
            sum = sum + data[i];
        }
        result.avg = sum / data.length;
        let counter = data[data.length - 1];
        for (let i = data.length - 2; i >= 0; i--) {
            if (counter > data[i]) {
                counter = data[i];
            }
        }
        result.min = counter;
        counter = data[0];
        for (let i = 1; i < data.length - 1; i++) {
            if (counter < data[i]) {
                counter = data[i];
            }
        }
        result.max = counter;
    } else {
        result.avg = null;
        result.max = null;
        result.min = null;
    }
    return result;
}
