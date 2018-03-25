export default function unique(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length;) {
            if (data[i] === data[j]) {
                data.splice(j, 1);
            } else {
                j++;
            }
        }
    }
    /*
    solution through Set
    return Array.from(new Set(data));
    */
    return data;
}
