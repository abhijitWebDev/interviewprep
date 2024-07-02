/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  // consider a empty string
  let mergedString = '';
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    mergedString += word1[i];
    mergedString += word2[j];
    i++;
    j++;
  }

  // add remaining letters of word1
  while (i < word1.length) {
    mergedString += word1[i];

    i++;
  }
  while (j < word2.length) {
    mergedString += word2[j];
  }

  return mergedString;
};

const word1 = 'Harda';
const word2 = 'Softss';

console.log(mergeAlternately(word1, word2));
