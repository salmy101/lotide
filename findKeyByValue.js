
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
  } if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
  }
};

  
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  fantasy: "Merlin",
  children: "Big Comfy Couch"
};



const findKeyByValue = function(object,value) {
  for(const key in object) {
    // console.log(key);
    if(object[key] === value)
    return key;
  }
} 



findKeyByValue(bestTVShowsByGenre, "The Wire")






// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Big Comfy Couch"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Merlin"), "fantasy");