let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    let bookContainer = document.querySelector(".book-container")
    for(let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.classList.add("book");

        let titleDisplay = document.createElement("p");
        titleDisplay.textContent = "Title: " + myLibrary[i].title;
        book.appendChild(titleDisplay);

        let authorDisplay = document.createElement("p");
        authorDisplay.textContent = "Author: " + myLibrary[i].author;
        book.appendChild(authorDisplay);

        let pageDisplay = document.createElement("p");
        pageDisplay.textContent = "Page Count: " + myLibrary [i].pages;
        book.appendChild(pageDisplay);

        bookContainer.appendChild(book);
    }
}

function showForm() {
    document.querySelector(".pop-up-form").style.display = "block";
    document.querySelector("*").style.backgroundColor = "rgba(22,22,22,0.5)"
}

function closeForm() {
    document.querySelector(".pop-up-form").style.display = "none";
    document.querySelector("*").style.backgroundColor = "green";
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function(e) {
    let userAuthor = document.querySelector("#author");
    let userTitle = document.querySelector("#title");
    let userPages = document.querySelector("#pages");

    addBookToLibrary(userTitle, userAuthor, userPages, true);
    location.reload();
})





addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);


displayBooks();