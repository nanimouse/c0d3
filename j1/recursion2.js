const countTo98 = (counter = 0) => {
  if (counter === 99) {
    return;
  }
  console.log(counter);
  counter++;
  return countTo98(counter);
};
