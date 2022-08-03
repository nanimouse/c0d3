//2. oneAndTwo() will wait 20secs then return "one". after another 10secs "two" will return
const oneAndTwo = () => {
  setTimeout(() => {
    console.log("one");

    setTimeout(() => {
      console.log("two");
    }, 10000);
  }, 20000);
};
