const body = document.querySelector('body')
const btn = document.querySelector('button')
function dark(){
    if(body.style.backgroundColor == 'black'){
        body.style.backgroundColor = 'white'
    }else{
        body.style.backgroundColor = 'black'
    }
    
}
btn.addEventListener('click',dark)