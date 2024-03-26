import fetch from "node-fetch";
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // db calls , cryptogrpahy , network
    setTimeout(function(){
        console.log('Async Task is complete ');
        resolve();
    }, 1000);

});

promiseOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task two');
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 is complete");
})


const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Mihir" , email : "chai@example.com"});
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})


const PromiseFour = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "MihirJain" ,Password : "123"});
        }else{
            reject('error something went wrong');
        }
    },1000)
})
PromiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The Promise is either resolved or rejected"));


const PromiseFive =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "MihirJain" ,Password : "123"});
        }else{
            reject('error JS went wrong');
        }
    },1000)

});
// promise ek object hai

// async await me apn wait krte uske aage nhi baadte hai
async function consumePromiseFive(){
    try {
    const response = await PromiseFive;
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch(error){
//         console.log("E :",error);
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))