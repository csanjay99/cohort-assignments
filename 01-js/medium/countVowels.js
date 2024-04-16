/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0;
  const strArray = str.split('');
  for (let i = 0; i < strArray.length; i++) {
    const letter = strArray[i];
    if (vowels.includes(letter) || vowels.includes(letter.toLowerCase())) {
      count += 1
    }
  }
  return count
}

module.exports = countVowels;
// console.log(countVowels('perhaps'));