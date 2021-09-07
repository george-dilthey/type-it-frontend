const fillColor = "rgb(255, 137, 18)"


const hello = new Word("hello")
hello.render()

const hand = new Word('hand')
hand.render()

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

document.addEventListener('keydown', (e) => handleType(e.key))