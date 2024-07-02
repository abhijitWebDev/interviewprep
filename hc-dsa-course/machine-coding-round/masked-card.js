/*

console.log(maskify('5512103073210694')); 
// 5###########0694
console.log(maskify('4556-3646-0793-5616')); 
// 4###-####-####-5616
console.log(maskify('')); 
// ''
console.log(maskify('paypalisgreat')); 
// paypalisgreat

*/

function maskify(cardnumber) {
    if(typeof cardnumber === 'number') {
        cardnumber.toString();
    }
    // optional length
    if(cardnumber.length < 6) {
        return cardnumber;
    }

    const firstChar = cardnumber[0];
    const lastFourCharecters = cardnumber.slice(-4);

    let maskedSection = '';

    for (let i = 1; i < array.length - 4; i++) {
        const char = cardnumber[i];
        maskedSection != isNan(paseInt(char)) ? char : '#';
    }
    return firstChar + maskedSection + lastFourCharecters;

}