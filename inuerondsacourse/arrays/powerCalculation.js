function pow(x,n) {
    if(n===0) return 1;
    if(n<0) {
        n=-n;
        x=1/x;
    }
    return n%2 ? x * pow(x * x, Math.floor(n/2)): pow(x*x, Math.floor(n/2));
}

const result = pow(-3, 2);

console.log(result);