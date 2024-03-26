const form = document.querySelector('form')
const weightSize = document.querySelector('.weight-guide')
// console.log(weightSize.children);
// console.log(weightSize.children[1].innerHTML);
// this use case  will give you empty weight
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit' , function (e) {
    e.preventDefault();
    const height =  parseInt(document.querySelector('#height').value);
    const weight =  parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height === "" || height < 0 || isNaN(height) ){
        result.innerHTML = `Please Select A Valid Height ${height}`; 
    }else if(weight=="" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Select A Valid Weight ${weight}`; 
    }else {
        const answer = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        result.innerHTML = `<span> ${answer} </span>`;
        if(answer < 18.6){
            weightSize.children[1].style.color = "yellow"
        }else if(answer >= 18.6 && answer <= 24.9){
            weightSize.children[2].style.color = "yellow"
        }else{
            weightSize.children[3].style.color = "yellow"
        }
    }
})