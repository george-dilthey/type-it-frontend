class DomService {

    static renderHome(){
        this.clear()
        this.clearGame()
        main.innerHTML +=  '<div class="instructions"></div><h3>Welcome to TypeIt. Type as many words as you can in 60 seconds. Careful though. You only get 5 typos before its GAME OVER. Type "start" to begin.</h3><h3>You can also type "account" or "scores" to access those pages.</h3></div>'
        const startWord = new Word('Start', 'h1', 'main', new Game().start).render()
        const accountWord = new Word('Account', 'h2', '.menu', Account.openModal).render()
        const scoresWord = new Word('Scores', 'h2', '.menu', scores).render()  
    }

    static renderGame(){
        this.clear()
        
    }

    static clear(){
        main.innerHTML = ""
        menu.innerHTML = ""
        document.querySelector('div.modal-content span.close').innerHTML = ""
        for(const w of Word.all){
            w.rendered = false
        }
    }

    static clearGame(){
        strikesElement.innerHTML = ""
        scoreElement.innerHTML = ""
    }
}