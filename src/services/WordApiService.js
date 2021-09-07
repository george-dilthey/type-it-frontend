class WordApiService {

    getWords = () => fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json').then(response => response.json()) 
    
}