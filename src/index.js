const fillColor = "rgb(255, 137, 18)"
const wordApi = new WordApiService()
const modal = new Modal()

const main = document.querySelector('main')
const menu = document.querySelector('.menu')
const strikesElement = document.querySelector('.strikes h1')
const scoreElement = document.querySelector('.score')



DomService.renderHome()

function scores(){
    console.log("This will render the scores.")
}

//eventListener
document.addEventListener('keydown', (e) => handleType(e.key))


function handleType(key){
    if(key != "Shift"){
        for(word of Word.all.filter(w => w.rendered)){
            let letter = word.letters.find(l => l.html.innerText.toLowerCase() == key.toLowerCase() && l.color == "")

            if(letter && letter.validate()){
                letter.fill()
                word.check()
            } 
            else{
                word.reset()
                word.addStrike()
            }
        }
    }
}