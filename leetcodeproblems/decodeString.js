/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];

    let currentNum = 0;
    let currentString = '';

    for (const char of s) {
        if(char >= '0' && char <= '9') {
          currentNum=  currentNum * 10 + (char - '0');

        } else if(char === '[') {
            stack.push(currentNum);
            stack.push(currentString);

            // reset currentNum and currentString;
            currentNum = 0;
            currentString = '';
        } else if(char === ']') {
            let prevStr = stack.pop()
            let repeatimes = stack.pop()

            currentString = prevStr + currentString.repeat(repeatimes);
        } else {
            currentString += char; 
        }
        
    }
    return currentString
    
};