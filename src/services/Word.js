class Word {

    static all = []
    constructor(word){
        this.word = word
        this.letters = word.split("").map(l => new Letter(l))
        this.constructor.all.push(this)
    }

    render = () => {
        const main = document.querySelector('main')
        const wordElement = document.createElement('h1')
        wordElement.setAttribute('data-word', 'true')
        for(const letter of this.letters){
            wordElement.appendChild(letter.html)
        }
        main.appendChild(wordElement)
    }

     check = () => {
        let letters = this.letters

        if((letters.find(l => l.color == "") == undefined))
            console.log("Found a word!")
    }
    
    reset = () => {
        for(const letter of this.letters){
            letter.color = ""
        }
    }
}