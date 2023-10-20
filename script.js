const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    displayBooks();
};

const library = document.querySelector("#library");
const form = document.querySelector("#new-book");

function displayBooks() {
    library.innerHTML = "";

    if (!myLibrary.length) {
        library.innerHTML = "<h1>Add a new book!</h1>"
    } else {

        for (let i = 0; i < myLibrary.length; i++) {
            library.innerHTML += `
                <div class="book" data-index="${i}">
                    <h1>${myLibrary[i].title}</h1>
                    <p>Author: ${myLibrary[i].author}</p>
                    <p>Pages: ${myLibrary[i].pages}</p>
                    <button class="remove">Remove</button>
                </div>
            `;
        };

    };
};

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
};

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    
    addBookToLibrary(title, author, pages);
    
    // event.target.reset();
});

library.addEventListener("click", event => {
    const targetParent = event.target.parentElement;

    if (event.target.className === "remove") {
        removeBook(targetParent.dataset.index);
    };
});









// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300);