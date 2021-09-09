const fillColor = "rgb(255, 137, 18)"
const wordApi = new WordApiService()
const main = document.querySelector('main')
const nav = document.querySelector('nav')
const strikesElement = document.querySelector('.strikes h1')



DomService.renderHome()


//temp functions
function startGame(){
    const game = new Game().start()
    console.log("This will start the game!")
}

function account(){
    console.log("This will render the account stuff")
}

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