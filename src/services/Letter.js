
class Letter {

    constructor(letter){
        this.letter = letter
        this.html = document.createElement('span')
        this.html.innerText = this.letter
        this.html.setAttribute('data-letter', 'true')
    }

    get color(){
        return this.html.style.color
    }

    set color(c){
        this.html.style.color = c
    }

    validate = () => {
        if(this.color == ""){
            if(this.html.previousElementSibling == null || this.html.previousElementSibling.style.color == fillColor){
                return true
            }
        }  
    }

    fill = () => {
        this.html.style.color = fillColor;
    }
    
}