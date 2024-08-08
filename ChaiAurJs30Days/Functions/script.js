//------------------------------- Activity 1
/*
let Num = 3;

function evenOddCheck(a) {
  if (a % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

evenOddCheck(Num)

// 2
let myNum = 4;

function makeSquare(b) {
  // console.log(b * b);
  console.log(Math.pow(b, 2))
}

makeSquare(myNum)
*/

//------------------------------- Activity 2
/*
let numOne = 300;
let numTwo = 300;

function maxNumChecker(a, b) {
  if (a < b) {
    console.log("Number Two is greater");
  } else if (a > b) {
    console.log("Number One is greater");
  } else {
    console.log("Both are equal");
  }
}

maxNumChecker(numOne, numTwo);

// 2
let firstName = "ali";
let secondName = "khan";

function concateStr(a, b) {
  // console.log(a + " " + b);
  console.log(a.concat(" ", b));
}

concateStr(firstName, secondName)
*/

//------------------------------- Activity 3
/*
let numOne = 30;
let numTwo = 300;

const calculateSum = (a, b) => {
  console.log(a + b);
}

calculateSum(numOne, numTwo)

// Ex 2
let string = "munim";
let char = "m"

const stringCharChecker = (a, b) => {
  let strToArr = a.split("");
  console.log(strToArr);
  for (let i = 0; i < strToArr.length; i++) {
    const element = strToArr[i];
    console.log(element);

    if (element === char) {
      console.log(`found at index ${i}`);
    }

  }
}
stringCharChecker(string, char);
*/

//------------------------------- Activity 4
/*
const funct = (name, pro = 'oil') => {
  console.log(name, pro);
}
funct('Dalda', 'Ghee')

// Ex 2

const functTwo = (name, age = "18") => {
  console.log(`Good Morning, ${name} age: ${age}`);
}

functTwo("Munim", "40")
*/

//------------------------------- Activity 5

// function repeatItSelf(fn, num) {
//   for (let i = 0; i < num; i++) {
//     fn();
//   }
// }

// repeatItSelf(() => console.log("Hello"), 3);


function applyFunctions(func1, func2, value) {
  const firstResult = func1(value);
  const finalResult = func2(firstResult);
  return finalResult;
}

// Example usage:
function addOne(x) {
  return x + 1;
}

function multiplyByTwo(x) {
  return x * 2;
}

const result = applyFunctions(addOne, multiplyByTwo, 5);
console.log(result); // Output will be 12