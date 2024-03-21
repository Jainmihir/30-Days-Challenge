if(2==="2"){
    console.log("executed");
}

if(2==2){
    console.log("ha h  ")
}else if(3==2){
    console.log("nhi h ")
}else{
    console.log("kuch bhi nhi hai ")
}

const month = 0
switch(month){
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    default:
        console.log("kuch bhi nhi h ")
        break;
}

//flasy values ->  false , 0, -0, BigINt 0n , "", null , undefined , NAN
// truty values -> "0","false"," ",[],{},function(){}

// nullish coalescing operators (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// console.log(val1)

// ternary opeartors
// condition ? true : false
const ice = 100
ice >=80 ? console.log("yes") : false