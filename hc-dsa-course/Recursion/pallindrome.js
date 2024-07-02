// deed
// ee


// recursive function
function pallindrome(string) {
    if(string.length <= 1) {
        return true;
    }

    if(string[0] === string[string.length-1]) {
        return pallindrome(string.substring(1, string.length-1 ))
    } else {
        return false;
    }
}

console.log(pallindrome('madam'));