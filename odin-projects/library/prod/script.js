const button = document.querySelector("#new-book");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  const title = prompt("Enter the title");
  const author = prompt("Enter the author");
  const pages = prompt("Enter the pages");

  const usersBook = new Book(title, author, pages);
  myLibrary.push(usersBook);
  console.log(myLibrary);
}

button.addEventListener("click", addBookToLibrary);
