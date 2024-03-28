// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); // same hee value hee ayegi change nhi hogi

// PI ki value change hee nhi hoo skti toh usko change krenge apn

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

// const newobj = Object.create(null);

const chai =  {
    name : 'Mihir Jain',
    price : 250,
    order : function(){
        console.log("chai nhi bani ");
    }

}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai)); // undefined
console.log(Object.getOwnPropertyDescriptor(chai,"name")); // all the properties of name has been Printed

Object.defineProperty(chai,'name', {
    writable : false,
    enumerable : false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }  
}

