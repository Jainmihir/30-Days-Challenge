const User = {
    username : "Mihir",
    price : 999,
    welcomeMessage: function() {
            console.log(`${this.username} , welcome to website `);
            console.log(this)
    }

}
//this current context ko refer krta hai

User.welcomeMessage()
User.username = "miir"
User.welcomeMessage()
console.log(this)

// this -> browser ke undr window object hota hai
// this -> local environmant empty object hota hai 


function chai(){
    let username = "mihir"
    console.log(this.username) // undefined btaega kyuki functions ke undr this kisi or chiz internal objects ke upr trigger kr ta hai
}
chai();


//* arrow functions *//

const chai1 = function (){
    let username = "Mihir";
    console.log(this.username)
}
chai1();

const chai2 = (num1,num2) => {
    return num1+num2;
}
console.log(chai2(1,2));

//implicility return
const chai3 = (num1, num2) => num1+num2
console.log(chai3(1,2));

const chai4 = (num1, num2) => (num1+num2)
console.log(chai4(1,2))

const chai5 = (num1,num2) => ({username: "mihir"})
console.log(chai5());


// immediately invoked functions expression (IIFE)
// -> database connection
// global scope ke pollution ko htne ke liye use krte hai 


(function chai(){
    //named iife
    console.log(`DB CONNECTED`)
})();

// 2 iife funcion semi-column likh dete hai
((name)=> {
    // unnamed iife
    console.log(`Db connected Two ${name}`);
})("mihir")



