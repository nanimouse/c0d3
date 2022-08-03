//6. secretCodeGenerator() will take two strings and a letter and return a string that replaces the "letters" from the first string with the second string
const secretCodeGenerator = (str1, letter, str2, i = 0, res = "") => {
  if (i >= str1.length) return res;
  if (str1[i] === letter) {
    //str1[i] = str2;
    res += str2;
  } else {
    res += str1[i];
  }

  return secretCodeGenerator(str1, letter, str2, i + 1, res);
};
