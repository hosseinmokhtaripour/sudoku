var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
  "83-1--6-5",
  "-------8-",
  "---7--9--",
  "-5--17---",
  "--3---2--",
  "---34--1-",
  "--4--8---",
  "-9-------",
  "3-2--6-47"
]
var solution = [
  "837194625",
  "549623781",
  "621785934",
  "256817493",
  "413569278",
  "978342516",
  "164278359",
  "795431862",
  "382956147"
]

window.onload = function(){
  setGame();
}

function setGame(){
  // Make Digits 1-9
  for(let i = 1; i <= 9; i++){
    //<div id="1" class="number">1</div>
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click",selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }
  // Make Board 9*9
  for(let r = 0;r < 9; r++){
    for(let c = 0;c < 9; c++){
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if(board[r][c] != "-"){
          tile.innerText = board[r][c];
          tile.classList.add("tile-start");
      }
      if(r == 2 || r == 5){
        tile.classList.add("horizontal-line");
      }
      if(c == 2 || c == 5){
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}
function selectNumber(){
  if(numSelected != null){
    numSelected.classList.remove("number-selcted");
  }
  numSelected = this;
  numSelected.classList.add("number-selcted");
}
function selectTile(){
  if(numSelected){
    if(this.innerText != ""){
      return;
    }

    // "0-0" "0-1"
    let coords = this.id.split("-"); // ["0" , "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if(solution[r][c] == numSelected.id){
        this.innerText = numSelected.id;
    }
    else{
      errors += 1;
      document.getElementById("errors").innerText = errors;
    }


  }
}
