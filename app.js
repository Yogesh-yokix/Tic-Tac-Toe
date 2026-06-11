

let state = 'X';
let gameOver = false;

let array = ['', '', '', '', '', '', '', '', '', '']; 


function insert(cell) {
    if (gameOver) return;

    const element = document.getElementById(cell);

    if (element.innerText !== '') return;

    element.innerText = state;
    array[cell] = state;

    winner(array);

    if (!gameOver) {
        state = state === 'X' ? 'O' : 'X';
    }
}

function checkDraw(array) {
    for (let i = 1; i <= 9; i++) {
        if (array[i] === '') {
            return false;
        }
    }
    return true;
}

function winner(array) {
    const com = [
        [1, 2, 3], 
        [4, 5, 6],
        [7, 8, 9], 
        [1, 4, 7], 
        [2, 5, 8], 
        [3, 6, 9],
        [1, 5, 9], 
        [3, 5, 7]  
    ];

    for (let i = 0; i < com.length; i++) {
        let pos1 = com[i][0];
        let pos2 = com[i][1];
        let pos3 = com[i][2];

        if (
            array[pos1] === array[pos2] &&
            array[pos2] === array[pos3] &&
            array[pos1] !== ''
        ) {
            alert(array[pos1] + ' is the winner');
            gameOver = true;
            return;
        }
    }

    if (checkDraw(array)) {
        alert('It is a draw match');
        gameOver = true;
    }
}