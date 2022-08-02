const hello3x = () => {
  let counter = 0;
  return () => {
    if (counter >= 3) {
      return "";
    }
    counter++;
    console.log("hello");
  };
};

const test = hello3x();
// test();
