

// console.log(middle([1])); 
// console.log(middle([1,2])); 
// console.log(middle([1,2,3]));  
// console.log(middle([55,3,45,8,12])); 
// console.log(middle([1,2,3,4]));  

const assert = require('chai').assert;
const middle = require("../middle")

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]); 
  });
  it("returns [45] for [55,3,45,8,12]", () => {
    assert.deepEqual(middle([55,3,45,8,12]),45); 
  });
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), 2); 
  });
  it("returns [5] for [1,2,3,5,6,7,8,]", () => {
    assert.deepEqual(middle([1,2,3,5,6,7,8,]), 5); 
  });
});