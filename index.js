let words = [...document.querySelectorAll('h1')]
let spans = [...document.querySelectorAll('span')]

function handleType(letter){
    for(word of words){
        let result = [...word.querySelectorAll('span')].find(span => span.innerText.toLocaleLowerCase() == letter.toLowerCase() && span.style.color == "")
    
        validateSpan(result) ? fill(result) : resetWord(word)
    }
}

let validateSpan = (e) => {
    if(e){
        if(e.style.color == ""){
            if(e.previousElementSibling == null || e.previousElementSibling.style.color == "blue"){
                return true
            }
        }
    } 
}

let fill = (e) => {
    e.style.color = "blue"         
}

let resetWord = (e) => {
    for(const span of [...e.querySelectorAll('span')]){
        span.style.color = ""
    }
}

document.addEventListener('keydown', (e) => handleType(e.key))