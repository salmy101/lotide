const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
  } if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
  }
};
// write countOnly function below


   
const countOnly = function(allItems, itemsToCount) { // this function is taking an array of strings and an object
  const results = {};
  for (const item of allItems) {   // console.log("Item:",item); this will give me all the names after the for-of loop
    if (itemsToCount[item]) { //this: object[key] bracket notation to retrive the value!
      console.log("exists:", itemsToCount[item], item) // this checks that, we are getting that value of  calling the object[key/item/name] (T/F) and the key/name
      if (results[item]) { // if the name exist already in result object then increase by 1
        results[item] += 1;
      } else {       //if that key does not exist in result object then start at 1
        console.log(results)
        results[item] = 1;
        console.log(results);
      }
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);