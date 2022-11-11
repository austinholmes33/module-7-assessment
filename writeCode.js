// SUM ZERO
function addToZero (arr) {
    let left = 0;
    let right = arr.length-1;
    
    while(left < right){
      sum = arr[left] + arr[right];
      if (sum === 0) {
        return true
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
      return false
    }
}

//console.log(addToZero([2, 3, 4, -2]))
// runtime complexity is O(n)
// space complexity O(1)

// UNIQUE CHARACTERS
function hasUniqueChar (arr) {
    return new Set(arr).size === arr.length
}

// console.log(hasUniqueChar([2, 3, 4, 5]))
// runtime complexity O(n)
// space complexity O(1)

//PANGRAM SENTENCE

function isPangram (str) {
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

//console.log(isPangram('The quick brown fox jumps over the lazy dog'))
// runtime complexity O(n)
// space complexity O(1)

//LONGEST WORD
function findLongestWord (arr) {

    let longestWord = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord){
      longestWord = arr[i].length;
       }
    }
    return longestWord;
}

//console.log(findLongestWord(['hi', 'hello', 'welcome', 'bye']))
// runtime complexity O(n)
// space complexity O(1)

// Final thoughts on complexity: All of these functions take input of an array (including the string in pangram, which has the worst-case possibillity for infinite length)
// For this reason, the space complexity on all of them is linear. For the runtime complexity, each function only loops over that array once, giving in linear runtime as well.