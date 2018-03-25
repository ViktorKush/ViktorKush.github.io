export default function formatTime(seconds) {
    const d = seconds / 86400 ^ 0;
    let h = (seconds - d * 86400) / 3600 ^ 0;
    const m = (seconds - d * 86400 - h * 3600) / 60 ^ 0;
    const s = seconds - d * 86400 - h * 3600 - m * 60;
    let partOfDay = true;
    if (h > 12) {
        partOfDay = false;
        h -= 12;
    } else if (h === 12) {
        partOfDay = false;
    } else if (h === 0) {
        h = 12;
    }
    return `${(h < 10 ? `0${h}` : h)}:${(m < 10 ? `0${m}` : m)}:${(s < 10 ? `0${s}` : s)} ${(partOfDay ? "AM" : "PM")}`;
}
