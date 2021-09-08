const fillColor = "rgb(255, 137, 18)"
const wordApi = new WordApiService()

const startWord = new Word('Start', 'h1', 'main', startGame).render()
const accountWord = new Word('Account', 'h2', 'nav', account).render()
const scoresWord = new Word('Scores', 'h2', 'nav', scores).render()


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
}