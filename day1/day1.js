const fs = require('node:fs');

/* 
    Example: 
    1. sort them and just loop through and return a new array
*/
const leftValues = [3, 4, 2, 1, 3, 3];
const rightValues = [4, 3, 5, 3, 9, 3];

/**
 * Sorts an unsorted array.
 * @param {number[]} arr The unsorted array.
 * @return {number[]} Returns the sorted array
*/
const sortArr = (arr) => arr.sort((a, b) => a - b)


const exampleDayOnePartOne = () => {
    const sortedLeft = sortArr(leftValues);
    const sortedRight = sortArr(rightValues);

    if(sortedLeft.length !== sortedRight.length) return;

    let sum = 0;

    for(let i = 0; i < sortedLeft.length; i++){
        const leftValue = sortedLeft[i];
        const rightValue = sortedRight[i];
        const distanceBetweenLR = Math.abs(leftValue - rightValue);
        sum += distanceBetweenLR;
    }

    return sum; 
};
// works!
console.log('Example - day 1 part one: ', exampleDayOnePartOne());


const dayOnePartOne = () => {
    const data = fs.readFileSync('./day1-input.txt', 'utf-8');
    const lines = data.trim().split('\n');
    const leftArray = [];
    const rightArray = [];

    for(const line of lines) {
        const [ left , , , right ] = line.split(' ').map(Number)
        leftArray.push(left);
        rightArray.push(right)
    }

    const sortedLeft = sortArr(leftArray);
    const sortedRight = sortArr(rightArray);

    let sum = 0;

    for(let i = 0; i < sortedLeft.length; i++){
        const leftValue = sortedLeft[i];
        const rightValue = sortedRight[i];
        const distanceBetweenLR = Math.abs(leftValue - rightValue);
        sum += distanceBetweenLR;
    }

    return sum; 
};

console.log('Result - day 1 part 1: ' , dayOnePartOne());


const dayOnePart2Example = () => {
    const sortedLeft = sortArr(leftValues);
    const sortedRight = sortArr(rightValues);

    const repetitionCounter = {};
    for(let i = 0; i < sortedLeft.length; i++) {
        let timesSeen = 0;
        for(let j = 0; j < sortedRight.length; j++) {
            if(sortedLeft[i] === sortedRight[j]) {
                timesSeen++;
            }
        }
        if(repetitionCounter[sortedLeft[i]] !== undefined) {
            repetitionCounter[sortedLeft[i]] = repetitionCounter[sortedLeft[i]] + timesSeen;
            continue;
        }
        repetitionCounter[sortedLeft[i]] = timesSeen;
    }

    const objToArr = Object.keys(repetitionCounter).map((key) => [key, repetitionCounter[key]]);

    const result = objToArr.map((entry) => {
        return Number.parseInt(entry[0]) * entry[1];
    })

    let finalSum = 0;

    for(let i = 0; i< result.length; i++) {
        finalSum += result[i];
    }

    return finalSum;
};
        
console.log('Example - day 1 part 2',dayOnePart2Example());


const dayOnePart2 = () => {
    const data = fs.readFileSync('./day1-input.txt', 'utf-8');
    const lines = data.trim().split('\n');
    const leftArray = [];
    const rightArray = [];

    for(const line of lines) {
        const [ left , , , right ] = line.split(' ').map(Number)
        leftArray.push(left);
        rightArray.push(right)
    }

    const sortedLeft = sortArr(leftArray);
    const sortedRight = sortArr(rightArray);;


    const repetitionCounter = {};
    for(let i = 0; i < sortedLeft.length; i++) {
        let timesSeen = 0;
        for(let j = 0; j < sortedRight.length; j++) {
            if(sortedLeft[i] === sortedRight[j]) {
                timesSeen++;
            }
        }
        if(repetitionCounter[sortedLeft[i]] !== undefined) {
            repetitionCounter[sortedLeft[i]] = repetitionCounter[sortedLeft[i]] + timesSeen;
            continue;
        }
        repetitionCounter[sortedLeft[i]] = timesSeen;
    }

    const objToArr = Object.keys(repetitionCounter).map((key) => [key, repetitionCounter[key]]);

    const result = objToArr.map((entry) => {
        return Number.parseInt(entry[0]) * entry[1];
    })

    let finalSum = 0;

    for(let i = 0; i< result.length; i++) {
        finalSum += result[i];
    }

    return finalSum;
}

console.log('Result - day 1 part 2: ', dayOnePart2());