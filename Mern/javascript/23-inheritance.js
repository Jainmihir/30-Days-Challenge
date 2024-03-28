class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username); // directly access kr lega parent class ko
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course has been added ${this.username}`);
    }
}


const chai= new Teacher("mihir","mihi@","123");
chai.addCourse(); 
chai.logMe();


const masalaChai = new User("mii");
// masalaChai.addCourse(); //iske pass access nhi kyuki parent class ka hai yeh
masalaChai.logMe();


// console.log(masalaChai === chai);  // false
// console.log(chai === Teacher); // false

console.log(chai instanceof Teacher);
console.log(chai instanceof User);