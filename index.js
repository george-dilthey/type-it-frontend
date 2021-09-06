let word = document.querySelector('h1')
let spans = [...document.querySelectorAll('span')]

function handleType(letter){
    let result = spans.find(span => span.innerText.toLocaleLowerCase() == letter.toLowerCase() && span.style.color == "")
    
    result ? fill(result) : reset()
}

let fill = (e) => {
    if(e.previousElementSibling == null || e.previousElementSibling.style.color == "blue"){
        e.style.color = "blue"
    }          
}

let reset = () => {
    for(const span of spans){
        span.style.color = ""
    }
}

document.addEventListener('keydown', (e) => handleType(e.key))