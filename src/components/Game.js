class Game {
    
    
    constructor(){
        this.turnIndex = 0
        this.strikes = 0   
    }

    start = () => {
       wordApi.getWords().then(data => {
            const arr = Object.keys(data);
            const shuffled = arr.sort(() => 0.5 - Math.random());
            let final = shuffled.slice(0,100)
            let words = final.map(w => new Word(w, 'h1', 'main', this.turn)
            )
            this.words = words
            this.turn()
        }) 
    }

    turn = () => {
        DomService.renderGame()
        let word = this.words[this.turnIndex]
        
        word.game = this
        word.render()

        this.renderScore()
        this.turnIndex++
    }

    renderStrikes = () => {
        let strikes = this.strikes
        
        let arr = [...Array(strikes)]
        strikesElement.innerHTML = ""
        for(const a of arr){
            strikesElement.innerHTML += "X "
        }
        if(strikes >= 5)
            this.gameOver()
    }

    renderScore = () => {
        let score = this.turnIndex
        scoreElement.innerHTML = `<h2>${score}</h2>`

    }

    gameOver = () => {
        this.strikes = 0
        this.turnIndex = 0
        Word.all = []
        DomService.renderHome()
    }

}

