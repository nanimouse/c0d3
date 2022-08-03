const love = (counter = 99) => {
  if (counter === 0) {
    return;
  }
  console.log("The things I do for love...");
  return love(counter - 1);
};
