const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:[${actual}] === [${expected}]`);
  } if (actual !== expected) {
    console.log(`🛑 🛑 🛑 Assertion Failed:[${actual}] !== [${expected}]`);
  }
};

const head = function (array) {
  return array[0]

}

console.log(head([5,6,7]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Salwa", "Saqib", "Salma"]), "Salma");
assertEqual(head([5]), 5);
assertEqual(head([]), 5);


