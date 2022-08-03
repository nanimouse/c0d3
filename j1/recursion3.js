const countToMe = (num = 8, i = 8) => {
  if (i > num) return;
  console.log(i);
  i++;
  return countToMe(num, i);
};
