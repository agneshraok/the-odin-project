//DOM elements

const body = document.querySelector("body");
const container = document.querySelector("#container");
const sketchpad = document.querySelector("#sketchpad");

const btn = document.querySelector("#set-size");

//logic
let numCells;

function cleanSketchPad() {
  //clean the sketch pad (prev history)
  sketchpad.innerHTML = "";
}

btn.addEventListener("click", () => {
  cleanSketchPad();
  //take input from user, check for max condition
  numCells = prompt("Enter the number of cells:");

  if (numCells >= 0 && numCells <= 100) {
    numCells = numCells;
  } else if (numCells > 100) {
    numCells = 100;
  }

  //calculate the width and height of each cell
  const sizeOfSketchPad = window.getComputedStyle(
    document.querySelector("#sketchpad")
  ).height;
  const sizeOfCell = sizeOfSketchPad / numCells;

  //draw the cells
  for (let i = 0; i < numCells; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("style", `height: ${sizeOfCell}`);
    sketchpad.appendChild(row);
    for (let j = 0; j < numCells; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.setAttribute("style", `width:${sizeOfCell}`);
      row.appendChild(cell);
    }
  }
});
