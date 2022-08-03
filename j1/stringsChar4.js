//4. logOddOnly() will take a string and will return the odd indices' letters
const logOddOnly = (str, i = 0) => {
  if (i >= str.length) return;
  if (i % 2 !== 0) console.log(str[i]);
  return logOddOnly(str, i + 1);
};
