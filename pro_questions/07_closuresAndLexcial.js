function outer(x) {
    return function inner(y) {
        return x+y;
    }
}

const result =outer(2);
console.log(result(4));