const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");
const tag = document.querySelector('.tag');


buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            tag.style.color = 'white'
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            tag.style.color = 'blue'
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            tag.style.color = 'white'
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            tag.style.color = 'black'
        }
    })
})