const test = new Word("test")
test.renderWord()

let words = [...document.querySelectorAll('h1')]

function handleType(key){
    for(word of words){
        let letter = [...word.querySelectorAll('span')].find(span => span.innerText.toLocaleLowerCase() == key.toLowerCase() && span.style.color == "")
    
        if(validateLetter(letter)){
            fill(letter)
            checkWord(word)
        } 
        else{
            resetWord(word)
        }
    }
}

let validateLetter = (e) => {
    if(e){
        if(e.style.color == ""){
            if(e.previousElementSibling == null || e.previousElementSibling.style.color == "blue"){
                return true
            }
        }
    } 
}

let fill = (e) => {
    e.style.color = "blue";
}

let resetWord = (w) => {
    for(const span of [...w.querySelectorAll('span')]){
        span.style.color = ""
    }
}

let checkWord = (w) => {
    let letters = [...w.querySelectorAll('span')]

    if((letters.find(e => e.style.color == "") == undefined))
        console.log("Found a word!")
}

document.addEventListener('keydown', (e) => handleType(e.key))