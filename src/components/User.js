class User {

    constructor(data){
        this.username = data.username
        this.scores = data.scores
    }

    renderScores = () =>{
        console.log('This will render the scores!')
    }

}