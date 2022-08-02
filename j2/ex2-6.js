const sumEvens = (num = 2, add = 0) => {
  //add all even numbers from 2 - num

  //base case:
  if (num <= 1) return add;

  if (num % 2 === 0) {
    add = add + num;
  }
  num--;

  //recursive case:
  return sumEvens(num, add);

  return sumEvens(num, add);
}

//sumEvens(13); //42
//sumEvens(3); //2
//sumEvens(6); //12
