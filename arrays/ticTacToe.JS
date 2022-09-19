

function ticTacToe(array) {

    let playMatrix = [[false, false, false], [false, false, false], [false, false, false]];

    let currentPlayer = "X";
    let unqueCommands = 0;

    function printMatrix(printMatrix){
        let result = "";

        for (let row of printMatrix) {
            let temp = "";
            for (let el of row) {
                temp += `${el}\t`;
            }
            result += `${temp}\n`;
        }

        console.log(result)
    }

    function chagePlayerTurn(player){
        if (player == "X"){
            player = "O";
        }else{
            player = "X";
        }
        return player
    }

    function makeAMove(row, col, matrix, player) {
        if (matrix[row][col] !== false){
            return false;
        }else{
            matrix[row][col] = player;
            return true;
        }
    }
    
    function checkForWin(matrix){

        for (let i =0; i < 3; i ++) {
            let currentElement = matrix[i][0];
            if (matrix[i][1] == currentElement && matrix[i][2] == currentElement){
                return currentElement;
            }
        }

        for (let n = 0; n < 3; n++) {
            let currentElement = matrix[0][n];
            if (matrix[1][n] == currentElement && matrix[2][n] == currentElement) {
                return currentElement;
            }
        }

        if (matrix[1][1] == matrix[0][0] && matrix[2][2] == matrix[0][0]){
            return matrix[0][0];
        }

        if (matrix[0][2] == matrix[1][1] && matrix[2][0] == matrix[1][1]) {
            return matrix[0][2];
        }

        return false;
    }

    let gameOver = false;
    let winner;

    for (let double of array){

        let shredded = double.split(" ");
        let [currentRow, currentCol] = [Number(shredded[0]), Number(shredded[1])];

        let deter = makeAMove(currentRow, currentCol, playMatrix, currentPlayer);

        if (deter == false) {
            console.log("This place is already taken. Please choose another!");
            continue;

        }else{
            unqueCommands += 1;
            let quest = checkForWin(playMatrix);

            if (quest !== false) {
                gameOver = true;
                winner = quest;
            }
            let changedPlayer = chagePlayerTurn(currentPlayer);
            currentPlayer = changedPlayer;
        }

        if (gameOver === true) {
            break;
        }
        if (unqueCommands == 9){
            break;
        }

    }

    if (gameOver){
        console.log(`Player ${winner} wins!`);
    } else {
        console.log("The game ended! Nobody wins :(");
    }
    
    printMatrix(playMatrix);
}   


ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)

ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
)

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)