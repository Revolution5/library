let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        this._author = author;
    }

    get pages() {
        return this._pages;
    }

    set pages(pages) {
        this._pages = pages;
    }

    get read() {
        return this._read;
    }

    set read(read) {
        this._read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

let bookContainer = document.querySelector(".book-container")

function displayBooks() {
    for(let i = 0; i < myLibrary.length; ++i) {
        //Creating a book "card" for each book in the array
        let book = document.createElement("div");
        book.classList.add("book");

        let titleDisplay = document.createElement("p");
        titleDisplay.textContent = "Title: " + myLibrary[i].title;
        book.appendChild(titleDisplay);

        let authorDisplay = document.createElement("p");
        authorDisplay.textContent = "Author: " + myLibrary[i].author;
        book.appendChild(authorDisplay);

        let pageDisplay = document.createElement("p");
        pageDisplay.textContent = "Page Count: " + myLibrary[i].pages;
        book.appendChild(pageDisplay);

        let readDisplay = document.createElement("p");
        if (myLibrary[i].read == true) {
            readDisplay.textContent = "Read It?: Yes";
        }
        else {
            readDisplay.textContent = "Read It?: No";
        }
        book.appendChild(readDisplay);

        //Toggle read and remove buttons
        let buttons = document.createElement("div");
        buttons.classList.add("buttons");

        let changeReadStatusButton = document.createElement("button");
        changeReadStatusButton.textContent = "Toggle Read";

        changeReadStatusButton.addEventListener("click", function(e) {
            if (myLibrary[i].read == true) {
                readDisplay.textContent = "Read It?: No"
                myLibrary[i].read = false;
            }
            else if (myLibrary[i].read == false) {
                readDisplay.textContent = "Read It?: Yes";
                myLibrary[i].read = true;
            }
        })

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove Book";

        deleteButton.addEventListener("click", function(e) {
            myLibrary.splice(i, 1);
            // event listener does not change index, so have to clear and repopulate the page
            clearPage();
            displayBooks();
        })

        buttons.appendChild(changeReadStatusButton);
        buttons.appendChild(deleteButton);

        book.appendChild(buttons);

        bookContainer.appendChild(book);
    }
}

function showForm() {
    document.querySelector(".pop-up-form").style.display = "block";
    // document.querySelector("html").style.backgroundColor = "rgba(22,22,22,0.5)"
}

function closeForm() {
    document.querySelector(".pop-up-form").style.display = "none";
    // document.querySelector("html").style.backgroundColor = "#e5e7eb";
}

function clearPage() {
    while(bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
    }
}

let userTitle = "";
let userAuthor = "";
let userPages = 0;
let readStatus = false;

let submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function(e) {
    
    userTitle = document.getElementById("title").value;
    userAuthor = document.getElementById("author").value;
    userPages = document.getElementById("pages").value;
    readStatus = document.getElementById("read").checked;

    addBookToLibrary(userTitle, userAuthor, userPages, readStatus);
    //hide the pop-up form, clear any current books on the page, repopulate the page with a new array
    closeForm();
    clearPage();
    displayBooks();
    
})

addBookToLibrary("Example Title", "Example Author", 111, true);

displayBooks();

