// const head = require('../head');
// const assertEqual = require("../assertEqual");
// const { assert } = require('chai');

// console.log(head([5,6,7]));
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Salwa", "Saqib", "Salma"]), "Salma");
// assertEqual(head([5]), 5);
// assertEqual(head([]), 5);

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  }); 
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });
  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  }); 
  it("returns Salwa for [Salwa, Saqib, Salma]", () => {
    assert.strictEqual(head(["Salwa", "Saqib", "Salma"]), "Salwa");
  });

});

