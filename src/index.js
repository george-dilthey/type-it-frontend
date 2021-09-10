//fetch("http://localhost:3000/users").then(res=>res.json()).then(data => console.log(data))

// function loginTest (){
//     fetch('http://localhost:3000/login', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({username: 'gdilthey2'}),
//     })
//     .then(response => response.json())
//     .then(data => {
//     console.log('Success:', data);
//     })
//     .catch((error) => {
//     console.error('Error:', error);
//     });
// }

const fillColor = "rgb(255, 137, 18)"
const wordApi = new WordApiService()
const modal = new Modal()

const main = document.querySelector('main')
const menu = document.querySelector('.menu')
const strikesElement = document.querySelector('.strikes h1')
const scoreElement = document.querySelector('.score')



DomService.renderHome()

function scores(){
    console.log("This will render the scores.")
}

//eventListener
document.addEventListener('keydown', (e) => handleType(e.key))


function handleType(key){
    if(key != "Shift"){
        for(word of Word.all.filter(w => w.rendered)){
            let letter = word.letters.find(l => l.html.innerText.toLowerCase() == key.toLowerCase() && l.color == "")

            if(letter && letter.validate()){
                letter.fill()
                word.check()
            } 
            else{
                word.reset()
                word.addStrike()
            }
        }
    }
}