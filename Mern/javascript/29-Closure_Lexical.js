//  function init(){
//     let name = "Mihir";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
//     }
// init();


// lexixal scoping => outer funtion ka access milta h inner function ko
function outer(){
    let username = "mihir";
    function inner(){
        console.log("inner",username);
    }
    inner();
}
outer();
// console.log("outer",username)

// closure 
function makeFunc(){
    const name = "Mihir";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc();

