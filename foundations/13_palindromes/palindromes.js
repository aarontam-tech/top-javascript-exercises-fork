const palindromes = function (string) {
  let charArray = [...string.toLowerCase()].filter((character) => character.match("[a-z0-9]"));
  for(let i = 0; i < charArray.length/2; i++) {
    if(charArray[i] != charArray[charArray.length-1-i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
