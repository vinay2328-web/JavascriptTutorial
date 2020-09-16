console.log('#Tuts-45: Exersice No. 5 - Word API Solution');

// Create myJson
const myJson = `{
    "word": "honest",
    "results": [
      {
        "definition": "not disposed to cheat or defraud; not deceptive or fraudulent",
        "partOfSpeech": "adjective",
        "synonyms": [
          "honorable"
        ],
        "also": [
          "honorable",
          "honourable",
          "ingenuous",
          "trustworthy",
          "direct",
          "echt",
          "genuine",
          "straight",
          "true",
          "trusty",
          "artless",
          "sincere",
          "square"
        ],
        "similarTo": [
          "downright"
        ],
        "antonyms": [
          "dishonest"
        ],
        "derivation": [
          "honestness"
        ],
        "examples": [
          "honest lawyers",
          "honest reporting"
        ]
      },
      {
        "definition": "not forged",
        "partOfSpeech": "adjective",
        "synonyms": [
          "good"
        ],
        "similarTo": [
          "genuine",
          "echt"
        ]
      },
      {
        "definition": "gained or earned without cheating or stealing",
        "partOfSpeech": "adjective",
        "synonyms": [
          "fair"
        ],
        "similarTo": [
          "just",
          "equitable"
        ],
        "examples": [
          "an honest wage"
        ]
      },
      {
        "definition": "worthy of being depended on",
        "partOfSpeech": "adjective",
        "synonyms": [
          "dependable",
          "reliable",
          "true"
        ],
        "similarTo": [
          "trusty",
          "trustworthy"
        ],
        "derivation": [
          "honestness"
        ],
        "examples": [
          "an honest working stiff"
        ]
      },
      {
        "definition": "marked by truth",
        "partOfSpeech": "adjective",
        "similarTo": [
          "true",
          "truthful"
        ],
        "derivation": [
          "honestness"
        ],
        "examples": [
          "gave honest answers",
          "honest reporting"
        ]
      },
      {
        "definition": "without dissimulation; frank",
        "partOfSpeech": "adjective",
        "similarTo": [
          "sincere"
        ],
        "derivation": [
          "honestness"
        ],
        "examples": [
          "my honest opinion"
        ]
      },
      {
        "definition": "without pretensions",
        "partOfSpeech": "adjective",
        "similarTo": [
          "unpretentious"
        ],
        "examples": [
          "worked at an honest trade",
          "good honest food"
        ]
      }
    ],
    "syllables": {
      "count": 2,
      "list": [
        "hon",
        "est"
      ]
    },
    "pronunciation": {
      "all": "'ɑnɪst"
    },
    "frequency": 4.81
  }`;

  // Parse the myJson object

  let myObj = JSON.parse(myJson);
  console.log('This is myObj: ', myObj);

  // Take a results from myObj
  let myResults = myObj['results'];
//   console.log('The results in myObj are: ', myResults);

// Find word button
let getResults = document.getElementById('getResults');

// Display word card
let displayWord = document.getElementById('displayDef');

// Create click event for getResults button
getResults.addEventListener('click', ()=> {
    // console.log('You have clicked on Find word button');
    // #Solution 1 =======================================
    // let wordStr = '';
    // myResults.forEach(element => {
    //     // console.log(element);
    //     let str = `<h5 class="card-title">${myObj['word'].toUpperCase()}</h5>
    //                <p class="card-text">Definition: ${element['definition']}</p>
    //                <hr>`;
    //     wordStr += str;
    // });
    // displayWord.innerHTML = wordStr;
    // ==================================================

    // #Solution 2
    showDefinition();
});

let showDefinition = () => {
    console.log('We are in showDefinition()');
    let wordStr = "";
    myResults.forEach(element => {
        let str = `<li class="list-group-item">${element['definition']}</li>`;
        wordStr += str;
    });
    displayWord.innerHTML = wordStr;
}
