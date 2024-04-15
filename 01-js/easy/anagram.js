/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length === str2.length) {
    let temp = str2;
    for (let i = 0; i < str1.length; i++) {
      const index = str2.indexOf(str1[i]);
      if (index !== -1) {
        temp = str2.replace(temp, str2)
      }
    }
  }
}

module.exports = isAnagram;
