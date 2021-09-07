const fillColor = "rgb(255, 137, 18)"


const start = new Word('Start', 'h1', 'main', log).render()
const accountWord = new Word('Account', 'h2', 'nav', account).render()
const scoresWord = new Word('Scores', 'h2', 'nav', account).render()

function handleType(key){
    for(word of Word.all){
        let letter = word.letters.find(l => l.html.innerText.toLowerCase() == key.toLowerCase() && l.color == "")

        if(letter && letter.validate()){
            letter.fill()
            word.check()
        } 
        else{
            word.reset()
        }
    }
}

function log(){
    console.log("This means the word completed!")
}

function account(){
    console.log("This will render the account stuff")
}

function scores(){
    console.log("This will render the scores.")
}

document.addEventListener('keydown', (e) => handleType(e.key))