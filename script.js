let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    let bookContainer = document.querySelector(".book-container")
    for(let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.classList.add("book");

        let authorDisplay = document.createElement("p");
        authorDisplay.textContent = "Author: " + myLibrary[i].author;
        book.appendChild(authorDisplay);

        let titleDisplay = document.createElement("p");
        titleDisplay.textContent = "Title: " + myLibrary[i].title;
        book.appendChild(titleDisplay);

        let pageDisplay = document.createElement("p");
        pageDisplay.textContent = "Page Count: " + myLibrary [i].pages;
        book.appendChild(pageDisplay);

        bookContainer.appendChild(book);
    }
}

addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("a", "bc", 111, true);
addBookToLibrary("a2", "bd", 111, true);
addBookToLibrary("aee", "be", 111, true);
addBookToLibrary("af", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("a", "bc", 111, true);
addBookToLibrary("a2", "bd", 111, true);
addBookToLibrary("aee", "be", 111, true);
addBookToLibrary("af", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("a", "bc", 111, true);
addBookToLibrary("a2", "bd", 111, true);
addBookToLibrary("aee", "be", 111, true);
addBookToLibrary("af", "b", 111, true);
addBookToLibrary("ac", "b", 111, true);
addBookToLibrary("a", "bc", 111, true);
addBookToLibrary("a2", "bd", 111, true);
addBookToLibrary("aee", "be", 111, true);
addBookToLibrary("af", "b", 111, true);

displayBooks();