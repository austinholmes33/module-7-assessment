// SUM ZERO
function addToZero (array) {
    let left = 0;
    let right = array.length-1;
    
    while(left < right){
      sum = array[left] + array[right];
      if (sum == 0) {
        return true
      }else if (sum > 0) {
        right--;
      }else{
        left++;
      }
      return false
    }
}

//console.log(addToZero([2, 3, 4, -2]))
// runtime complexity is O(n)
// space complexity constant

// UNIQUE CHARACTERS
function hasUniqueChar (arr) {
    return new Set(arr).size === arr.length
}

// console.log(hasUniqueChar([2, 3, 4, 4]))
// runtime complexity O(n)
// space complexity constant

