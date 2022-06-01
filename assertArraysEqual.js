const eqArrays = function (ar1, ar2) {
  if(ar1.length !== ar2.length) {
    return false;
  }
  for (var i = 0, l=ar1.length; i < l; i++) {
  if (ar1[i] !== ar2[i]){
      return false;  
    }  
  }
  return true
} 

const assertArraysEqual = function(actual,expected){
  let eqvArrays = eqArrays(actual,expected)
  if(eqvArrays === false) {
    console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
  } if(eqvArrays === true){
    console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);

  }
}   

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false
assertArraysEqual([5,6,3,7],[5,6,3,7,9])
