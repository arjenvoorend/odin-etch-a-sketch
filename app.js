const colorPicker = document.querySelector('#color-picker');
const colorPickerChoice = document.querySelector('#color-picker-choice');

const rainbowMode = document.querySelector('#rainbow-mode').addEventListener('click', () => {
  rainbowModeOn();
});
const warmColorsMode = document.querySelector('#warm-colors').addEventListener('click', () => {
  warmColorsOn();
});
const coolColorsMode = document.querySelector('#cool-colors').addEventListener('click', () => {
  coolColorsOn();
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
const gridSizeOneBtn = document.querySelector('#grid-size-one');
gridSizeOneBtn.addEventListener('click', () => {
  deleteGrid();
  sketchboardContainer.classList.add('size-one');
  createSketchboard(16);
  checkGridSize();
});
const gridSizeTwoBtn = document.querySelector('#grid-size-two');
gridSizeTwoBtn.addEventListener('click', () => {
  deleteGrid();
  sketchboardContainer.classList.add('size-two');
  createSketchboard(32);
  checkGridSize();
});
const gridSizeThreeBtn = document.querySelector('#grid-size-three');
gridSizeThreeBtn.addEventListener('click', () => {
  deleteGrid();
  sketchboardContainer.classList.add('size-three');
  createSketchboard(48)
  checkGridSize();
});
const gridSizeFourBtn = document.querySelector('#grid-size-four');
gridSizeFourBtn.addEventListener('click', () => {
  deleteGrid();
  sketchboardContainer.classList.add('size-four');
  createSketchboard(64);
  checkGridSize();
});

const gridSizeBtns = [gridSizeOneBtn, gridSizeTwoBtn, gridSizeThreeBtn, gridSizeFourBtn];


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
checkGridSize();


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


// add random warm background colors to the sketchboard divs on hover
function warmColorsOn() {
  const currentGrid = getCurrentGrid();
  const warmColors = ['#ffd319', '#ff901f', '#ff6c11', '#ff3864', '#ff2975', '#9b2948', '#ff7251', '#ffca7b']

  currentGrid.forEach(sketchboard => sketchboard.addEventListener('mouseover', () => {
    sketchboard.setAttribute('style', `background-color: ${warmColors[Math.floor(Math.random() * warmColors.length)]}`)
  }));
}


// add random cool background colors to the sketchboard divs on hover
function coolColorsOn() {
  const currentGrid = getCurrentGrid();
  const warmColors = ['#261447', '#023788', '#f706cf', '#f222ff', '#8c1eff', '#33f7ff', '#33efff', '#33ffd0']

  currentGrid.forEach(sketchboard => sketchboard.addEventListener('mouseover', () => {
    sketchboard.setAttribute('style', `background-color: ${warmColors[Math.floor(Math.random() * warmColors.length)]}`)
  }));
}


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
  checkGridSize();
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


// check grid size and disable corresponding button
function checkGridSize() {
  const currentGrid = getCurrentGrid();
  if (currentGrid.length === 256) {
    enableGridSizeBtns();
    gridSizeBtns[0].disabled = true;
    gridSizeBtns[0].classList.add('btn-disabled')
  }
  if (currentGrid.length === 1024) {
    enableGridSizeBtns();
    gridSizeBtns[1].disabled = true;
    gridSizeBtns[1].classList.add('btn-disabled')
  }
  if (currentGrid.length === 2304) {
    enableGridSizeBtns();
    gridSizeBtns[2].disabled = true;
    gridSizeBtns[2].classList.add('btn-disabled')
  }
  if (currentGrid.length === 4096) {
    enableGridSizeBtns();
    gridSizeBtns[3].disabled = true;
    gridSizeBtns[3].classList.add('btn-disabled')
  }
}


// enable grid size buttons
function enableGridSizeBtns() {
  gridSizeBtns.forEach(btn => btn.classList.remove('btn-disabled'))
  gridSizeBtns.forEach(btn => btn.disabled = false)
}