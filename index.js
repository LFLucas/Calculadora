buttons = document.querySelectorAll('button')
display = document.querySelector('.display')

buttons.forEach(element => {
    element.addEventListener('click', execute)
});

function execute(event){
    switch(event.target.value){
        case '=':
            display.innerText = eval(display.innerText) || '' 
            break
        case 'C':
            display.innerText = ''
            break
        case '<':
            display.innerText = display.innerText.slice(0, -1)
            break
        default:
            display.innerText += event.target.value
}}

