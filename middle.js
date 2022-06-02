
let middle = function(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr.length  === 1 || arr.length === 2 || arr.length === undefined) { //aka if the length is empty
        return [];
      }  
      if(arr.length % 2 !== 0) { //aka if the length is odd
        return arr[Math.floor(arr.length / 2)]
      } 
    } if(arr.length % 2 === 0){
      const middle2 = [arr[arr.length / 2 - 1], arr[arr.length / 2]];
        return middle2;
      }
      
    }
          
console.log(middle([1])); 
console.log(middle([1,2])); 
console.log(middle([1,2,3]));  
console.log(middle([55,3,45,8,12])); 
console.log(middle([1,2,3,4])); 