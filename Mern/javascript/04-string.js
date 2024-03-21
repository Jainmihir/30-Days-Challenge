
const name = "mihir"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); // string interpulition 

const gameName = new String('mihir') // as a object
console.log(gameName)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('m'))

const newString = gameName.substring(0,4);
console.log(newString);

const newString1 = gameName.slice(-8,2);
console.log(newString1);

const newString2 = " m i h i r";
console.log(newString2);
console.log(newString2.trim()); // space remove krdeta hai

const url = "https://mihir.jain/jain%20mj";
console.log(url.replace('%20','-')); // replacing the word

console.log(url.includes('mihir')); // search the word

console.log(url.split('-'))


