//selectors

const Box = document.querySelectorAll(".box");
const Field = document.querySelector(".field");
const playerTurn = document.querySelector(".player-turn h4");
const fBtn = document.querySelector(".buttonF");
const boxNrs = [
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
  "box9",
];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sup = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let arrVal = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// event listenees

document.addEventListener("click", fillin);

document.addEventListener("click", resetter);

// function
let flag = 0;
let player = 1;
let clickCount = 0;
function fillin(e) {
  if (flag === 2) {
    return;
  }
  for (let i = 0; i < values.length; i++) {
    if (e.target.classList.contains(boxNrs[i]) && flag === 0) {
      const elem = document.createElement("img");
      elem.classList.add("designxo");
      const boxer = document.querySelector("." + boxNrs[i]);
      if (boxer.childNodes.length === 0) {
        clickCount++;
        if (player === 1) {
          elem.src = "./images/xxx.svg";
          boxer.appendChild(elem);
          let count = 0;
          for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
              count++;
              if (count === values[i]) {
                arrVal[j][k] = "x";
              }
            }
          }
          player = 2;
        } else if (player === 2) {
          elem.src = "./images/ooo.svg";
          boxer.appendChild(elem);
          let count = 0;
          for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
              count++;
              if (count === values[i]) {
                arrVal[j][k] = "o";
              }
            }
          }
          player = 1;
        }
      }
    }
  }

  // player turn display
  if (flag === 0) {
    if (player === 1) {
      playerTurn.innerText = "Player 1's Turn - X";
    } else if (player === 2) {
      playerTurn.innerText = "Player 2's Turn - O";
    }
  }

  // ----------------------------------------------------------------------------------------------

  // deciding winner by rows

  let med1 = [];
  let med2 = [];
  if (flag === 0) {
    for (let i = 0; i < 3; i++) {
      let countX = 0;
      let countO = 0;
      console.log(med1, med2);
      med1 = [];
      med2 = [];

      for (let j = 0; j < 3; j++) {
        if (arrVal[i][j] === "x") {
          countX++;
          med1.push(sup[i][j]);
        }
        if (arrVal[i][j] === "o") {
          countO++;
          med2.push(sup[i][j]);
        }
        if (countX === 3) {
          playerTurn.innerText = "Player 1 WON!!!!!";
          flag = 1;
          break;
        }
        if (countO === 3) {
          playerTurn.innerText = "Player 2 WON!!!!!";
          flag = 1;
          break;
        }
      }
      if (flag === 1) {
        break;
      }
    }
  }

  // deciding winner by columns

  if (flag === 0) {
    med1 = [];
    med2 = [];
    for (let i = 0; i < 3; i++) {
      let countX = 0;
      let countO = 0;
      med1 = [];
      med2 = [];
      for (let j = 0; j < 3; j++) {
        if (arrVal[j][i] === "x") {
          countX++;
          med1.push(sup[j][i]);
        }
        if (arrVal[j][i] === "o") {
          countO++;
          med2.push(sup[j][i]);
        }
      }
      if (countX === 3) {
        playerTurn.innerText = "Player 1 WON!!!!!";
        flag = 1;
        break;
      }
      if (countO === 3) {
        playerTurn.innerText = "Player 2 WON!!!!!";
        flag = 1;
        break;
      }
    }
  }

  // deciding winner by diagonals
  let countXX = 0;
  let countOO = 0;
  if (flag === 0) {
    med1 = [];
    med2 = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i == j) {
          if (arrVal[i][j] === "x") {
            countXX++;
            med1.push(sup[i][j]);
          }
          if (arrVal[i][j] === "o") {
            countOO++;
            med2.push(sup[i][j]);
          }
        }
      }
      if (countXX === 3) {
        playerTurn.innerText = "Player 1 WON!!!!!";
        flag = 1;
        break;
      }
      if (countOO === 3) {
        playerTurn.innerText = "Player 2 WON!!!!!";
        flag = 1;
        break;
      }
    }
  }

  countXX = 0;
  countOO = 0;
  if (flag === 0) {
    med1 = [];
    med2 = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 2 - j) {
          if (arrVal[i][j] === "x") {
            countXX++;
            med1.push(sup[i][j]);
          }
          if (arrVal[i][j] === "o") {
            countOO++;
            med2.push(sup[i][j]);
          }
          if (countXX === 3) {
            playerTurn.innerText = "Player 1 WON!!!!!";
            flag = 1;
            break;
          }
          if (countOO === 3) {
            playerTurn.innerText = "Player 2 WON!!!!!";
            flag = 1;
            break;
          }
        }
      }
    }
  }

  if (clickCount === 9) {
    playerTurn.innerText = "Its a Tie";
    med1 = [];
    med2 = [];
    flag = 1;
  }
  // --------------------------------------------------------------------------------------------------------------------

  if (flag === 1) {
    const newBtn = document.createElement("button");
    newBtn.classList.add("buttonDesign");
    newBtn.innerText = "Play Again";
    fBtn.appendChild(newBtn);
    playerTurn.classList.add("biggg");
    console.log(med1, med2);
    if (med1.length > med2.length) {
      for (let i = 0; i < 3; i++) {
        const newClr = document.querySelector("." + boxNrs[med1[i] - 1]);
        newClr.classList.add("colorIt");
      }
    } else if (med2.length > med1.length) {
      for (let i = 0; i < 3; i++) {
        const newClr = document.querySelector("." + boxNrs[med2[i] - 1]);
        newClr.classList.add("colorIt");
      }
    }
    flag = 2;
  }
}

function resetter(e) {
  if (e.target.classList.contains("buttonDesign")) {
    window.location.reload();
  }
}
