console.log("#Tuts-40: Create News website in Javascript");

// Grab the news accordion container
let newsaccordion = document.getElementById('newsaccordion');

// Initilize the news api parameters
let country = 'in';
let category = 'technology';
let sources = 'bbc-news';
let apiKey = 'e86e58a190924b298824bfd6d32d3ee5'; //'82af2ada09624affa080931346017e04';
// let url = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`;
let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

// Create an ajax get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `${url}`, true);

// what to do when onload
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        // Create news templet
        let newsArticles = '';
        articles.forEach(function (element, index) {
            // let news = `<div class="card">
            //                 <div class="card-header" id="heading${index}">
            //                     <h2 class="mb-0 allCards">
            //                         <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
            //                             data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            //                             <b class="text">Hot News: ${index + 1 } </b>${element['title']}
            //                         </button>
            //                     </h2>
            //                 </div>

            //                 <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
            //                     <div class="card-body">${element['content']}. <a href="${element['url']}" target="_blank">Read More</a></div>
            //                 </div>
            //             </div>`;

            let news = `<div class="col-lg-3 allCards">
                            <div class="card my-1">
                                <img src="${element['urlToImage']}" class="card-img-top" alt="...${element['source'].name}">
                                <div class="card-body">
                                    <h5 class="card-title">${element['title']}</h5>
                                    <p class="card-text">${element['description']}</p>
                                    <a href="${element['url']}" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>`;
            newsArticles += news;
            text_truncate(`${element['description']}`);
        });
        newsaccordion.innerHTML = newsArticles;
    }
    else {
        console.log('Some error occured');
    }
}

xhr.send();

// Implementing news search functionality
let searchText = document.getElementById('searchTxt');
searchText.addEventListener("input", function (e) {
    let searchValue = searchText.value.toLowerCase();
    let allCards = document.getElementsByClassName('allCards');
    console.log("input event fired", searchValue);
    // Get news from allCards
    Array.from(allCards).forEach(function (element) {
        let a = element.getElementsByTagName('h5')[0].innerText;
        console.log(a);
        if (a.includes(searchValue)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    });

});


text_truncate = function (str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};
    // Check 9420987447 KIRAN SARODE