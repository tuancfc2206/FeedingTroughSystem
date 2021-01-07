const farm = {};

// 0: life area - 1: feed area - 2: weight area  3-sorting
const sortCoordinate = {
  x: [0, 19],
  y: [0, 9],
};
const feedCoordinate = {
  x: [9, 19],
  y: [0, 8],
};
const lifeCoordinate = {
  x: [0, 19],
  y: [10, 19],
};
const weighCoordinate = {
  x: [8, 9],
  y: [9, 11],
};


const matrixRow = 20;
const matrixCell = 20;
const pigWidth = 6;
const pigHeight = 10;
const matrix = getMatrix(matrixCell, matrixRow);

// render area with matrix cell[10][10] 50x50
farm.renderFarmArea = () => {
  let farm = document.getElementById("farm");
  console.log("hello");
  for (let i = 0; i < matrix.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < matrix[i].length; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      if (matrix[i][j] == 1) {
        cell.classList.add("feed");
      } else if (matrix[i][j] == 2) {
        cell.classList.add("weigh");
      } else if (matrix[i][j] == 3) {
        cell.classList.add('sort')
      }
      row.appendChild(cell);
    }
    farm.appendChild(row);
  }
};

farm.renderPig = (pig) => {
  let farm = document.getElementById("farm");

  let posX = pig.x;
  let posY = pig.y;

  console.log("Random row & cell: " + posX + " " + posY);
  let div = document.createElement("div");
  if (matrix[posY][posX] == 0) {
    div.classList.add("pig");
    div.setAttribute("id", pig.id);
    div.style.position = "absolute";
    div.style.left = 25 / 2 + posX * 25 + "px";
    div.style.top = 25 / 2 + posY * 25 + 2 + "px";
    div.textContent = pig.id;
    farm.appendChild(div);
  } else {
    console.log("not possible");
  }
};

farm.deletePig = (pigId) => {
  let div = document.getElementById(pigId);
  div.remove();
};

// farm.updatePig() = () => {

// };
