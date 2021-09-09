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
            let words = final.map(w => new Word(w, 'h1', 'main', this.turn))
            this.words = words
            this.turn()
        }) 
    }

    turn = () => {
        DomService.renderGame()
        let word = this.words[this.turnIndex]
        
        word.game = this
        word.render()

        this.turnIndex++
    }

    renderStrikes = () => {
        let strikes = this.strikes
        let arr = [...Array(strikes)]
        let strikeElement = document.querySelector('.strikes h1')
        strikeElement.innerHTML = ""
        for(const a of arr){
            strikeElement.innerHTML += "X "
        }
    }

}

