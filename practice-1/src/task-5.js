export default function trim(text, maxLength) {
    let newText = text;
    if (maxLength <= 0) {
        throw new RangeError();
    } else {
        if (text.length > maxLength) {
            newText = newText.slice(0, maxLength - 1).concat("\u2026");
        }
        return newText;
    }
}

