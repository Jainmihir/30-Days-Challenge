"use strict"; // treat all JS code as newer version

// alert(3+3);

const name = "mihir"
const no = 1
const flag = true;

let d;
console.log(d);  // undefined


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 18284724792749292479n;
console.log(typeof bigNumber);


console.log(typeof e);
console.log(typeof b);
console.log(typeof c);

console.log(typeof null);  // object
console.log(typeof undefined); // undefined




// # Primtive Datatypes # //
//number => 2 to power53
//bigInt => stocks wagera me 
// string = " "
// boolean => true/false
// null => standalone value
// undefined => undefined ka mtlb khali hai lekin null ka mtlb woh null hai usme koi bhi value nhi aa skti
// symbol => unique
// jinme koi reference nhi h 
// call by value 
// 7: types : string , number , boolean , null , undefined , symbol , bigInt 



// # Non Primtive Datatypes  || Refernced Types # //
// array , objects, functions
// jisme refernce hai
// call by reference 

const heros = ["Mihir","Jain","Lokit"]
let myobj = {
    name : "Mihir",
    age : 22,
}
const myFunction = function ()
{
    console.log("Hello");
}
myFunction();

// => javascript is a dyanmically typed language 












// # DataTypes Conversion //

// STRING -> NUMBER

let score = "33"
console.log(typeof score);  //string
console.log(score);  // 33

let valueInNumber = Number(score);  // typeconversion in number
console.log(valueInNumber) //33 
console.log(typeof valueInNumber)   // number


// NAN
let score1 = "abc33"

console.log(typeof score1)  // string
console.log(score1) //abc33

let answer = Number(score1)
console.log(answer);  //NAN
console.log(typeof answer);   // number

// "33" -> 33
// "33abc" -> NaN
// true->1 or false->0

let isLog = "mihir"
let isLoggedIn = Boolean(isLog)
console.log(isLoggedIn); // true

// "1" -> true
// "" -> false
// "mihir" -> true

let someNumber = 33
console.log(typeof someNumber); // number
let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber);  //string


// # operations  #//

let value = 33
let negValue = -value
console.log(negValue);

let str1 = "mihir"
let str2 = "jain"
console.log(str1+str2);

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + "2") //12
console.log(2 * "2") //4
console.log("2" * 4); //8
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "3") //33

console.log(+true); //1
console.log(+""); //true


// # Comparision # //

console.log(2>1);
console.log(3<1);
console.log(2>=2);
console.log(2 == 1);
console.log(2!=1);

console.log("2">1) // yeh nhi kaare kyuki datatype same nhi lekin yeh javascript cnvert krdegi 
console.log("2" === 2); // yeh false hai 

//=== strict check 

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0);



