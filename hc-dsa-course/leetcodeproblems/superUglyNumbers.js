/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const minPq = new PriorityQueue({compare: (a,b) => a[0] - b[0]});

    // initialize the priority queue with the first prime multiples
    for(const prime of primes) {
        minPq.enqueue([prime, 0, prime]); // [value, index in output, prime factor]
    }

    const output = [1]; // the first super ugly number is always 1

    while(output.length < n) {
        const [value, idx, prime] = minPq.dequeue();
        // avoid duplicate values to be added in the output array
        if(value !== output[output.length -1]) {
            output.push(value);
        } 
        // generate the next multiple of the current prime
        minPq.enqueue([output[idx + 1] * prime, idx+1, prime]);
    }
    return output[n-1];
    
};

// Example usage:
const n = 12;
const primes = [2, 7, 13, 19];
console.log(nthSuperUglyNumber(n, primes)); // Output: 32