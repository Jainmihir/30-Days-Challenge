// let myName = "mihir   ";

// console.log(myName.trim().length);


// console.log(myName.trueLength());

let myHeroes = ["mihir","jain"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function(){
        console.log(`spidy Power is ${this.spiderman}`);
    }
}

// yeh array ke pass bhi jayegi or array ke pass bhi
Object.prototype.mihir = function () {
    console.log(`mihir is present on every object`);
}

// agr array me power inject kroo toh sirf array ke pass jayegi object ke pass nhi jayegi
Array.prototype.heyMihir = function (){
    console.log("hey mihir");
}
// heroPower.mihir();

myHeroes.heyMihir();
myHeroes.mihir();

// heroPower.heyMihir();

// Inheritance : prototype inhertance

// haar ek object ek alg instance hai lekin

const user = {
    name : "mihir"
}
const Teacher = {
    makevideo : true
}
const teachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'Js Assignment',
    __proto__ : teachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport,Teacher);

let anotherUserName = "ChaiAurCode    ";
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"mihir".trueLength();
