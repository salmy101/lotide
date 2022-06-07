
// const assertEqual = require("../assertEqual")

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);

// let arr = tail(["salma", "salwa", "sunny"]);
// assertEqual(arr[0], "salwa"); // the tail function make a new array and "Salwa" is at i = 0 so it will pass!

const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"] );
  });
  it("returns ['salwa', 'sunny'] for ['salma', 'salwa', 'sunny']", () => {
    assert.deepEqual(tail(["salma", "salwa", "sunny"]),["salwa", "sunny"] );
  });


}); 