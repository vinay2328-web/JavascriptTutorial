console.log("#Tuts-36: Exercise -  4 | Solution for tuts-32");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

// Implement library class
class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {}
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });

    }

    issueBook(bookname, user){
        if(this.issuedBooks[bookname] == undefined){
            this.issuedBooks[bookname] = user;
        }
        else {
            console.log("This book is already issued!");
        }

    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}

let tinuLib = new Library(["INDIA - 1947", "The Love Story", "Spy - The Agent"]);
console.log("tinuLib: ", tinuLib);