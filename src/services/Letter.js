class Letter {

    constructor(letter){
        this.letter = letter
        this.html = document.createElement('span')
        this.html.innerText = this.letter
        this.html.setAttribute('data-letter', 'true')
    }

}