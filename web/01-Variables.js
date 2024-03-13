const accountId = 144553
let accountEmail = "jainsuresh713@gmial.com"
var accountPassword = "1234"
accountCity = "Jaipur"

let accountstate; // undefined 
// accountId = 2 -> const will not changed
accountEmail = "jain" // -> we can change let 
accountPassword= "12"
accountCity = "ds"

// prefer not use var because of issue in block scope and functional scope
// console.log(accountEmail);
console.table([accountEmail,accountPassword,accountCity]);
