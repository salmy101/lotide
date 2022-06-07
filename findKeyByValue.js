const assertEqual = require('./assertEqual')
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
//   } if (actual !== expected) {
//     console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
//   }
// };

  
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   fantasy: "Merlin",
//   children: "Big Comfy Couch"
// };



const findKeyByValue = function(object,value) {
  for(const key in object) {
    if(object[key] === value)
    return key;
    } 
    return undefined
} 



// console.log(findKeyByValue(bestTVShowsByGenre, "Big Comfy Couch"))
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Big Comfy Couch"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Merlin"), "fantasy");

module.exports = findKeyByValue;