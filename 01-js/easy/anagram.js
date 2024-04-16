/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length === str2.length) {
    temp1 = str1.toLowerCase().split('').sort().join('');
    temp2 = str2.toLowerCase().split('').sort().join('');
    // console.log(temp1);
    // console.log(temp2);
    if (temp1 === temp2) {
      return true
    }
    return false

  }
  return false
}

module.exports = isAnagram;