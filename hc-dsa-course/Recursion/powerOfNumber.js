function powerOfGivenNumber(base, exponent) {
    if(exponent === 0) {
        return 1;
    }

    return base *  powerOfGivenNumber(base, exponent-1);
}

console.log(powerOfGivenNumber(2,4));