var funStr = "Emma shreds on her electric cello";
console.log(typeof funStr); 
var oneChar = funStr[26]; 
console.log(typeof oneChar);

console.log(funStr.length); 
console.log("".length); 

wordArray = funStr.split(" "); 

console.log(wordArray[5].split(""));

console.log(wordArray.join()); 
// Note: "," is used by default:
// "Emma,shreds,on,her,electric,cello"
console.log(wordArray.join("-")); 
// Param "-" inserted between words:
// "Emma-shreds-on-her-electric-cello"
console.log(wordArray.join("")); 
// "Emmashredsonherelectriccello"
