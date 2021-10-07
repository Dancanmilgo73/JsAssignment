const reverseOrder = (range) => {
  for (let i = range; i > 0; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};

reverseOrder(100);
