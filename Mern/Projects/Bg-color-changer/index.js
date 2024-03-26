// generate a random color

const generate_A_RandomColor = function(){
    const hex = "0123456789ABCDEF";
    let color ='#'
    for(let i=0;i<6;i++){
        const randomValue = (Math.floor(Math.random() * 16));
        color += hex[randomValue];
    }
    return color;
}
//console.log(generate_A_RandomColor());


// start changing a color
const start = document.querySelector('#start');
let intervalID;
function BgColor(){
    document.body.style.backgroundColor = generate_A_RandomColor();
}
const startChangingColor = function(){
    if(!intervalID){
        intervalID = setInterval(BgColor,1000);
    }
    console.log("Started Changing a Color")

}
start.addEventListener('click',startChangingColor);



// stop changing a color
const stop = document.querySelector('#stop');
const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
    console.log("Stopped Changing a Color")
}
stop.addEventListener('click',stopChangingColor);