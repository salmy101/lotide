const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
  } if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
  }
};
  
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

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

console.log(countLetters("lighthouse in the house"))


 