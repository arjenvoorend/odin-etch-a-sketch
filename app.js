const sketchboardContainer = document.querySelector('.container');

// create sketchboard divs and add them to the sketchboard container
function createSketchboard(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let div = document.createElement('div');
    div.classList.add('sketchboard');
    div.setAttribute('id', `${i}`);
    sketchboardContainer.appendChild(div);
  }
}

createSketchboard(16);