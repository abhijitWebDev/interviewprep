// find gcd of two numbers
// input of 42 and 18
// output 6
// 42 divisors 1, 2, 3, 6, 7, 14,21;
// 18 divisors 1, 2, 3, 6, 9, 18;

// itterative way
function gcd(num1, num2) {
    while(num2 !== 0) {
        let remainder = num1 % num2;
        num1=num2;
        num2=remainder;
    }
    return num1;
}

function findGcd(num1, num2) {
    if(num1 === num2) {
        return num1;
    }

    if(num1 > num2) {
        return findGcd(num1-num2, num2);
    } else {
        return findGcd(num1, num2-num1);
    }
}

console.log(gcd(100,150));

console.log(findGcd(100, 224));