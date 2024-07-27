// ------------------------------- Activity 1
/*
let myNum = -10;

if (myNum === 0) {
  console.log(`${myNum} is = to 0`);
} else if (myNum < 0) {
  console.log(`${myNum} is < than 0, so is negative`);
} else {
  console.log(`${myNum} is > than 0, so is positive`);
}
*/

/*
let age = 22;
let national = "Pakistani"

if (age >= 18 && national === "Pakistani") {
  console.log("You can vote to your favourite party (Lumber 1)");
} else {
  console.log("You cannot vote");
}
*/

// ------------------------------- Activity 2
/*
let val1 = 12;
let val2 = 4;
let val3 = 5;

function greatestVal(val1, val2, val3) {
  if (val1 > val2) {
    if (val1 > val3) {
      console.log("largest is val1");
    } else {
      console.log("largest is val3");
    }
  } else {
    if (val2 > val3) {
      console.log("largest is val2");
    } else {
      console.log("largest is val3");
    }
  }
}

greatestVal(val1, val2, val3)
*/

// ------------------------------- Activity 3
/*
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log("Sunday");
    break;
  case 1:
    day = "Monday";
    console.log("Monday");
    break;
  case 2:
    day = "Tuesday";
    console.log("Tuesday");
    break;
  case 3:
    day = "Wednesday";
    console.log("Wednesday");
    break;
  case 4:
    day = "Thursday";
    console.log("Thursday");
    break;
  case 5:
    day = "Friday";
    console.log("Friday");
    break;
  case 6:
    day = "Saturday";
    console.log("Saturday");
}
*/

/*
let score = 66;

switch (true) {
  case (score > 85):
    console.log("A+");
    break;
  case (score > 75):
    console.log("A");
    break;
  case (score > 65):
    console.log("B");
    break;
  case (score > 50):
    console.log("c");
}
*/

// ------------------------------- Activity 4
/*
let number = 21;

let result = number % 2 === 0 ? "EVEN" : "ODD";
console.log(result);
*/

// ------------------------------- Activity 5

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

const year = 2024;
// console.log(isLeapYear());
if (isLeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}