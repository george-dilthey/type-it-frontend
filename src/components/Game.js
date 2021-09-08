class Game {
    
    constructor(){
        this.turnIndex = 0   
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
        const main = document.querySelector('main')
        main.innerHTML = ""
        this.words[this.turnIndex].render()
        this.turnIndex ++
    }

}

