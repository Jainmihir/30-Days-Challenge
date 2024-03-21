//stack -> primitive datatypes are stored in stack

let myName = "Mihir Jain"
let anotherName = myName 
anotherName="Lokit Jain"

console.log(myName); // MIHIR JAIN
console.log(anotherName); //LOKIT JAIN

//heap -> non primtive datatypes are stored in heap

let userOne = {
    email : "user@google.com",
}
let userTwo = userOne;

console.log(userTwo.email); // user@google.com

userTwo.email="@google.com"

console.log(userOne.email); // @google.com

