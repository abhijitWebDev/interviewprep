/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    let currentVowelCount = 0; // current vowel count to zero
    let maxVowelCount = 0; // max vowel count / result to zero

    for (let i = 0; i < k ; i++) { // we loop through where, i is 0, i should be less tthan k and then we itterate with i++
        if(vowels.has(s[i])) currentVowelCount++; // if the array has matching charecters or vowels in the set then we will append counter.
        maxVowelCount = currentVowelCount; // after that we assign maxvowelCount to currentVowelCount.
        
    }

    for (let i = k; i < s.length; i++) { // now that we have looped through k, we will again create a loop , where i will be k and it should be less than the array or s. 
        if(vowels.has(s[i])) currentVowelCount++; // we check if the array or s index from lhs has the vowels, if yes then we increment the counter.
        if(vowels.has(s[i-k])) currentVowelCount--; // we also check if the array or s index from rhs has vowels, if yes then we decrement currentVowelCount

        maxVowelCount = Math.max(maxVowelCount, currentVowelCount); // here we compare the maximum using Math.max function.
        
    }

    return maxVowelCount; // we return the count/maxVowelCount.
    
};