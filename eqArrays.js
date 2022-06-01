const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
  } if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
  }
}; 

//define a eqArray function that take arrays
// comapre two arrays
//pass through the assertEqual function
const eqArrays = function (ar1, ar2) {
  if (ar1.length !== ar2.length) {
  return false;
  } 
  for (var i = 0, l=ar1.length; i < l; i++) {
  if (ar1[i] !== ar2[i]) {
          return false;  
    }  
  }
  return true
} 

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true

console.log(eqArrays([1, 2, 3], [3, 2, 1]) // => false
)
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
)
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
)
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
