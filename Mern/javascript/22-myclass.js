// es^6 ke baad hora h yeh sb 

class User {
    // ek defalut contrutor called hota hamse jb new object create hota hai 
    constructor (username,email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `The Encrypted password is :- ${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}
const chai = new User("chai","mihi","123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function UserTwo(username,email,password) {
    this.email = email;
    this.username = username;
    this.password = password;
}

UserTwo.prototype.encryptPassword = function(){
    return `The Encrypted password is :- ${this.password}abc`;
}

const tea = new UserTwo("chai","mihi","123");
console.log(tea);
console.log(tea.encryptPassword());