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

//GOAL
// take one array look through
//loko thorugh seocn arry, 
//if any of the elemnt in second mtch the one in first
//namke new verison of first w/out he element in second 


/* loop through one and hen loop through 2,
comare them (if(arr1[i] === arr2[j]) 
if match: 
if no match: skip
*/

const without = function(arr1, arr2) {
  const newArr = []
  for(let i = 0; i < arr1.length; i++) {
      const val1 = arr1[i]
      let isMatch = false

      for( let j = 0; j < arr2.length; j++) { 
        const val2 = arr2[j]


        if(val1 === val2) {
          isMatch = true
        }
    } 
    if(isMatch === false) {
      newArr.push(val1);
    }
  }
  return newArr;
}

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]) );

assertArraysEqual(without([1,4,7],[2,4,6]),[1,7])
assertArraysEqual(without([2,9,5,2,0,6],[1,0,8,6]),[2,9,5,2])





