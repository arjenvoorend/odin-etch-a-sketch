// create sketchboard divs and add them to the sketchboard container
const sketchboardContainer = document.querySelector('.container');

function createSketchboard(gridSize) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    let div = document.createElement('div');
    div.classList.add('sketchboard');
    div.setAttribute('id', `${i}`);
    sketchboardContainer.appendChild(div);
  }
}

createSketchboard(16);


// add random background colors to the sketchboard divs on hover
const sketchboardGrid = document.querySelectorAll('.sketchboard');

sketchboardGrid.forEach(sketchboard => sketchboard.addEventListener('mouseover', () => {
  sketchboard.setAttribute('style', `background-color:rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`)
}));