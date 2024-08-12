// ----------------------- Task NO 1

/*
const myArr = [1, 2, 3, 4, 5, 6];
let firstElem = myArr[0];
let lastElem = myArr[myArr.length - 1];

console.log(`Array is ${myArr}`);
console.log(`First Elem is ${firstElem}`);
console.log(`Last Elem is ${lastElem}`);
*/


// ----------------------- Task NO 2
/*
// const myArray = [1, 2, 3, 4, 5];
// myArray.push(100);              // Push , add 100 to end of array
// console.log(myArray);           // Push

// let res = myArray.pop()          // Pop , pop form end of array
// console.log(myArray);            // Pop
// console.log(res);                // Pop


// myArray.shift(100);              // shift , remove form start of array
// console.log(myArray);            // shift

// let res = myArray.unshift(100)      // unshift , add to start of array
// console.log(myArray);               // unshift
*/


// ----------------------- Task NO 3

// ------------- Map

// const myArray = [1, 2, 3, 4, 5];
// let res = myArray.map((i) => {
//   return i * i;
// })
// console.log(res);

// ------------- Filter

// const myArray = [1, 2, 3, 4, 5];
// const filtereArray = myArray.filter(i => i % 2 == 0)
// console.log(filtereArray);

// // Ex 2
// const values = [300, 400, 200, 1, 3, 4, 5, 100].filter(isBig);

// function isBig(val) {
//   return val >= 10;
// }
// console.log(values)

// ------------- Reduce

// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);


// ----------------------- Task NO 4
/*
const myArray = [1, 2, 3, 4, 5];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}


// using foreach
console.log("Using Foreach");
myArray.forEach(element => {
  console.log(element);
});
*/

// ----------------------- Task NO 4

const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(twoDimensionalArray);

for (let i = 0; i < twoDimensionalArray.length; i++) {  // Outer loop (rows)
  for (let j = 0; j < twoDimensionalArray[i].length; j++) {  // Inner loop (columns)
    console.log(`Element at row ${i}, column ${j}: ${twoDimensionalArray[i][j]}`);
  }
}

// Next
const specificElem = twoDimensionalArray[1][2]
console.log(specificElem);