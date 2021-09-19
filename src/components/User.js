class User {

    constructor(data){
        this.username = data.username
        this.scores = data.scores
        this.id = data.id
    }

    renderUserScores = () => {
        const regex = new RegExp('^CLOSE|^ACCOUNT|^SCORES', 'ig');
        Word.all = Word.all.filter(word => word.word.match(regex))
        api.getUserScores(this.id).then(data => {
            
            this.scores = data.scores

            modal.main.innerHTML = `
            <br><br>
            <h3>Welcome ${this.username}! Here are your scores:</h3>
            <table>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Score</th>
                    <th>Delete?</th>
                </tr>
            </table>`

            for(const [index, data] of this.scores.entries()){
                const score = new Score(data)
                const date = score.created_at.toLocaleString()
                const number = score.score
                const row = document.createElement('tr')

                let rowNumber = index+1
                let deleteButton = new Word(`DELETE${rowNumber}`, "p", `.data-${rowNumber}`, score.deleteScore)
                
                row.innerHTML = `<td>${rowNumber}</td><td>${date}</td><td>${number}</td><td class = "data-${rowNumber}"></td>`
                
                modal.main.querySelector('table').appendChild(row)
                deleteButton.render()

            }
        })
    }

    static handleSubmit = (e, score) => {
        e.preventDefault()
        
        api.findOrCreateUser(e.target.username.value).then((user)  => {
            const newUser = new User(user)
            currentUser = newUser
        }).then(() => score != null ? api.postScore(score, currentUser.id) : null
        ).then(() => currentUser.renderUserScores())
    }
}