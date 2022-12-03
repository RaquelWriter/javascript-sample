// ASSIGNMENTS 2
const l = 9;
console.log(
  `2.a. The diagonal of a square where the length of each is ${l} is ${Math.sqrt(
    l ** 2 + l ** 2
  )}`
);

console.log(
  '2.b. The area of a triangle where lengths of the three of its sides are 5, 6 and 7.'
);
// First calculate the semiperimeter
const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2; // semiperimeter
const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
console.log(`Result area: ${area}`);

console.log(
  '2.c. Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.'
);

const radius = 4;
const areaCircle = Math.PI * radius ** 2;
const circunferenceCircle = 2 * Math.PI * radius;
console.log(
  `Result circumference = ${circunferenceCircle} and result surface area = ${areaCircle}`
);

// ASSIGNMENTS 3

console.log(
  '3.a. Write a JavaScript program that accepts two integers and displays the larger of the two'
);
let number_1 = prompt('Tell me a number');
let number_2 = prompt('Tell me another number');

findLargest(number_1, number_2);

function findLargest() {
  if (number_1.length > number_2.length) {
    return alert(
      `The size of number ${number_1} is greater than the size of ${number_2}`
    );
  } else if (number_2.length > number_1.length) {
    return alert(
      `The size of number ${number_2} is greater than the size of ${number_1}`
    );
  } else {
    return alert('Both numbers are equal in size');
  }
}
console.log(
  'Write a JavaScript program that checks whether an integer is an even or an odd number'
);
const numberEvenOdd = prompt(
  "Tell me a number, and I will tell you if it's even or odd"
);
numberEvenOdd % 2 === 0
  ? alert(`The number ${numberEvenOdd} is even.`)
  : alert(`The number ${numberEvenOdd} is odd`);
