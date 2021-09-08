class Game {
    
    constructor(){
        
    }

    static getWords = () => {
       wordApi.getWords().then(data => {
            const arr = Object.keys(data);
            const shuffled = arr.sort(() => 0.5 - Math.random());
            let final = shuffled.slice(0,100)
            let words = final.map(w => new Word(w, 'h1', 'main', this.nextTurn))
            this.start(words)
        }) 
    }

    static start = (words) => {
        const main = document.querySelector('main')
        main.innerHTML = ""
        for(word of words){
            this.turn(word)
        }
    }

}

