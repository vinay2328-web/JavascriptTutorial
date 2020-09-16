console.log("Tuts-32: Assignment - Implementing Library Class in Javascript");
// Implement class Book
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

    inserLocalStorage(book){
        let bookStoreObj;
        let bookStore = localStorage.getItem("bookStore");
        if(bookStore == null){
            bookStoreObj = [];
        }
        else {
            bookStoreObj = JSON.parse(bookStore);
        }
        bookStoreObj.push(book);
        localStorage.setItem("bookStore", JSON.stringify(bookStoreObj));
    }
}

// Implement class Display
class Display {
    // Implement add function
    add() {
        let bookStoreObj;
        let bookStore = localStorage.getItem("bookStore");
        if(bookStore == null){
            bookStoreObj = [];
        }
        else {
            bookStoreObj = JSON.parse(bookStore);
        }

        // Implement the table UI
        let uiTable = "";
        bookStoreObj.forEach(function(book, index){
            uiTable += `<tr>
                            <td>${index + 1}</td>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            <td><button  id="${index}" onclick="display.deleteBook(this.id)" class="btn btn-outline-danger my-2 my-sm-0" type="submit">Delete</button></td>
                        </tr>`;
        });

        // Check whether the book store is empty or not
        let uiTableBody = document.getElementById("tableBody");
        if(bookStoreObj.length != 0){
            uiTableBody.innerHTML = uiTable;
        }
        else {
            uiTableBody.innerHTML = `Sorry! You do not have any book in your store.`;
        }
    }

    // Implement deleteBook function
    deleteBook(index){
        let bookStoreObj;
        let bookStore = localStorage.getItem("bookStore");
        if(bookStore == null){
            bookStoreObj = [];
        }
        else {
            bookStoreObj = JSON.parse(bookStore);
        }

        bookStoreObj.splice(index, 1);
        localStorage.setItem("bookStore", JSON.stringify(bookStoreObj));
        display.add();
    }

    // Implement clear function
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    // Implement show message function
    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;

        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    }

    // Implement validate function
    validate(book) {
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }
        else {
            return true;
        }
    }

}
// Implement Add Book function
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

// get Display object
let display = new Display();

// Display table UI
display.add();

// Implement Library Form sumbit function
function libraryFormSubmit(e) {
    // get book name and author input value
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    // get type input value
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    // get type input
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    // console.log(name, author, type);

    // get Book object
    let book = new Book(name, author, type);
    // console.log("Book: ", book);

    // Implement or add book to your book store function
    if(display.validate(book)){
        let bookList = new Book();
        bookList.inserLocalStorage(book);
        display.add();
        display.show("success", "Your book has been successfully added.");
        display.clear();
    }
    else {
        display.show("danger", "Sorry! you can not add this book.")
    }

    e.preventDefault();
}