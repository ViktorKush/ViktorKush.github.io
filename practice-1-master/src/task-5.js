export default function trim(text, maxLength) {
  if (maxLength <= 0) {
    throw new RangeError('Please type a positive number');
  }
  else if (text.length <= 0) {
    return("");
  }
  else if (text.length === maxLength) {
    return text;
  }
  else {
    return(text.substr(0, maxLength-1)+"\u2026");
  }
};
