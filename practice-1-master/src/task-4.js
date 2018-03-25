export default function formatTime(seconds) {
  let date = new Date(2018, 0, 1);
  date.setSeconds(date.getSeconds() + seconds);
  date = (((date.getHours() < 10) && (date.getHours() > 0)) || ((date.getHours() > 12) && (date.getHours() < 20))) ? "0" + date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  }) : date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  return date;
}
