const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅ ✅ ✅ Assertion Passed: " + "[" + actual + "] ===  [" + expected + "]");
  } if (actual !== expected) {
    console.log("🛑 🛑 🛑 Assertion Failed: [" + actual + "] !==  [" + expected + "]");
  }
};

assertEqual(4,4);
assertEqual(4,3);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp"); 

