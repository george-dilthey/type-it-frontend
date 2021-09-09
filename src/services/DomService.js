class DomService {

    static renderHome(){
        this.clear()
        main.innerHTML +=  '<div class="intro"></div><h3>Welcome to TypeIt. Type as many words as you can in 60 seconds. Careful though. You only get 5 typos before its GAME OVER. Type "start" to begin.</h3><h3>You can also type "account" or "scores" to access those pages.</h3></div>'
        const startWord = new Word('Start', 'h1', 'main', startGame).render()
        const accountWord = new Word('Account', 'h2', 'nav', account).render()
        const scoresWord = new Word('Scores', 'h2', 'nav', scores).render()  
    }

    static renderGame(){
        this.clear()
        for(const w of Word.all){
            w.rendered = false
        }
    }

    static clear(){
        console.log('cleared')
        main.innerHTML = ""
        nav.innerHTML = ""
        strikesElement.innerHTML = ""
    }
}