// document.getElementById('owl').onclick = function(){
//     alert('own clicked');
// }



// document.getElementById('images').addEventListener('click', function(e){
//     console.log(`clicked inside the ul`);
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log(`Owl Clicked`);
//     e.stopPropagation(); // bubbling na hoo  only owl clicked hoga upr ke element pr nhi jayega 
// }, false)


// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault(); // prevent default means isme hee rahega
//     e.stopPropagation();
//     console.log(`Google Clicked`);
// },false)
// # event propagation
// event capturing -> true -> top to bottom
// event bubbling -> false -> bottom to top
// false parameter by default hota hai


// type, typestamp , preventdefault 
// target , toElement , srcElement , currentTarget
// clientx , clicky , screenX , screenY
// atlkey , ctrlkey , shiftkey , keyCode


//attachEvent() // internal explore me chalne ke liye 
// jQuery() // .on event listner

const Images = document.querySelector('#images').addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    // removeIt.parentNode.removeChild(removeIt);
},false);