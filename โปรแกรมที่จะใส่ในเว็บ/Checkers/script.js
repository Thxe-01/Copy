// const board = document.getElementById('board');

//     // สร้างกระดาน
//     for (let row = 0; row < 8; row++) {
//         for (let col = 0; col < 8; col++) {
//             const square = document.createElement('div');
//             square.classList.add('square', (row + col) % 2 === 0 ? 'white' : 'black');

//             if (row < 2 && (row + col) % 2 !== 0) {
//                 const piece = document.createElement('div');
//                 piece.classList.add('piece', 'black-piece');
//                 square.appendChild(piece);
//             } else if (row > 5 && (row + col) % 2 !== 0) {
//                 const piece = document.createElement('div');
//                 piece.classList.add('piece', 'white-piece');
//                 square.appendChild(piece);
//             }

//             board.appendChild(square);
//         }
//     }
const board = document.getElementById("board");
let row = 8;
let col = 8;

for(i = 0 ; i < row ; i++){
    for(j = 0 ; j < col ; j++){
        const cell = document.createElement('div');
        cell.classList.add("cell", (i + j) % 2 === 0 ? "white_cell" : "black_cell");
        cell.dataset.position = `${i},${j}`;

        if (i < 2 && (i + j) % 2 !== 0){
            const pawn = document.createElement("div");
            pawn.classList.add("pawn","black_p");
            cell.appendChild(pawn);
        }
        else if(i > 5 && (i + j) % 2 !== 0){
            const pawn = document.createElement("div");
            pawn.classList.add("pawn","white_p");
            cell.appendChild(pawn);
        }
        
        board.appendChild(cell);
    }
}

// board.addEventListener('click', (event) => {
//     const cell = event.target;
//     if (cell.classList.contains('cell')) {
//         const position = cell.dataset.position;
//         alert(`คุณคลิกที่ตำแหน่ง: ${position}`);
//     }
// });


const checkers = document.querySelectorAll("#checker");
const status_player = document.getElementById("status_player");
const resetbtn = document.querySelector(".reset_btn");

let playerturn = "White";
let running = false;

startgame();

function startgame(){
    running = true;
    checkers.forEach(checker => checker.addEventListener("click",hilight));
    resetbtn.addEventListener("click",reset);
    status_player.textContent = `${playerturn}'s turn`;
}

// function clicked(){

// }

function hilight(){

    move();
}

function move(){

}

function eat(){

}

function checkwinner(){

}

function checked(){

}

function changePlayer(){

}

function reset(){

}