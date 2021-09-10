class Account {

    static openModal = () =>{

        modal.main.innerHTML = `
        <br><br>
        <h3>Account</h3>
        <h4>Enter your username to see your past scores:</h4>
        <form>
            <input type="text" id="username" name="username"<br><br>
            <input type="submit" value="Submit">
        </form>`

        modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)

        modal.open()
    }

    static handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.username.value)
    }
}