const sketchGrid = document.getElementById("sketchGrid");
const gridSizeSlider = document.getElementById("gridSize");

function addGridCells (size) {
    for (let i=0; i < size*size; i++) {
        const cell = document.createElement("div");
        cell.classList = "cell";
        cell.style.display = "inline-block";
        cell.style.verticalAlign = "top";
        cell.style.outline = "1px solid gray";
        cell.style.height = `${959/size}px`;
        cell.style.width = `${959/size}px`;
        cell.style.margin = "0px"
        cell.style.padding = "0px"
        cell.addEventListener("mouseenter", function( event ){event.target.style.backgroundColor = 
            "rgb(0, 0, 0)"}, false);
        sketchGrid.appendChild(cell);
    }
}

gridSizeSlider.addEventListener('mouseup', function() {
    sketchGrid.innerHTML = '';
    addGridCells(gridSizeSlider.value);
});

function clearGrid() {
    sketchGrid.innerHTML = '';
    addGridCells(gridSizeSlider.value);
}

addGridCells(gridSizeSlider.value);


// Chris Coyier range with thumb code, modified

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = `${val} x ${val}`;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}