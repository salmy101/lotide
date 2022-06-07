const assertEqual = require("./assertEqual") 

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
//   } if (actual !== expected) {
//     console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
//   }
// };
 
const eqArrays = require("./eqArrays") 

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

const eqObjects = function(obj1,obj2) {
  let length1 = Object.keys(obj1).length
  let length2 = Object.keys(obj2).length
  let key1 = Object.keys(obj1)
  if( length1 !== length2) {
    return false
  } 
    for(const keys of key1) { // obj1[key] is the vales of the obj1
        if (Array.isArray(obj1[keys]) && Array.isArray(obj2[keys])) {
          if(!eqArrays(obj1[keys],(obj2[keys]))) {
          return false;
      }
  } else if (obj1[keys] !== obj2[keys]) {
    return false
   }

  return true 
}
}
// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] }

// console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(ab, abc), false); // => false 
// console.log(eqObjects(cd, dc));
// console.log(eqObjects(cd, cd2));

module.exports = eqObjects