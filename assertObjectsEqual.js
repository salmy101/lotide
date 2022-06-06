
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

////////


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 

  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }


};


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };


assertObjectsEqual(eqObjects(ab,ba),true)
assertObjectsEqual(eqObjects(ab,cd),true)