console.log("#Tuts-38: Exercise_No5 - Dictionary API");
// Get word from input
let getWord = document.getElementById('getWord');
let findBtn = document.getElementById('findBtn');
let displayWord = document.getElementById('displayWord')

// Find word defination 
findBtn.addEventListener('click', getWordDefination);

// Function getWordDefination
function getWordDefination(e) {
    // console.log('You have clicked on findBtn');

    let wordDefination = new XMLHttpRequest();

    wordDefination.open("GET", "wordAPI.json", true);

    wordDefination.onprogress = function () {
        console.log('Searching...');
    }

    wordDefination.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);

            let wordStr = "";

            for (let wordText = 0; wordText < obj.length; wordText++) {

                for (let x = 0; x < obj[wordText].word.length; x++) {
                    // console.log("Definition: ", obj[wordText].results[x].definition, "word: ", obj[wordText].word);
                    if (obj[wordText].word === getWord.value) {
                        wordStr += ` <h5 class="card-title">${obj[wordText].word}</h5>
                                    <p class="card-text">Definition: ${obj[wordText].results[x].definition}</p>
                                    <p class="card-text">Part Of Speech: ${obj[wordText].results[x].partOfSpeech}</p>
                                    <p class="card-text">Examples: ${obj[wordText].results[x].examples}</p>
                                    <hr>
                                    `;
                        displayWord.innerHTML = wordStr;
                    }
                    else {
                        displayWord.innerHTML = `Sorry! the <b>${getWord.value}</b> word is not found in dictionary.`;
                    }
                }

            }

        }
        else {
            console.log('Error! Somthing went wrong.')
        }
    }

    wordDefination.send();

    // setTimeout(function(){
    //     getWord.value = "";
    // }, 300);

    console.log('Done..');
    e.preventDefault();

}