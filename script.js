const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


function addBookToLibrary(title, author, pages, read) {




    const book = new Book(title, author, pages, read);
    
    
    myLibrary.push(book);
};







addBookToLibrary("book1", "some", 222, true);
addBookToLibrary("book2", "some", 333, false);
addBookToLibrary("book3", "some", 444, true);
addBookToLibrary("book4", "some", 555, false);
console.log(myLibrary);


const books = document.querySelector(".books");

for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    
    book.classList.add("book");
    
    const title = document.createElement("h1");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);

    title.textContent = myLibrary[i].title;
    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `Pages: ${myLibrary[i].pages}`;
    read.textContent = `Read: ${myLibrary[i].read}`;

    books.appendChild(book);
};
