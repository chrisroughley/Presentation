const copyArray = require("../testing-presentation");

describe("copyArray", () => {
  test("Returns an array", () => {
    const output = copyArray([]);
    const isArray = Array.isArray(output);
    expect(isArray).toBe(true);
  });
  test("Returns new array", () => {
    const arr = [1, 2, 3, 4]; //Variable arr stores a reference to a place in memory where the array is stored.
    const actualOutput = copyArray(arr); //copyArray returns a reference to a place in memory where a new array is stored.
    expect(actualOutput).not.toBe(arr); //If copyArray returns a new array actualOutput will return a different reference to arr (actual !== arr)
  });
  test("Doesn't mutate input array", () => {
    const arr = [1, 2, 3, 4];
    copyArray(arr); //Calls the function with arr as an argument. If any code within the function mutates the array it will be ran when this function is called.
    expect(arr).toEqual([1, 2, 3, 4]); //Checks arr hasn't been mutated by passing a hard-coded copy of the original array to the assertion. (checks value of array not the refernce)
  });
  // test("Returns new array without mutating input array", () => {
  //   const arr = [1, 2, 3, 4];
  //   const actualOutput = copyArray(arr);
  //   expect(actualOutput).not.toBe(arr);
  //   expect(arr).toEqual([1, 2, 3, 4]);
  //   expect(Array.isArray(actualOutput)).toEqual(true);
  // });
});
