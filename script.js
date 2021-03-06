
const langs = {
    'english': 'en',
    'afrikaans': 'af',
    'french': 'fr',
    'greek': 'el',
    'hebrew': 'he',
    'latin': 'la',
    'russian': 'ru',
    'polish': 'pl',
    'italian': 'it'
}
const body = document.querySelector('body');
const listButton = document.querySelector('.list-button')
const searchButton = document.querySelector('.search-button')
const translatedWord = document.createElement('h2');
body.appendChild(translatedWord);
const translationInfo = document.createElement('p');
body.appendChild(translationInfo);

const randomDefinition = () => {
    fetch(`https://api.mymemory.translated.net/get?q=${translationInfo.textContent.split(' ')[1]}&langpair=en|${langs[translationInfo.textContent.split(' ')[3]]}`)
    .then(response => {
        return response.json();
    })
    .then(response => {
        var translatedText = response['responseData']['translatedText'];
        console.log(translatedText);
        translatedWord.textContent = "Translated text: " + translatedText;
    })
    .catch(err => {
       console.error(err);
    });

}

const searchWord = () => {
    try {
        var wordToTranslate = window.prompt("Enter the word that you want to translate: ");
        var toLang = window.prompt("Enter the language you want to translate the text to: ").toLowerCase();
        translationInfo.textContent = `Converted ${wordToTranslate} to ${toLang}`;
        console.log(wordToTranslate);
        console.log(toLang);
        randomDefinition();
    } catch (err){
        console.error(err);
    }

}

const listLangs = () => {
    try {
        console.log(langs);
        var listLang = Object.keys(langs).join(', ');
        console.log(listLang);
        translationInfo.textContent = `This converter, currently only converts english words to other languages.
Following languages are supported: ${listLang}\n`;
    } catch (err){
        console.error(err);
    }

}

searchButton.addEventListener('click', function(){
    searchWord();
})

listButton.addEventListener('click', function(){
    listLangs();
})