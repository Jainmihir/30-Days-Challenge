function SetUsername (username) {
    // complex db calls
    this.username = username;
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this,username); // refernced hold krne ke liye call use hota  and this ka refence dete hee set username ka bhi context mil jayega
    this.email = email
    this.password = password 
}

const name = new createUser("chai","chai@","123");
console.log(name);
