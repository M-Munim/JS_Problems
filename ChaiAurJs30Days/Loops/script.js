// ------------------------------- Activity 1
/*
for (let index = 1; index <= 10; index++) {
  console.log(index);
}
*/

/*
for (let index = 1; index <= 10; index++) {
  console.log(`5 * ${index} = ${5 * index}`);
}
*/

// ------------------------------- Activity 2
/*
let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log(sum);
*/

/*
let num = 10;

while (num > 0) {
  console.log(num)
  num--;
}
*/

// ------------------------------- Activity 3
/*
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);
*/

/*
let num = 5;
let factorial = 1;
let i = num;

do {
  factorial *= i;
  i--;
} while (i > 0);

console.log(`The factorial of ${num} is: ${factorial}`);
*/

// ------------------------------- Activity 4
/*
let n = 5;

for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    if (j === 1) {
      row += '\x1b[31m*\x1b[0m '; // red asterisk
    } else {
      row += '\x1b[37m*\x1b[0m '; // white asterisk
    }
  }
  console.log(row);
}
*/

// ------------------------------- Activity 4
/*
for (let num = 1; num <= 10; num++) {
  if (num === 5) {
    continue; // Skip the rest of the loop when num is 5
  }
  console.log(num);
}
  */

/*

for (let num = 1; num <= 10; num++) {
  if (num === 7) {
    break; // Exit the loop when num is 7
  }
  console.log(num);
}
  */