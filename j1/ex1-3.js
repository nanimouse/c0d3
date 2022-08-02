const lessThan = (num1) => {
  return (num2) => {
    console.log(num2 < num1);
  };
};

const innerFunc = lessThan(65);
