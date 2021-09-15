class DomService {

    static renderHome(){
        this.clear()
        this.clearGame()
        main.innerHTML +=  '<div class="instructions"></div><h3>Welcome to TypeIt. Type as many words as you can in 60 seconds. Careful though. You only get 5 typos before its GAME OVER. Type "start" to begin.</h3><h3>You can also type "account" or "scores" to access those pages.</h3></div>'
        const startWord = new Word('Start', 'h1', 'main', new Game().start).render()
        const accountWord = new Word('Account', 'h2', '.menu', this.openAccountModal).render()
        const scoresWord = new Word('Scores', 'h2', '.menu', this.openScoresModal).render()  
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

    static openAccountModal = () =>{
        modal.close()

        if(currentUser){
            currentUser.renderUserScores()
        }

        else {
            modal.main.innerHTML = `
            <br><br>
            <h3>Account</h3>
            <h4>Enter your username to see your past scores:</h4>
            <form>
                <input type="text" id="username" name="username"<br><br>
                <input type="submit" value="Submit">
            </form>`

            modal.main.querySelector("form").addEventListener("submit", (e) =>  User.handleSubmit(e, null))
            modal.main.querySelector('form input').focus();
        }

        modal.open()

    }

    static openGameOverAccountModal = (score) =>{
        console.log(score)
        modal.close()

        modal.main.innerHTML = `
        <br><br>
        <h3>Account</h3>
        <h4>Enter your username to save your score:</h4>
        <form>
            <input type="text" id="username" name="username"<br><br>
            <input type="submit" value="Submit">
        </form>`

        modal.main.querySelector("form").addEventListener("submit", (e) =>  User.handleSubmit(e, score))
        modal.main.querySelector('form input').focus();
        
        modal.open()

    }

    static openScoresModal = () => {
        modal.close()
        Scores.getScores()
        modal.open()
    }

}