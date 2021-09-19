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
            this.startTimer()
            this.turn()
        }) 
    }

    turn = () => {
        DomService.clear()
        let word = this.words[this.turnIndex]
        
        word.game = this
        word.render()

        this.renderScore()
        this.turnIndex++
    }

    addStrike = () => {
        this.strikes++
        this.renderStrikes()
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
        Word.all = []
        timerElement.innerHTML = ""
        clearInterval(timer)
        const finalScore = this.turnIndex-1
        
        if(currentUser){
            api.postScore(finalScore, currentUser.id)
        
            modal.main.innerHTML = `
            <br><br>
            <h3>Game Over!</h3>
            <h1>${finalScore} Words Typed</h1>`
            modal.open()
        }
        else{
            DomService.openAccountModal(finalScore)
        }

        this.strikes = 0
        this.turnIndex = 0
    }

    startTimer = () => {
        timerElement.innerHTML = '60'
        let count = 59
        timer = setInterval(() => {
            if(count <= 0){
              clearInterval(timer);
              this.gameOver()
            } else {
              timerElement.innerHTML = count;
            }
            count -= 1;
          }, 1000);
    }  
}

