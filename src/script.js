import {changeBoard, changeStatus} from "./domChange";

class Player{
    constructor(name){
        this.name = name,
        this.ships = [],
        this.board = []
    }
};

class Ship{
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.health = length;
        this.hit = function() {
            this.health = this.health - 1;
        },
        this.sunk = false;
    }
};

const shipInfo = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
    scout: 1
};

function initializeShips(shipInfo){
    let shipList = []
    for(let item in shipInfo){
        let ship = new Ship(item, shipInfo[item]);
        shipList.push(ship)
    }
    return shipList;
};

function generateBoard(player){
    const gameboard = [];
    for(let i = 0; i <= 99; i++){
        gameboard.push(0);
    };
    return player.board = gameboard
};

function convertLetter(starting){
    if(starting[0] == 'a'){
        return starting[1];
    } else if(starting[0] == 'b'){
        return "1" + starting[1];
    }  else if(starting[0] == 'c'){
        return "2" + starting[1];
    } else if(starting[0] == 'd'){
        return "3" + starting[1];
    } else if(starting[0] == 'e'){
        return "4" + starting[1];
    } else if(starting[0] == 'f'){
        return "5" + starting[1];
    } else if(starting[0] == 'g'){
        return "6" + starting[1];
    } else if(starting[0] == 'h'){
        return "7" + starting[1];
    } else if(starting[0] == 'i'){
        return "8" + starting[1];
    } else if(starting[0] == 'j'){
        return "9" + starting[1];
    }

};
function placeShips(player, value, direction, ship, length){
    if(direction == "right"){
        let placeholder = "";
        for(let i = 0; i < length; i++){
            placeholder = (1 * i);
            if(player.board[Number(value) + placeholder] != 0){
                return false
            } 
        } 
        for(let i = 0; i < length; i++){
            placeholder = (1 * i);
            player.board[Number(value) + placeholder] = ship;
        } return true
    } else if(direction == "left"){
        let placeholder = "";
        for(let i = 0; i < length; i++){
            placeholder = (1 * i);
            if(player.board[Number(value) - placeholder] != 0){
                return false
            } 
        } 
        for(let i = 0; i < length; i++){
            placeholder = (1 * i);
            player.board[Number(value) - placeholder] = ship;
        } return true
    } else if(direction == "up"){
        let placeholder = "";
        for(let i = 0; i < length; i++){
            placeholder = (10 * i);
            if(player.board[Number(value) - placeholder] != 0){
                return false
            } 
        } 
        for(let i = 0; i < length; i++){
            placeholder = (10 * i);
            player.board[Number(value) - placeholder] = ship;
        } return true
    } else if (direction == "down"){
        let placeholder = "";
        for(let i = 0; i < length; i++){
            placeholder = (10 * i);
            if(player.board[Number(value) + placeholder] != 0){
                return false
            } 
        } 
        for(let i = 0; i < length; i++){
            placeholder = (10 * i);
            player.board[Number(value) + placeholder] = ship;
        } return true
    }
};  

function checkBoardSpace(direction, value, shipLength){
    if(shipLength == 1){
        return true;
    } else {
        if(direction == 'right'){
            if(value.length == 2){
                var onesDigit = value[1];
            } else {
                var onesDigit = value;
            }
            if(Number(onesDigit) + Number(shipLength) >= 10){
                return false;
            } else {return true};
        }else if(direction == 'left'){
            if(value.length == 2){
                var onesDigit = value[1];
            } else {
                var onesDigit = value;
            }
            if(Number(onesDigit) - Number(shipLength) < 0){
                return false;
            } else {return true};
        }else if(direction == 'down'){
            if((Number(value) + (Number(shipLength) * 10)) - 10 >= 100){
                return false;
            } else {return true};
        }else{
            if((Number(value) - (Number(shipLength) * 10) + 10) < 0){
                return false;
            } else {return true};
        }
    }
};

function userInput(player){
    let letterVerification = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for(let i = 0; i < player.ships.length; i++){
        let shipName = player.ships[i].name;
        let shipLength = player.ships[i].length;
        let loopRound = true;
        while(loopRound == true){
            let startingInput = prompt(`Where will be the starting position for ${shipName}? (Ex: a0, b5, j9)`);
            while(letterVerification.includes(startingInput[0]) == false || Number.isInteger(Number(startingInput[1])) == false || startingInput.length > 2){
            console.log("Please input correctly!")
            startingInput = prompt(`Where will be the starting position for ${shipName}? (Ex: a0, b5, j9)`);
            }
            let directionInput = prompt(`Which direction this ship face?(right, left, up, down)`);
            while(directionInput != 'right' && directionInput != 'left' && directionInput != 'up' && directionInput != 'down'){
                console.log("Please input the correct direction!");
                directionInput = prompt(`Which direction this ship face?(right, left, up, down)`);
            }
            let value = convertLetter(startingInput);
            if(checkBoardSpace(directionInput, value, shipLength) == false || placeShips(player, value, directionInput, shipName, shipLength) == false){
                alert("This spot is invalid!");
            }else {
                loopRound = false;
            }
        }
    }   
};

