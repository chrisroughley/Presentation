function copyArray(arr) {
  const arrCopy = arr.map((element) => element);

  return arrCopy;

  //return 5; //Doest return an array
  //arr.push(5); //Mutates original array
  //return arr; //Doesn't return a new array
}

module.exports = copyArray;
