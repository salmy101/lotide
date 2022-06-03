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



const words = ["ground", "control", "to", "major", "tom"];
 
const map = function(array,callback) { //since map typically gives us a alterred array, lets stat with and empty arry and retrun it
  const result = [];
  for(const item of array){ //loop through the array
  console.log("item BEFORE:", item); //what is each item/element of the array before map function transformed it (this is a check)
  console.log("item AFTER:", callback(item)); //NOW what is the item after the call back function does the heavy lifeting (the fisrt letter only)
  console.log("---")
  result.push(callback(item)) //now in the empty array push the transformed items(done by callback), and return new array

}
  return result;
}


let result1 = map(words, word => word[0]); // words, word => word[0] !! this is the callback function IN arrow notation, fives first letter only
console.log(result1)

//Write test cases using at least three different ways of using map.

assertArraysEqual(map(),[ 'g', 'c', 't', 'm', 't' ])

