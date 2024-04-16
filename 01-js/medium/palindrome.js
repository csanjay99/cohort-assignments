/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function cleanArray(letter) {
  if (stops.includes(letter)) {
    return false
  }
  return true
}

let stops = [' ', '.', ',', '"', "'", '?', '/', ';', ':', '!', '(', ')', '{', '}', '[', ']', '\\', '-'];

function isPalindrome(str) {
  let strArray = str.toLowerCase().split('');
  let cleanedArray = strArray.filter(cleanArray);
  let cleanStr = cleanedArray.join('');
  const revArray = str.toLowerCase().split('').reverse();
  const cleanRevArray = revArray.filter(cleanArray);
  const revWord = cleanRevArray.join('');

  if (revWord === cleanStr) {
    return true
  }

  return false
}

module.exports = isPalindrome;

// console.log(isPalindrome('race Car'));
