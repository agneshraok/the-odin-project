//DOM elements

const body = document.querySelector("body");
const container = document.querySelector("#container");
const sketchpad = document.querySelector("#sketchpad");

const btn = document.querySelector("#set-size");

function cleanSketchPad() {
  //clean the sketch pad (prev history)
  sketchpad.innerHTML = "";
}

function getNumCells() {
  //take number of cells from user, check for max condition
  let numCells = prompt("Enter the number of cells:");

  if (numCells >= 0 && numCells <= 100) {
    numCells = numCells;
  } else if (numCells > 100) {
    numCells = 100;
  }
  console.log(`number of cells inputted by user: ${numCells}`);
  return numCells;
}

function calcSize(numCells) {
  //calculate the width and height of each cell based on the number of cells user has inputed
  const sizeOfSketchPad = window.getComputedStyle(
    document.querySelector("#sketchpad")
  ).height;
  const sizeOfCell = sizeOfSketchPad / numCells;
  console.log(`size of each cell calculated: ${sizeOfCell}`);
  return sizeOfCell;
}

function drawCells(numCells, sizeOfCell) {
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
}

btn.addEventListener("click", () => {
  cleanSketchPad();
  const numCells = getNumCells();
  const sizeOfCell = calcSize();
  drawCells(numCells, sizeOfCell);
});
