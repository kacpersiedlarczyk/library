const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
        
    myLibrary.push(book);
};



const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault()
});




addBookToLibrary("book1", "some", 222);
addBookToLibrary("book2", "some", 333);
addBookToLibrary("book3", "some", 444);
addBookToLibrary("book4", "some", 555);
// console.log(myLibrary);



for (let i = 0; i < myLibrary.length; i++) {
    const books = document.querySelector(".books");
    
    books.innerHTML += `
        <div class="book">
            <h1>${myLibrary[i].title}</h1>
            <p>Author: ${myLibrary[i].author}</p>
            <p>Pages: ${myLibrary[i].pages}</p>
        </div>
    `;

    // const book = document.createElement("div");
    
    // book.classList.add("book");
    
    // const title = document.createElement("h1");
    // const author = document.createElement("p");
    // const pages = document.createElement("p");
    
    // book.appendChild(title);
    // book.appendChild(author);
    // book.appendChild(pages);

    // title.textContent = myLibrary[i].title;
    // author.textContent = `Author: ${myLibrary[i].author}`;
    // pages.textContent = `Pages: ${myLibrary[i].pages}`;

    // books.appendChild(book);
};