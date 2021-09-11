class Account {

    static openModal = () =>{
        modal.close()

        if(currentUser){
            console.log("user found!")
            currentUser.renderScores()
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

            modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
            modal.main.querySelector('form input').focus();
        }

        modal.open()

    }

    static handleSubmit = (e) => {
        e.preventDefault()
        
        api.findOrCreateUser(e.target.username.value).then((user)  => {
            const newUser = new User(user)
            newUser.renderScores()
            currentUser = newUser
        })
        

    }
}