function attackInput(){
    let letterVerification = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let attackInput = prompt(`Where will you attack? (Ex: a0, b5, j9)`);
    while(letterVerification.includes(attackInput[0]) == false || Number.isInteger(Number(attackInput[1])) == false || attackInput.length > 2){
        alert("Please input correctly!")
        attackInput = prompt(`Where will you attack? (Ex: a0, b5, j9)`);
    }
    return attackInput;
};

function checkHit(player, attackInput, variableReference){
    let value = Number(convertLetter(attackInput));
    if(player.board[value] == 'x'){
        changeStatus("Position has been hit already!")
        return false
    }else if(player.board[value] == 0){
        player.board[value] = 'x';
        changeStatus("Missed")
        changeBoard(player, value, 'x', variableReference);
    }else{
        changeStatus("Direct Hit")
        if(player.board[value] == 'carrier'){
            player.ships[0].hit();
            player.board[value] = 'x';
            changeBoard(player, value, '!', variableReference);
        } else if(player.board[value] == 'battleship'){
            player.ships[1].hit();
            player.board[value] = 'x';
            changeBoard(player, value, '!', variableReference);
        } else if(player.board[value] == 'cruiser'){
            player.ships[2].hit();
            player.board[value] = 'x';
            changeBoard(player, value, '!', variableReference);
        } else if(player.board[value] == 'submarine'){
            player.ships[3].hit();
            player.board[value] = 'x';
            changeBoard(player, value, '!', variableReference);
        } else if(player.board[value] == 'destroyer'){
            player.ships[4].hit();
            player.board[value] = 'x';
            changeBoard(player, value, '!', variableReference);
        } else {
            player.ships[5].hit()
            player.board[value] = 'x';
            changeBoard(player, value, '!', variableReference);
        }
    }
};

function checkSunk(player){
    player.ships.forEach(element => {
        if(element.health == 0){
            element.sunk = true;
            changeStatus(`You have sunk ${element.name}!`)
        }
    });
};

function checkWin(player){
    let score = 0;
    player.ships.forEach(element => {
        if(element.sunk == true){
            score += 1;
        }
    })
    if(score == 6){
        return true
    } else {
        return false
    }
}

function computerPlacement(player){
    let directionList = ['down', 'up', 'left', 'right']
    for(let i = 0; i < player.ships.length; i++){
        let shipName = player.ships[i].name;
        let shipLength = player.ships[i].length;
        let loopRound = true;
        while(loopRound == true){
            let value = String(Math.floor(Math.random() * 100));
            let directionInput = directionList[Math.floor(Math.random()*directionList.length)];
            if(checkBoardSpace(directionInput, value, shipLength) == false || placeShips(player, value, directionInput, shipName, shipLength) == false){
                continue;
            }else {
                loopRound = false;
            }
        }
    }
}

function randomAttackInput(){
    let alphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let letter = alphabetList[Math.floor(Math.random()*alphabetList.length)];
    let number = String(Math.floor(Math.random() * 10));
    return letter.concat(number);
}

async function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

async function gameStart(){
    let game = true;
    while(game == true){
        let player1 = new Player("one");
        let player2 = new Player("two");

        player1.ships = initializeShips(shipInfo);
        player2.ships = initializeShips(shipInfo);

        generateBoard(player1);
        generateBoard(player2);

        userInput(player1);
        computerPlacement(player2);
        console.log(player2.board);
        let playerTurn = 1;
        let attackPhase = true;
        let variableReference = {variable1: player1,
            variable2: player2
        }
        
        while(attackPhase == true){
            let input = "";
            if(playerTurn == 2){
                alert("Computer Turn")
                input = randomAttackInput();
                checkHit(player1, input, variableReference);
                checkSunk(player1);
                if(checkWin(player1)){
                    changeStatus("Computer Player has won!");
                    attackPhase = false;
                } 
            } else {
                input = attackInput();
                checkHit(player2, input, variableReference);
                checkSunk(player2);
                if(checkWin(player2)){
                    changeStatus("Player has won!");
                    attackPhase = false;
                } 
            }
            alert("Changing players");
            if(playerTurn == 2){
                playerTurn = 1;
            } else {
                playerTurn = 2;
            } await sleep()
        } game = false;  
    }
}

export {initializeShips, generateBoard, convertLetter, 
    checkBoardSpace, placeShips, userInput, attackInput,
    checkHit, checkSunk, computerPlacement, randomAttackInput,
    checkWin, gameStart,sleep, Player, Ship, shipInfo}