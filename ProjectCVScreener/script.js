console.log('#Tuts-55: Project on CV screener in Javascript');
// Create CV data

const data = [
    {
        name: 'Nita Yende',
        age: 28,
        city: 'Aurangabad',
        language: 'Javascript',
        framwork: 'Angular',
        image: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        name: 'Rohit Sharma',
        age: 27,
        city: 'Kolkata',
        language: 'Python',
        framwork: 'Django',
        image: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
        name: 'Riya Pandey',
        age: 22,
        city: 'Patana',
        language: 'Go',
        framwork: 'Go Framwork',
        image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
        name: 'Vinay Pathrikar',
        age: 28,
        city: 'Aurangabad',
        language: 'Javascript - React/Redux/Hooks',
        framwork: 'React Js',
        image: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
        name: 'Anjali Patil',
        age: 30,
        city: 'Pune',
        language: '.Net',
        framwork: 'C#, VB.Net',
        image: "https://randomuser.me/api/portraits/women/14.jpg"
    }
];

//CV Iterators

function cvIterators(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}

const candidate = cvIterators(data);
nextProfile();
// Next button listener
const nxtBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextProfile);

function nextProfile() {
    let currentCandidate = candidate.next().value;
    let cardProfile = document.getElementById('cardProfile');

    if (currentCandidate != undefined) {
        let cvProfiles = `<div class="card-body">
                            <img src=${currentCandidate.image} style="width: 300px; height: 300px;" alt="...">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                                <li class="list-group-item">Uses ${currentCandidate.framwork} framework</li>
                            </ul>
                        </div>`;

        cardProfile.innerHTML = cvProfiles;

    }
    else {
        alert('You are done with all profiles.');
        window.location.reload();
    }
}