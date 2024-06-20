function isPrime(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "not valid";

    function checkPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
            return "not valid";
        }
        if (checkPrime(arr[i])) {
            console.log(`${arr[i]} is a prime number`);
        } else {
            console.log(`${arr[i]} is not a prime number`);
        }
    }

    return "function done";
}

// Example usage:
let numbers = [2, 3, 4, 5, 10, 13];
console.log(isPrime(numbers)); // Should print whether each number is prime or not and return "function done"

