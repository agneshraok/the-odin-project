const button = document.querySelector("#new-book");
const buttonContainer = document.querySelector("#button-container");
const container = document.querySelector("#container");
let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function displayBook() {
  container.innerHTML = "";

  for (const book of myLibrary) {
    const card = document.createElement("div");
    card.setAttribute("id", `book-${myLibrary.indexOf(book)}`);
    card.setAttribute(
      "style",
      "height: 300px; width: 300px; border-radius: 10px"
    );

    card.innerHTML = `<div>${book.title}</div><div>${book.author}</div><div>${book.pages}</div>`;

    container.appendChild(card);
  }
}

function addBookToLibrary() {
  const title = prompt("Enter the title");
  const author = prompt("Enter the author");
  const pages = prompt("Enter the pages");

  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  console.log(myLibrary);

  displayBook();
}

button.addEventListener("click", addBookToLibrary);

//change background color on mouse hover over add book button
button.addEventListener("mouseenter", () => {
  button.setAttribute("style", "background-color: greenyellow");
});
buttonContainer.addEventListener("mouseleave", () =>
  button.setAttribute("style", "background-color: white")
);
