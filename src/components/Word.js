class Word {

    static all = []
    constructor(word, tag, parent, completeFunc){
        this.word = word
        this.tag = tag
        this.parent = parent
        this.completeFunc = completeFunc
        this.rendered = false

        this.letters = word.split("").map(l => new Letter(l))
        this.constructor.all.push(this)
        
    }

    get game(){
        return this._game
    }

    set game(game){
        this._game = game
    }

    render = () => {
        const parent = document.querySelector(this.parent)
        const wordElement = document.createElement(this.tag)
        wordElement.setAttribute('data-word', 'true')
        for(const letter of this.letters){
            wordElement.appendChild(letter.html)
        }
        parent.appendChild(wordElement)
        this.rendered = true
    }

    check = () => {
        let letters = this.letters

        if((letters.find(l => l.color == "") == undefined)){
            setTimeout(() => {this.reset()}, 100)
            this.completeFunc()
        }
    }
    
    reset = () => { 
        for(const letter of this.letters){
            letter.color = ""
        }  
    }

    

    
}