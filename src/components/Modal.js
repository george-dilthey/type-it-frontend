class Modal {

    constructor (){
        
    }

    get modal(){
        return document.querySelector("#modal")
    }

    open = () => {
        this.modal.style.display = "block"
        new Word('CLOSE', 'h3', 'div.modal-content span.close', this.close).render()
    }
    
    close = () => {
        this.modal.style.display = "none"
        DomService.renderHome()
    }
}