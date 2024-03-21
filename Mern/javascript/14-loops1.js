// filters
const coding = ["js","c++","ruby","go"]

// for each kuch bhi return nhi krta hai bs undefined return krdeta hai

const values = coding.forEach( (item) => {
    // console.log(item)
    return item
})
// console.log(values)


const myNums = [1,2,3,4,5,6]

const newNums = myNums.filter( (num) => num > 1)
console.log(newNums)

const newNum = []
myNums.forEach((num) => {
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum)

const books = [
    {},{},{},{}
]
const userBooks = books.filter( (bk) => { 
    return bk.genre === 'History'
})
console.log(userBooks)

// maps 
const number = myNums.map( (num) => num+10 )
console.log(number)
const new1 = myNums
    .map((num) => (num*10))
    .map((num) => num +1)
    .filter( (num) => num >= 40)
console.log(new1)


// reduce

const my = [1,2,3]
const mytotol = my.reduce(function (acc,currval) {
    console.log(`acc ${acc} and currval ${currval}`);
    return acc + currval
}, 0)
console.log(mytotol)
const mytotal = my.reduce((acc,currval) =>acc + currval ,0)
console.log(mytotal)

const obj22 = [
    {
        itemname : 1
    },
    {
        itemname : 1
    },
    {
        itemname : 1
    }
]
const price = obj22.reduce((acc,currval) => acc + currval.itemname ,0 )
console.log(price)

