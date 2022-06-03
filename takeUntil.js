
const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let output = []
  for(const item of array){
    if(callback(item)) {
      break;
    }
    output.push(item)
  }
  
  return output;
}


const results1 = takeUntil(array, x => x < 0);
console.log(results1);
