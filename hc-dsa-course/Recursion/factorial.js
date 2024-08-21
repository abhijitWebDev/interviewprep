function factorial(n) {
    if(n===0 || n===1) {
        return 1;
    }

    return n * factorial(n-1)
}


// Driver code
const n = 5

// Storing the result in result variable
const result = factorial(n)

// Printing the result
console.log(`The factorial of ${n} is ${result}`);

