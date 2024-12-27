/*กำหนดตัวแปรให้ Element*/
const cells = document.querySelectorAll(".cell");
const statusTurn = document.getElementById("status_turn");
const restartbtn = document.getElementById("restart_btn");
/*กำหนด เงื่อนไขที่จะทำให้ชนะ*/
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
/*กำหนดตัวแปรเพื่อเก็บสถานะของแต่ละช่อง*/
let options = ["","","","","","","","",""];
let currentPlayer = "X";
/*กำหนดตัวแปรเพื่อบอกสถานะของเกม*/
let running = false;

/*เรียกใช้ฟังค์ชั่นเริ่มเกม*/
initializeGame();

function initializeGame(){
    running = true;
    /*เพิ่มEventเมื่อถูกClickให้ช่องบนกระดานทั้ง9ช่อง*/
    cells.forEach(cell => cell.addEventListener("click",clicked));
    restartbtn.addEventListener("click",restart);
    statusTurn.textContent = `${currentPlayer}'s turn`;
}

function clicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this,cellIndex);
    checkWinner();
}

function updateCell(cell,index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusTurn.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundwon = false;

    for(let i = 0 ; i < winConditions.length ; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;    
        }
        if(cellA == cellB && cellB == cellC){
            roundwon = true;
            break;
        }
    }

    if(roundwon){
        statusTurn.textContent = `${currentPlayer} win!`;
        running = false;
    }
    else if(!options.includes("")){
        statusTurn.textContent = "Draw!!";
        running = flase;
    }
    else{
        changePlayer();
    }
}

function restart(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    statusTurn.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}