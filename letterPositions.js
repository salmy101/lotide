

// const letterPositions = function(string){
//   const results = {}
//   for(const index in string) { //loop through and get the index of every letter
//   //console.log(index) this check give me index
//   //console.log(string[index]) this check gives me the letters
//     let key = string[index]  //THEREFORE set key variable to string[index] (the letters) = and call vlaue with bracket notation results[key]
//   if(results[key]){ //if the value exists...in the results object
//     results[key] += 1 // increase by one
//   } if(results[key] === " "){
//    continue; //this is suppose to skip the " "
//   } else { //else...aka doenst already exist in the object
//     results[key] = 1 //start it at 1
//   }
  
//   }
//   return results;
// }

const letterPositions = function(string){
  const results = {}
  for(let i = 0; i < string.length; i++) { 
    
  if(string[i] in results){ 
    results[string[i]].push[i] 
    
  } if(results[string[i]]) {
    results[string[i]] = [results[string[i]], [i]]
  }else {
    results[string[i]] = [i]
  }
  }
  console.log(results)
  return results;
}

letterPositions("lighthouses"); 

module.exports = letterPositions;