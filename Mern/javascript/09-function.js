
function sayMyName() {
    console.log("mihir")
    console.log("jain")
}
sayMyName // reference
sayMyName() // brackets ke sath function call krte hai 



function addTwoNumbers(number1 , number2) {
    console.log(number1+number2);
}
addTwoNumbers(); // NAN because we cannot pass in arguments
addTwoNumbers(1,2);//3

function multiplyTwoNumbers(number1, number2){
    return (number1*number2)    
}
const result = multiplyTwoNumbers(1,2)
console.log("Result :", result);



function subtractTwoNumbers(number1, number2){
    if(!number1 && !number2){ //undefined
        console.log("Enter the numbers ")
        return 
    }
    const result = number1 - number2
    return `After subtraction is ${result}`
}
const answer = subtractTwoNumbers(2,1);
console.log(answer);


// deafult value
function userName(name = "mihir"){
    console.log(name);
}
userName("jain")

// multiple values
function calculateCartPrice(...num1){ //rest operators
    return num1 
}
console.log(calculateCartPrice(1,2,3)) // array ki form mil jayegi values

function calci(val1, val2 , ...num2){
    return num2
}

console.log(calci(1,2,3,4));


const obj = {
    name : "Mihir",
    price : 200
}

function handleObjects(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObjects(obj)
handleObjects({
    name : "mihir",
    price : 399
})

const newArray = [1,2,3]
function returnSecondValue(getArray){
    return getArray[2];
}
console.log(returnSecondValue(newArray))
console.log(returnSecondValue([1,2,2]));

//scopes 
function add(){
    const username = "Mihir"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website) //-> error becAUSE WE can not print this outside block 
    two()
}
add()

//* interesting *//

console.log(addone(5));
function addone(num) {
    return num+1
}

addtwo() // declare the function in variable but we cannot access after the declaration of function
const addtwo = function (num){
    return num+2
}





