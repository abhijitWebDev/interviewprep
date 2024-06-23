/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.
*/

/*
steps 
1 calculate length
2 create frequency map.
3 compare frequency map.
4 how to compare the frequency map( we cannot compare directly)
5 Extract keys and compare them.
6 have same charecters(need to compare them)
7 we will get the size and compare same charecters
8 extract values and sort them , we can keep them in arrays.
9 then convert them into strings.
10 compare the two


*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;

    //2 Create fm map
    const FM1 = new Map();
    const FM2 = new Map();

    // set FM1
    for (const charecter of word1) {
        FM1.set(charecter, (FM1.get(charecter) || 0) + 1)
        
    }

    // Set FM2
    for (const charecter of word2) {
        FM2.set(charecter, (FM2.get(charecter) || 0) + 1)
        
    }

    const charecter1 = new Set(FM1.keys())
    const charecter2 = new Set(FM2.keys())

    if(charecter1.size !== charecter2.size) return false;

    // check keys are same or not.

    const haveSameCharecters = [...charecter1].every((char) => charecter2.has(char));
    
    if(!haveSameCharecters) return false;

    // sort the arrays 

    const sortedFrequencyOne = Array.from(FM1.values()).sort((a,b) => a-b);
    const sortedFrequencyTwo = Array.from(FM2.values()).sort((a,b) => a-b);

    // convert them into strings and compare them and it will return true or false and we store it in the variable.

    const areFequencyIdentical = sortedFrequencyOne.join(',') === sortedFrequencyTwo.join(',');
    // we check if its not true then we return false
    if(!areFequencyIdentical) return false;

    // after the whole operation is complete , we return true.
    return true;


    
};