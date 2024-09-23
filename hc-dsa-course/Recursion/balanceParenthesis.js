
// function isBalancedParentheses(arr) {
//   // Create a stack to keep track of opening parentheses
//   let stack = [];

//   // Traverse the string/ array
//   for (let i = 0; i < arr.length; i++) {
//     let char = arr[i];

//     // If the character is an opening parenthesis, push it onto the stack
//     if (char === '(' || char === '{') {
//       stack.push(char);
//     } 
//     // If the character is a closing parenthesis
//     else if (char === ')' || char === '}') {
//       // Check if the stack is empty (no matching opening parenthesis)
//       if (stack.length === 0) {
//         return false; // Unbalanced
//       }
//       // Pop the top of the stack (matching opening parenthesis)
//       stack.pop();
//     }
//   }

//   // If the stack is empty, all parentheses were matched
//   return stack.length === 0;
// }

// // Example usage:
// console.log(isBalancedParentheses(['{', '(', ')', '}', '}'])); // true

function balancePar(arr, startIndex=0, currentIndex=0) {
    console.log(arr.length);
    console.log('start index', startIndex);
    console.log('curr index', currentIndex);
    if(startIndex === arr.length) {
        return currentIndex = 0
    }
    if(currentIndex < 0) {
        console.log('current index is -1');
        return false;
        // If currentIndex is less than 0, it means there are more closing parentheses/braces than opening ones at some point, which is invalid. Therefore, the function returns false.
    }

    if(arr[startIndex] === "(" || arr[startIndex] === "{") {
        
        return balancePar(arr, startIndex + 1, currentIndex + 1);
        // If the current character is an opening parenthesis ( or an opening brace {, the function calls itself recursively with startIndex incremented by 1 and currentIndex incremented by 1.
    } else if(arr[startIndex] === ")" || arr[startIndex] === "}") {
        
        return balancePar(arr, startIndex + 1, currentIndex -1 ); 
        // If the current character is a closing parenthesis ) or a closing brace }, the function calls itself recursively with startIndex incremented by 1 and currentIndex decremented by 1.
    } else {
        return false;
    }


}
const arrayOne = ["{", "{", "(", "(", ")", ")", "}", "}"]
const arrayTwo = ["{", "{", "(", "(", ")", ")", "}", "}", "}"]
const arrayThree = ["{"]
console.log('from recursion', balancePar(arrayOne, startIndex=0,currentIndex=0));
// console.log('from recursion', balancePar(arrayTwo, startIndex=0,currentIndex=0));
console.log('from recursion', balancePar(arrayThree, startIndex=0,currentIndex=0));


function removeDuplicates(nums) {
    if(nums.length === 0) return 0;

    // sort the array
    nums.sort();

    let i = 0;

    for(let j = 1; j < nums.length;j++) {
        if(nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }

    }

    console.log(i + 1);
    return i+1;
};

const arr = ['a', 'b', 'c', 'a', 'b', 'd']

console.log(removeDuplicates(arr));
const uniqueChar = removeDuplicates(arr);

console.log(`Array after removing duplicates: ${arr.slice(0, uniqueChar)}`);


