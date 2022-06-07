const assertEqual = require('./assertEqual')

// const assertEqual = require('./assertEqual')
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
//   } if (actual !== expected) {
//     console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
//   }
// };
  

// take a letter
// add to obj w/ key 
// if no value, assign 
//if value, assign to key

const countLetters = (string) => { //function that takes a string
  const result = {}; //empty object to put results in
  for(const letter of string) {  //want to us for-of loop , if we did for-in loop, we woudl get only indexes
    //console.log(letter) checks to see if we are getting all the letter, now the letter is a key
    if(result[letter]) { //"If the value of result[letter] is already there then increase by one. / if this: result[letter] = true, then increase it
      result[letter] += 1;
    } else {
      result[letter] = 1; // if doesnt already exist then start at 1
    }
  };
  return result
} 


module.exports = countLetters;
 