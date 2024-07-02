//iterative approach

function fibonacci(value) {
    let n0 = 0;
    let n1 = 1;
    
    let temp;

    for (let i = 0; i < value; i++) {
        temp = n0 + n1;
        n0=n1;
        n1=temp;
        
        
    }

    return n0;

}

console.log(fibonacci(6))

// recursive approach

function recursiveFib(value) {
    // base case
    if(value <= 1) {return value}
    return (recursiveFib(value-1) + recursiveFib(value-2));
}

console.log(recursiveFib(6));
