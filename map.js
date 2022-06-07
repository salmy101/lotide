const eqArrays = require('./eqArrays')
// const eqArrays = function (ar1, ar2) {
//   if(ar1.length !== ar2.length) {
//     return false;
//   }
//   for (var i = 0, l=ar1.length; i < l; i++) {
//   if (ar1[i] !== ar2[i]){
//       return false;  
//     }  
//   }
//   return true
// } 
const assertArraysEqual = require('./assertArraysEqual')
// const assertArraysEqual = function(actual,expected){
//   let eqvArrays = eqArrays(actual,expected)
//   if(eqvArrays === false) {
//     console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
//   } if(eqvArrays === true){
//     console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
//   }
// }  


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
// console.log(results1); 




module.exports = map;

