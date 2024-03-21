// for loop


for(let index=0 ; index < 10 ; index++){
    const element = index;
    console.log(element);
}

for( let index = 0; index <=10 ; index++){
    const element = index;
    if(element == 5){
        console.log(`this is element was ${element}`);
    }
    console.log(element);
}

// * 1 to 10 ki Tables * //
for(let i=1;i<=10;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=10;j++){
        //console.log(`inner loop is ${j}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["Mihir","Jain","superman"]
console.log(myArray.length)
for(let i=0;i<myArray.length;i++){
    const element = myArray[i]
    console.log(element)
}

// keywords
// break and continue

for(let i=1;i<=10;i++){
    console.log(i);
    if(i==5){
        break;
    }
    // console.log(`hello`);
}

for(let i=1;i<=10;i++){
    // console.log(i);
    if(i==5){
        continue;
    }
    console.log(`hello ${i}`);
}


// While Loop
let index = 0
while(index <=10){
    console.log(`value of index is ${index}`);
    index = index + 2
}

let arr=0;
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr++;
}

console.log("do while loop")
let score = 0;
do {
    console.log(`score is ${score}`);
    score++;
} while(score<10);
