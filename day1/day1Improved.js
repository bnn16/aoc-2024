const fs = require('node:fs');

const leftValues = [3, 4, 2, 1, 3, 3];
const rightValues = [4, 3, 5, 3, 9, 3];

/**
 * Sorts an unsorted array.
 * @param {number[]} arr The unsorted array.
 * @return {number[]} Returns the sorted array.
 */
const sortArr = (arr) => {
    arr.sort((a, b) => a - b);
    return arr;
};

/**
 * Calculates the sum of absolute differences between two sorted arrays.
 * @param {number[]} leftArray The left array.
 * @param {number[]} rightArray The right array.
 * @return {number} The sum of absolute differences.
 */
const calculateSumOfAbsoluteDifferences = (leftArray, rightArray) => {
    let sum = 0;

    for (let i = 0; i < leftArray.length; i++) {
        const leftValue = leftArray[i];
        const rightValue = rightArray[i];
        const distanceBetweenLR = Math.abs(leftValue - rightValue);
        sum += distanceBetweenLR;
    }

    return sum;
};

/**
 * Parses the input data file into two arrays (left and right values).
 * @param {string} filePath The path to the input file.
 * @return {[number[], number[]]} Returns two arrays: left and right values.
 */
const parseInputData = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < lines.length; i++) {
        const [left, , , right] = lines[i].split(' ').map(Number);
        leftArray.push(left);
        rightArray.push(right);
    }

    return [leftArray, rightArray];
};

/**
 * Calculates the sum of products of repeated values from two sorted arrays.
 * @param {number[]} leftArray The left array.
 * @param {number[]} rightArray The right array.
 * @return {number} The sum of products of repeated values.
 */
const calculateSumOfRepeatedValueProducts = (leftArray, rightArray) => {
    const repetitionCounter = {};

    for (let i = 0; i < leftArray.length; i++) {
        let timesSeen = 0;
        for (let j = 0; j < rightArray.length; j++) {
            if (leftArray[i] === rightArray[j]) {
                timesSeen++;
            }
        }

        if (repetitionCounter[leftArray[i]] !== undefined) {
            repetitionCounter[leftArray[i]] += timesSeen;
            continue;
        }

        repetitionCounter[leftArray[i]] = timesSeen;
    }

    let finalSum = 0;

    for (const key in repetitionCounter) {
        finalSum += Number(key) * repetitionCounter[key];
    }

    return finalSum;
};

const exampleDayOnePartOne = () => {
    const sortedLeft = sortArr([...leftValues]);
    const sortedRight = sortArr([...rightValues]);

    if (sortedLeft.length !== sortedRight.length) return;

    return calculateSumOfAbsoluteDifferences(sortedLeft, sortedRight);
};

console.log('Example - day 1 part one: ', exampleDayOnePartOne());

const dayOnePartOne = () => {
    const [leftArray, rightArray] = parseInputData('./day1-input.txt');
    const sortedLeft = sortArr(leftArray);
    const sortedRight = sortArr(rightArray);

    return calculateSumOfAbsoluteDifferences(sortedLeft, sortedRight);
};

console.log('Result - day 1 part 1: ', dayOnePartOne());

const dayOnePart2Example = () => {
    const sortedLeft = sortArr([...leftValues]);
    const sortedRight = sortArr([...rightValues]);

    return calculateSumOfRepeatedValueProducts(sortedLeft, sortedRight);
};

console.log('Example - day 1 part 2: ', dayOnePart2Example());

const dayOnePart2 = () => {
    const [leftArray, rightArray] = parseInputData('./day1-input.txt');
    const sortedLeft = sortArr(leftArray);
    const sortedRight = sortArr(rightArray);

    return calculateSumOfRepeatedValueProducts(sortedLeft, sortedRight);
};

console.log('Result - day 1 part 2: ', dayOnePart2());
