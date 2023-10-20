const library = document.querySelector(".library");
const form = document.querySelector("form");

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

function displayBooks() {
    library.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        library.innerHTML += `
            <div class="book">
                <h1>${myLibrary[i].title}</h1>
                <p>Author: ${myLibrary[i].author}</p>
                <p>Pages: ${myLibrary[i].pages}</p>
                <button class="remove">Remove</button>
            </div>
        `;
    };
};








form.addEventListener("submit", event => {
    event.preventDefault();
    
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value; 
    const pages = document.querySelector("#pages").value; 
    
    addBookToLibrary(title, author, pages);
    
    
    event.target.reset();
});

library.addEventListener("click", event => {
    if (event.target.className === "remove") {
        event.target.parentElement.remove();
    };
});









addBookToLibrary("book1", "some", 222);
addBookToLibrary("book2", "some", 333);
addBookToLibrary("book3", "some", 444);

