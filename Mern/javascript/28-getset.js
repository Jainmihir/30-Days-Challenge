class User {
    constructor(name,email){
        this.name = name;
        this.email = email;

    }
    // email is overwrite
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

}

const User1 = new User("mihir","jain@123.com");
console.log(User1.email);