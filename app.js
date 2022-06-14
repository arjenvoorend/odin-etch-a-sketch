const colorPicker = document.querySelector('#color-picker');
const colorPickerChoice = document.querySelector('#color-picker-choice');
const rainbowMode = document.querySelector('#rainbow-mode');
const eraserMode = document.querySelector('#eraser');
const clearAll = document.querySelector('#clear-all');

const gridSizeOne = document.querySelector('#grid-size-one').addEventListener('click', () => {
  createSketchboard(16);
});
const gridSizeTwo = document.querySelector('#grid-size-two').addEventListener('click', () => {
  createSketchboard(32);
});
const gridSizeThree = document.querySelector('#grid-size-three').addEventListener('click', () => {
  createSketchboard(48)
});
const gridSizeFour = document.querySelector('#grid-size-four').addEventListener('click', () => {
  createSketchboard(64);
});



// create sketchboard divs and add them to the sketchboard container
const sketchboardContainer = document.querySelector('.container');

function createSketchboard(gridSize = 16) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    let div = document.createElement('div');
    div.classList.add('sketchboard');
    div.setAttribute('id', `${i}`);
    sketchboardContainer.appendChild(div);
  }
}

createSketchboard();


// add random background colors to the sketchboard divs on hover
const sketchboardGrid = document.querySelectorAll('.sketchboard');

sketchboardGrid.forEach(sketchboard => sketchboard.addEventListener('mouseover', () => {
  sketchboard.setAttribute('style', `background-color:rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`)
}));