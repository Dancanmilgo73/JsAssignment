const getDistinctVals = (arr) => {
  //   Method 1 : using set
  // console.log([...new Set(arr)]);

  /* ---------method 2: ----------- */
  const res = [];
  arr.map((elem) => !res.includes(elem) && res.push(elem));
  console.log(res);
};

getDistinctVals([1, 3, 5, 3, 7, 3, 1, 1, 9, 9, 10, 10, 11, 11]);
