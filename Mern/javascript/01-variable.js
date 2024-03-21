/* Variables */

// Var -> if we declare var variable then we will declare same variable after the declaration of variable. 

var a=6;
//var a=7;
{
    var a = 7;
    console.log(a);
}
console.log(a);

// let -> if we declare let variable we cannot change the variable after the declaration of variable.

let b=6;
// let b=7;  // identifier has been declared we cannot change 
{
    let b=7;  // in the function scope we can change the variable
    console.log(b);
}
console.log(b);


// const -> const ko change nhi kr skte hai 
const c=8;
{
    const c=10;
    console.log(c);
}
console.log(c);

console.log([a,b,c]);
console.table([a,b,c]);

accountId = 10; // any we can use
console.log(typeof accountId);


let accountState; //undefined
console.log(accountState);


