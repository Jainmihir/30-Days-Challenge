// objects literals
// objects -> key value

const mySym = Symbol("key")

const Jsuser = {
    name :  "Mihir",
    age : 23,
    [mySym] : "mykey1",
    email : "jainsuresh713@gmail.com" ,
    isloggedIn : false,
    lastloginDays : [ "Monday" , "sunday"]    
}

console.log(Jsuser.age)
console.log(Jsuser["email"])
console.log(Jsuser[mySym]);

Jsuser.email="chatgpt@gmail.com"
console.log(Jsuser["email"])


Jsuser.greeting = function(){
    console.log("Hello Js User")
}
console.log(Jsuser.greeting());

Jsuser.greetingTwo = function() {
    console.log(`Hi This is ${this.name}`)
}
console.log(Jsuser.greetingTwo())

// if we lock the value of js user and can't be change by anyone
Object.freeze(Jsuser)

Jsuser.email="chatgpt@gmail.com"
console.log(Jsuser["email"])

console.log(Jsuser);

console.log(Jsuser.age, Jsuser.name);

// single tone -> jb construtor se banate hai 
//Object.create()

// const tinderUser = {} Non single tone  object

const tinderUser = new Object()  // single tone

tinderUser.id  = "123"
tinderUser.name = "mihir"

console.log(tinderUser)

const regularUser= {
    email : "mihir@gmail.com",
    fullname :  {
        userfullname : {
            firstname : "mihir",
            lastname : "jain"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

// optional chaning
// console.log(regularUser.fullname?.userfullname.firstname)

// merging the objects

const obj1 ={
    1:"a",
    2:"b",
}
const obj2 ={
    3:"c",
    4:"d"
}

const obj3 = {obj1 , obj2} // yeh nhi krte isme object ke bject ataa hai 
console.log(obj3)

const obj4 = Object.assign(obj1 , obj2) // yeh bhi shi hai 
console.log(obj4)

const obj5 = Object.assign({} , obj1 , obj2) // yeh bhi shi hai documentation ke ispse asee hee hai {} -> target lete hai , source baki saare obejcts 
console.log(obj5)

const obj6 = {...obj1 , ...obj2};
console.log(obj6)

const users = [
    {
        id:1,
        email : "mihir"
    },
    {

    },
    {
        id:2,
        email : "jain"
    }
]
console.log(users[1].email);

console.log(tinderUser)
console.log(Object.keys(tinderUser)); // saari keys
console.log(Object.values(tinderUser)); // saari values
console.log(Object.entries(tinderUser)); //saari entries
console.log(tinderUser.hasOwnProperty('name')); // yeh property hai ky

// destructuring

const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "mihir"
}

//course.courseInstructor  // agr teen baar print krwna h toh baar baar likhna padega

const {courseInstructor : instrutor} = course
console.log(instrutor)





