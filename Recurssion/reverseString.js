// Reverse a string
//Hello

function reverseString(string) {
    let reverse = '';
    let length = string.length - 1;

    while(length >= 0) {
        reverse = reverse + string[length];
        length = length - 1;

    }
    return reverse;
}

const newString = reverseString('Hello');
console.log(newString);

const recursiveReverseString= (string) => {
    console.log(`The current string: ${string}`)
    // base case 
    if(string === '') {return string}
    let reversePart = recursiveReverseString(string.substring(0, string.length - 1));
    let result = string[string.length-1] + reversePart;
    console.log(`Reversing: lastChar:${string[string.length-1]} added in front of reverse part: ${reversePart} to form a result :${result} `);
    return result
}

console.log(recursiveReverseString('hello'));