class Scores {
    
    

    static getScores = () => {
        api.getScores().then(scores => this.renderScores(scores))
    }

    static renderScores = (scores) => {
        
        modal.main.innerHTML = `
        <br><br>
        <h3>High Scores:</h3>
        <table>
            <tr>
                <th>User</th>
                <th>Date</th>
                <th>Score</th>
            </tr>
        </table>`

        for(const score of scores){
            const user = score.user.username
            const date = new Date(score.created_at).toLocaleString()
            const number = score.score
            const row = document.createElement('tr')
            row.innerHTML = `<td>${user}</td><td>${date}</td><td>${number}</td>`
            
            modal.main.querySelector('table').appendChild(row)
        }
    }

}