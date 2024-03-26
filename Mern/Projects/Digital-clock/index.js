const  clock = document.getElementById('clock');



// setinterval -> ap koi bhi method muje de dijiye or interval de dijiye ki kitne interval ke tal muje chalna hai
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());   
    clock.innerHTML = date.toLocaleTimeString(); 
} , 1000)