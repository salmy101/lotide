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

// const assertArraysEqual = function(actual,expected){
//   let eqvArrays = eqArrays(actual,expected)
//   if(eqvArrays === false) {
//     console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
//   } if(eqvArrays === true){
//     console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
//   }
// } 


const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let output = []
  for(const item of array){
    if(callback(item)) {
      break;
    }
    output.push(item)
  }
  
  return output;
}
//  console.log(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0))

const results1 = takeUntil(array, x => x < 0);
// console.log(eqArrays(results1));


module.exports = takeUntil;