// function isPrime(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) return "not valid";

//     function checkPrime(num) {
//         if (num <= 1) return false;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
//             return "not valid";
//         }
//         if (checkPrime(arr[i])) {
//             console.log(`${arr[i]} is a prime number`);
//         } else {
//             console.log(`${arr[i]} is not a prime number`);
//         }
//     }

//     return "function done";
// }

// // Example usage:
// let numbers = [2, 3, 4, 5, 10, 13];
// console.log(isPrime(numbers)); // Should print whether each number is prime or not and return "function done"

// const findDuplicates = (str) => {
//     const charFrequency = {};
//     const duplicates = [];

//     for (let char of str) {
//         if (charFrequency[char]) {
//             charFrequency[char]++;
//         } else {
//             charFrequency[char] = 1;
//         }
//     }

//     for (let char in charFrequency) {
//         if (charFrequency[char] > 1) {
//             duplicates.push(char);
//         }
//     }

//     return duplicates;
// };

// const inputString = "hello world";
// const duplicates = findDuplicates(inputString);
// console.log("Duplicates in the string:", duplicates);

// // count duplicates
// const countDuplicates = (str) => {
//     const charFrequency = {};
//     let duplicatesCount = 0;

//     for (let char of str) {
//         if (charFrequency[char]) {
//             charFrequency[char]++;
//             if (charFrequency[char] === 2) {
//                 duplicatesCount++;
//             }
//         } else {
//             charFrequency[char] = 1;
//         }
//     }

//     return duplicatesCount;
// };

// const inputStringNew = "hello world";
// const numberOfDuplicates = countDuplicates(inputStringNew);
// console.log("Number of duplicates in the string:", numberOfDuplicates);

// // To uppercase
// function alternateUppercase(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i].toLowerCase();
//         }
//     }
//     return result;
// }

// const inputStringUpper = "hello world";
// const outputString = alternateUppercase(inputStringUpper);
// console.log("Original string:", inputString);
// console.log("Modified string:", outputString);

// // method to make elements in a even elements in array capital

// const myArray = ['a', 'b', 'c']
// Array.prototype.capitalizeEvenElements = function() {
//     for (let i = 0; i < this.length; i++) {
//         if(i % 2 === 0) {
//             this[i] = this[i].toUpperCase();
//         }

//     }
//     return this;
// }

// const resultArray = myArray.capitalizeEvenElements();

// console.log(resultArray);

// const arr = [1, 2, 3, 4, 5];

// const sum = (...arr) => {
//     const newSum = arr.reduce((previousVal, nextval) => previousVal + nextval, 0);
//     return newSum;
// }

// const res = sum(1, 2, 3, 4, 6, 8);
// console.log(res);

const numberToWords = (numString) => {
  const singleDigits = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let num = parseInt(numString, 10);

  if (num === 0) {
    return 'zero';
  }

  let words = '';

  if(num >=1000) {
    words += singleDigits[Math.floor(num/1000)] + ' thousand';
    num %= 1000;
  }

  if (num >= 100) {
    words += singleDigits[Math.floor(num / 100)] + ' hundred ';
    num %= 100;
  }

  if (num >= 20) {
    words += tens[Math.floor(num / 10)] + ' ';
    num %= 10;
  }

  if (num >= 10) {
    words += teens[num - 10];
  } else if (num > 0) {
    words += singleDigits[num];
  }

  return words.trim();
};

const numericString = '6228';
const words = numberToWords(numericString);
console.log(`Output: ${words}`);

// function swapTwoNos(a, b) {
//   // b = a + b - (a=b);

// //   a = a ^ b;
// //   b = a ^ b;
// //   a = a ^ b;

//   // a=a*b;
//   // b=a/b;
//   // a=a/b;

//   // a=a+b;
//   // b=a-b;
//   // a=a-b;

//   // int t=a;
//   // a=b;
//   // b=t;

//   console.log(`The swapped numbers are a = ${a} and b = ${b}`);
// }

// console.log(swapTwoNos(10, 20));


function isPallindrome(num) {
  const numStr = num.toString();

  const reversedNumStr = numStr.split(' ').reverse();

  return numStr === reversedNumStr;
  

}

console.log(isPallindrome(121));


// reverse string

// first way
function reverseStr(str) {
  let reverseVar='';
  // let length = str.length;
  

  // // itereate over data
  // for(i=length-1; i>=0;i--) {
  //   reverseVar += str.charAt(i);
  // }
  // return reverseVar;

  // using charecter array

// const charArray = str.split('');
// console.log(charArray.length);
// console.log(charArray);

// for (let i = charArray.length - 1; i >= 0; i--) {
//   const element = charArray[i];
//   reverseVar = reverseVar + element;
  
// }
// return reverseVar;

// 3rd method:
const result = str.split('').reverse().join('');
return result
  
}

const result = reverseStr("abc")
console.log(result);

// reverse a number in javascript

function reverseNum(num) {
  // let rev = 0;

  // while(num>0) {
  //   rev = rev*10 + num%10;
  //   num = Math.floor(num/10);
  // }
  // return rev;

  // converting it to string and reverse
  let rev='';

  const data = num.toString();

  let length = data.length;
  for(let i=length-1;i>=0;i--) {
    rev += data.charAt(i);
    
  }
  return Number(rev);




}

console.log(reverseNum(1234));