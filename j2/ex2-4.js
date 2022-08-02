const fizzBuzz = (num, i = 1) => {
  if (i > num) return;
  let str = i;

  if (i % 3 === 0) {
    str = "fizz";
    // console.log(str);
  }
  if (i % 5 === 0) {
    str = "buzz";
    // console.log(str);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    str = "fizzBuzz";
    // console.log(str);
  }
  console.log(str);
  i++;
  return fizzBuzz(num, i);
};

//fizzBuzz(9); //fizz
//fizzBuzz(25); //buzz
//fizzBuzz(15); //fizzbuzz
//fizzBuzz(2); //2
