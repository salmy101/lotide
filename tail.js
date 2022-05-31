const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
  } if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
  }
}; 

const tail = function(array) {
  return array.slice(1);

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);

let arr = tail(["salma", "salwa", "sunny"]);
assertEqual(arr[0], "salwa"); // the tail function make a new array and "Salwa" is at i = 0 so it will pass!

let oneElement = tail([1]);
assertEqual(oneElement, 2);