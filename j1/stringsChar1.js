//1. logNonMatching() will take a string and a letter and print every letter thats not the letter
const logNonMatching = (str, letter, i = 0) => {
  if (i === str.length) return;

  if (str[i] != letter) {
    console.log(str[i]);
  }

  return logNonMatching(str, letter, i + 1);
};
