const numberedHello = (num, str = "") => {
  if (num < 1) return str;
  str += "hello";
  // console.log(str);
  num--;
  return numberedHello(num, str);
};
