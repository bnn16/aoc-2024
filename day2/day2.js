const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), "utf8");

const lines = input
  .replace(/\r/g, "")
  .split("\n")
  .filter((x) => x !== "")
  .map((x) => x.split(" ").map(Number));

console.log("lines", lines);

/**
 * @param {number[]} arr - array of numbers
 */
const isValid = (arr) => {
  const isAscendingOrder = arr[1] > arr[0];
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (
      diff < 1 ||
      diff > 3 ||
      (isAscendingOrder && arr[i] < arr[i - 1]) ||
      (!isAscendingOrder && arr[i] > arr[i - 1])
    ) {
      return false;
    }
  }
  return true;
};

/**
 * check if the array becomes valid after removing one element.
 * @param {number[]} arr - array of numbers
 */
const isValidAfterOneRemoval = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    if (isValid(newArr)) {
      return true;
    }
  }
  return false;
};

/**
 * check if the arr is strictly valid or partially valid
 * @param {number[]} arr - Array of numbers
 */
const checkArray = (arr) => {
  if (isValid(arr)) return 1;
  // part 2
  //if (isValidAfterOneRemoval(arr)) return 1;
  return 0;
};

const result = lines.map((a) => checkArray(a)).reduce((a, b) => a + b, 0);

console.log("result", result);
