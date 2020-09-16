console.log('#Tuts-21: Create Magic Notes with plan JavaScript');
showNotes();
// Add Note
let addBtn = document.getElementById('addNotes');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let addUser = document.getElementById('addUser');
    let notes = localStorage.getItem("notes");
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let myObj = {
        user: addUser.value,
        title: addTitle.value,
        text: addTxt.value,
        date: date.getDate(),
        month: month,
        year: year
    }
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addUser.value = "";
    addTitle.value = "";
    addTxt.value = "";
    showNotes();
});
//Function to show notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    // Sorting notes by user name
    notesObj.sort(function(a, b){
        return a.user.localeCompare(b.user);
    });
    // Creating notes template
    let html = "";
    notesObj.forEach(function (element, index) {
        
        html += `
        <div class="notesCard">
            <h3 id="addUser">${element.user}</h3>
            <h2 id="addTitle">${element.title}</h2>
            <p id="addTxt">${element.text}</p>
            <p id="getDateTime">${element.date} / ${element.month} / ${element.year}</p>
        </div>
        `;
    });
    
    let myNotes = document.getElementById('notes');
    if(notesObj.lenght != 0){
        myNotes.innerHTML = html;
    }
    else {
        myNotes.innerHTML = `Nothing to show! Please add note.`;
    }
}

