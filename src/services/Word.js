class Word {

    constructor(word){
        this.word = word
        this.letters = word.split("").map(l => new Letter(l))
    }

    renderWord = () => {
        const main = document.querySelector('main')
        const wordElement = document.createElement('h1')
        wordElement.setAttribute('data-word', 'true')
        for(const letter of this.letters){
            wordElement.appendChild(letter.html)
        }
        main.appendChild(wordElement)
    }

    static checkWord = () => {
        let letters = w.letters

        if((letters.find(e => e.style.color == "") == undefined))
            console.log("Found a word!")

    } 
}