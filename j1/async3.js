//3. oneByOne() takes a string and logs each character, one second apart
const oneByOne = (str, i = 0) => {
  if (i === str.length) return;
  setTimeout(() => {
    console.log(str[i]);
    i++;
    oneByOne(str, i);
  }, 2000);
};
