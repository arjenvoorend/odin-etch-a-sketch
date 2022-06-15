const colorPicker = document.querySelector('#color-picker');
const colorPickerChoice = document.querySelector('#color-picker-choice');
const rainbowMode = document.querySelector('#rainbow-mode').addEventListener('click', () => {
  rainbowModeOn();
});
const eraserMode = document.querySelector('#eraser').addEventListener('click', () => {
  eraserModeOn();
});
const clearAll = document.querySelector('#clear-all').addEventListener('click', () => {
  clearAllMode();
});
const resetAll = document.querySelector('#reset-all').addEventListener('click', () => {
  resetAllMode();
});

// grab the grid size buttons and render a corresponding grid of sketchboard divs, removing any pre existing divs
const gridSizeOne = document.querySelector('#grid-size-one').addEventListener('click', () => {
  deleteGrid();
  sketchboardContainer.classList.add('size-one');
  createSketchboard(16)
});
const gridSizeTwo = document.querySelector('#grid-size-two').addEventListener('click', () => {
  deleteGrid();
  sketchboardContainer.classList.add('size-two');
  createSketchboard(32)
});
const gridSizeThree = document.querySelector('#grid-size-three').addEventListener('click', () => {
  deleteGrid();
  sketchboardContainer.classList.add('size-three');
  createSketchboard(48)
});
const gridSizeFour = document.querySelector('#grid-size-four').addEventListener('click', () => {
  deleteGrid();
  sketchboardContainer.classList.add('size-four');
  createSketchboard(64);
});


// create sketchboard divs and add them to the sketchboard container
const sketchboardContainer = document.querySelector('.container');

function createSketchboard(gridSize = 16) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    let div = document.createElement('div');
    div.classList.add('sketchboard');
    div.style.backgroundColor = "#fff";
    div.setAttribute('id', `${i}`);
    sketchboardContainer.appendChild(div);
  };
};

// render initial 16x16 board to browser
createSketchboard();


// grab all the sketchboard divs currently displayed on the grid
function getCurrentGrid() {
  return document.querySelectorAll('.sketchboard')
}


// add random background colors to the sketchboard divs on hover
function rainbowModeOn() {
  const currentGrid = getCurrentGrid();

  currentGrid.forEach(sketchboard => sketchboard.addEventListener('mouseover', () => {
    sketchboard.setAttribute('style', `background-color:rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`)
  }));
};


// revert the background color back to white on hover
function eraserModeOn() {
  const currentGrid = getCurrentGrid();

  currentGrid.forEach(sketchboard => sketchboard.addEventListener('mouseover', () => {
    sketchboard.setAttribute('style', 'background-color:white')
  }));
};


// revert all background colors back to white
function clearAllMode() {
  const currentGrid = getCurrentGrid();

  currentGrid.forEach(sketchboard => sketchboard.setAttribute('style', 'background-color:#fff'))
};


// revert grid back to 16x16 with white divs
function resetAllMode() {
  clearAllMode();
  deleteGrid();
  createSketchboard(16);
  sketchboardContainer.classList.add('size-one');
}


// delete the grid of divs and remove the size classlist from the grid container
function deleteGrid() {
  const currentGrid = getCurrentGrid();

  currentGrid.forEach(sketchboard => {
    sketchboardContainer.removeChild(sketchboard)
  });

  sketchboardContainer.classList.remove('size-one')
  sketchboardContainer.classList.remove('size-two')
  sketchboardContainer.classList.remove('size-three')
  sketchboardContainer.classList.remove('size-four')
}