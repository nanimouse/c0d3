//2. logFirstX() will take a str and a number and print the first num letters of the string
const logFirstX = (str, num, i = 0) => {
  if (i >= num) return;

  console.log(str[i]);

  return logFirstX(str, num, i + 1);
};
