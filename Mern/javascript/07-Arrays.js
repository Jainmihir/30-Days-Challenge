//array
const myArray = [0,1,2,3,4,5];
console.log(myArray[0]);
console.log(myArray[1]);

const myHero = ["mj","jain"]
console.log(myHero[1]);

const myArr2 = new Array(1,2,3);
console.log(myArr2[1]);
console.log(myArr2.length);


// Array Methods :- 

myArr2.push(5); // last index pr value dal dega 
console.log(myArr2);

myArr2.pop(); // last index se value remove krdega 
console.log(myArr2);

myArr2.unshift(9); //first index pr value dal dega 
console.log(myArr2);

myArr2.shift() // first index ki value ko remove kr dega 
console.log(myArr2);


console.log(myArr2.includes(2)); // true search
console.log(myArr2.indexOf(2)); // index ky h 
console.log(myArr2)

const newArr = myArr2.join() // string me convert kr deta hai
console.log(myArr2);
console.log(typeof myArr2);
console.log(newArr);
console.log(typeof newArr);

// slice -> array ki values ko manipulate nhi hoti hai 
console.log("A",myArr2); // A [ 1, 2, 3 ]
const myn1 = myArr2.slice(0,2);  // kh se kha tak ki value print krwni hai
console.log(myn1); // [ 1, 2 ]
console.log("B",myArr2); // B [ 1, 2, 3 ]

// splice -> array ko values ko manipulate kr lete hai 
const myn2 = myArr2.splice(0,2)  // splice me original array ko manipulate kr leta hai 
console.log("C",myArr2); // C [ 3 ]
console.log(myn2); //[ 1, 2 ]

// copies of array
const myMarvelHeros = ["thor","spider-man","Ironman"]
const myDcHeroes = ["superman", "flash"]

// myMarvelHeros.push(myDcHeroes); // usme ek or array add krdega
// console.log(myMarvelHeros)

const allHeros = myMarvelHeros.concat(myDcHeroes);  // ushe array me concat krdega  or return krdega new array
console.log(allHeros);

// spread operator
const allHeros1 = [...myMarvelHeros, ...myDcHeroes] // jb 2 se jhda arrays ko concat krna hoo iske spread operator use krte hai
console.log(allHeros1.sort());


const another_array = [1,2,3,[4,5,6],7,[8,9,[4,6]]];
const real_another_array =  another_array.flat(Infinity); // infintiy ki jghe kitne depth me array ko solve kroo 
console.log(real_another_array);

// check krna or convert krna ho array me 
console.log(Array.isArray("mihir"));
console.log(Array.from("mihir")); // convert krdega array me 

console.log(Array.from({name:"mihir"})) //intersting -> []

let score1 = 2;
let score2 =3;
let score3 = 4;
console.log(Array.of(score1,score2,score3));

