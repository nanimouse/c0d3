//5. removeCharacter() will take a string and a letter and print a str with every letter thats not the letter
const removeCharacter = (str, letter, i = 0, res = "") => {
  if (i >= str.length) return res;
  if (str[i] !== letter) {
    res += str[i];
  }
  return removeCharacter(str, letter, i + 1, res);
};
