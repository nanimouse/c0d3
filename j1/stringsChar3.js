//3. lastX() will do the opposite of logFirstX()
const lastX = (str, num, i = str.length - 1, result = "") => {
  if (result.length >= num || i < 0) return result;
  //result += str[i];

  return lastX(str, num, i - 1);
}; //not me
