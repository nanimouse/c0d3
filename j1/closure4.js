const callWith = (num) => {
  return (func) => {
    return func(num);
  };
};
