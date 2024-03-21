// Primitive datatypes are those variables used by call by value 
// 7 types : String , Number , Boolean , null, undefined , Symbol , BigInt


// javascript is a dynamically type 
// ex-> const score = 100

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false
const bigNumber = 22453553n;
console.log(bigNumber);

// Non -primitive datatypes are those variable used by call by reference
// array , objects, Functions
const heros = ["mihir","jain", "yes"];
let myobj  = {
    name : "mihir",
    age : 22,
}
const myFunction = function() {
    console.log("helloworld");
}
console.log(typeof bigNumber); 
console.log(typeof myFunction);
