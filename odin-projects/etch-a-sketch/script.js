//DOM elements

const body = document.querySelector('body');
const container = document.querySelector('#container');
const sketchpad = document.querySelector('#sketchpad');

const btn = document.querySelector('button');
 
//logic
let size;


btn.addEventListener('click', ()=>{
    size = prompt('Enter the number of cells:');
    for(let i=0; i<=size; i++){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('style', "display: flex; flex:1;");
        sketchpad.appendChild(row);
        for(let j =0; j <= size; j++){
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.setAttribute('style', 'flex: 1;');
            row.appendChild(cell);
        }
    }
})