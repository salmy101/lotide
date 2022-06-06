const eqArrays = require("./eqArrays")

const assertArraysEqual = function(actual,expected){
  let eqvArrays = eqArrays(actual,expected)
  if(eqvArrays === false) {
    console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
  } if(eqvArrays === true){
    console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
  }
}   

module.exports = assertArraysEqual