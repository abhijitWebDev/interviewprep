// itterative

function removeTAS(inputstring) {
    let result="";
    for (let i = 0; i < inputstring.length; i++) {
        let char = inputstring[i];
        if(char!==' ' && char !== '\t') {
            result += char;
        }
    }
    return result;

}

function recRemoveTAS(inputstring) {
    if(inputstring.length === 0) {
        return "";
    }

    const firstChar = inputstring[0];

    const restOfString = inputstring.slice(1);

    if(firstChar === ' ' || firstChar === '/t') {
        return recRemoveTAS(restOfString);
    }


    return firstChar + recRemoveTAS(restOfString);

}

console.log(removeTAS('h e llo'));
console.log(recRemoveTAS('h e ll    o'));

