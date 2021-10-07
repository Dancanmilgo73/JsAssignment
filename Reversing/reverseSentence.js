const reverseSentence = (str) => {
  const res = str.split(" ").reverse().join(" ");

  console.log(res);
};

reverseSentence(" bob likes dogs");
