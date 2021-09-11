class User {

    constructor(data){
        this.username = data.username
        this.scores = data.scores
        this.id = data.id
    }

    renderUserScores = () => {

        api.getUserScores(this.id).then(data => {
            
            this.scores = data.scores

            modal.main.innerHTML = `
            <br><br>
            <h3>Welcome ${this.username}! Here are your scores:</h3>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Score</th>
                </tr>
            </table>`

            for(const score of this.scores){
                const date = new Date(score.created_at).toLocaleString()
                const number = score.score
                const row = document.createElement('tr')
                row.innerHTML = `<td>${date}</td><td>${number}</td>`
                
                modal.main.querySelector('table').appendChild(row)
            }
        })
    }

}