const getMinVal = (arr) => {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log(getMinVal(["hello", 90, 8, "4", "number", 89, 1, "boy"]));
