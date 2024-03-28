// javascript vs class

// OOPS -> this is a programming paradigm

// object oriented programming -> collection of properties and methods
// -toLowerCase

// why use oops -> because we use new features of java

// # parts of oops :- 
// object literal  & this keyword
const user = {
    username : "Mihir",
    loginCount : 8,
    signedIn :  true,
    getUserDetails : function(){
        console.log(`${this.username}`);
        console.log(`${this.loginCount}`);
        console.log(this); // current context means user me jo jo chize hai 
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //{} global context  -> window object




// -> contrutor
// new -> is a contructor means yeh nhi context bnata hai means new object bnata hai 

// const promiseOne = new Promise();
// const date = new date();


function User(username , isloggedin){
    this.username = username;
    // variable : values
    this.isloggedin = isloggedin;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
// 1:- contrustor function se new instance create hota new keyword ke through
// 2:- new keyword se ek empty object create hota hai jisko instance bola jata hai fir uske baad ek 
// 3:- construtor function call hota new keyword ki wjh se fir ek contrutor ke undr saare arguments 
// 4:- pack krta or return krdeta hai new instance

const userOne = new User("mihit",2);
const userTwo = new User("mihir",2); // yeh overwrite krdega without new keyword 
console.log(userOne);
console.log(userTwo);
console.log(userOne.construtor);
console.log(userOne.greeting());

// -> classes
// -> instances (new,this)

// -> prototypes

function multipleByFive(num){
    return num*5;
}

multipleByFive.power = 2;
console.log(multipleByFive(5));
console.log(multipleByFive.power);
console.log(multipleByFive.prototype);


function CreateUser(username , score ){
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function(){
    this.score++
}

CreateUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new CreateUser("chai",25);
const tea = new CreateUser("tea",250);

chai.printMe();
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called,
 if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



//# 4 pillars oops :-
// abstraction -> fetch
// encapsulation -> data ko wrap up
// inheritance 
// polymorphism -> many forms 

