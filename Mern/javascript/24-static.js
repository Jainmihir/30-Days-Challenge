class User{
    constructor(name){
        this.name = name;
    }
    logMe(){
        console.log(`username is ${this.name}`)
    }
    static createId(){ // static ka mtlb or kisi ko dusre ko access nhi dena chatha
        return `123`;
    }
}
const Mihir = new User("mihir");
console.log(Mihir);
// console.log(Mihir.createId());

class Teacher extends User{
    constructor(name,email){
        super(name) // yeh this, call dono te the 
        this.email = email
    }
}

const iphone = new Teacher("iphone","jain@");
console.log(iphone);
console.log(iphone.logMe());
// console.log(iphone.createId()); // yeh kisi ko bhi access nhi krna de rha 