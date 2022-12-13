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
    for(item in shipInfo){
        let ship = new Ship(item, shipInfo[item]);
        shipList.push(ship)
    }
    return shipList;
};
let player1 = new Player("one");
player1.ships = initializeShips(shipInfo);

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
            if(player.board[value + placeholder] != 0){
                return false
            } else {player.board[value + placeholder] = ship}   
        }
    } else if(direction == "left"){
        let placeholder = "";
        for(let i = 0; i < length; i++){
            placeholder = (1 * i);
            if(player.board[value - placeholder] != 0){
                return false
            } else {player.board[value - placeholder] = ship};
        }
    } else if(direction == "up"){
        let placeholder = "";
        for(let i = 0; i < length; i++){
            placeholder = (10 * i);
            if(player.board[value - placeholder] != 0){
                return false
            } else {player.board[value - placeholder] = ship};
        }
    } else if (direction == "down"){
        let placeholder = "";
        for(let i = 0; i < length; i++){
            placeholder = (10 * i);
            if(player.board[value + placeholder] != 0){
                return false
            } else {player.board[value + placeholder] = ship}
        }
    }
};  

function checkBoardSpace(direction, value, shipLength){
    if(direction == 'right'){
        let onesDigit = value.toString();
        onesDigit = onesDigit[1];
        if(Number(onesDigit) + Number(shipLength) >= 10){
            return false
        } 
    }else if(direction == 'left'){
        let onesDigit = value.toString();
        onesDigit = onesDigit[1];
        if(onesDigit - Number(shipLength) < 0){
            return false
        } 
    }else if(direction == 'down'){
        if((value + (shipLength * 10)) - 10 >= 100){
            return false
        } 
    }else{
        if((value - (shipLength * 10) + 10) < 0){
            return false
        }
    }
};

function userInput(player){
    let letterVerification = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for(let i = 0; i < player.ships.length; i++){
        let shipName = player.ships[i].name;
        let shipLength = player.ships[i].name;
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
            if(checkBoardSpace(directionInput, value, shipLength) && placeShips(player, value, directionInput, shipName, shipLength)){
                loopRound = false;
            }else {
                alert("This spot is invalid!");
            }
        }
    }   
};

function attackInput(){
    let letterVerification = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let attackInput = prompt(`Where will you attack? (Ex: a0, b5, j9)`);
    while(letterVerification.includes(attackInput[0]) == false || Number.isInteger(Number(attackInput[1])) == false || attackInput.length > 2){
        console.log("Please input correctly!")
        attackInput = prompt(`Where will you attack? (Ex: a0, b5, j9)`);
    }
    return attackInput;
};

function checkHit(player, attackInput){
    let value = convertLetter(attackInput)
    if(player.board[value] == 'x'){
        alert("You've already hit this position");
        return false
    }else if(player.board[value] == 0){
        alert("You missed!")
    }else{
        alert("Direct hit!");
        if(player.board[value] == 'carrier'){
            player.ships[0].hit();
            player.board[value] = 'x';
        } else if(player.board[value] == 'battleship'){
            player.ships[1].hit();
            player.board[value] = 'x';
        } else if(player.board[value] == 'cruiser'){
            player.ships[2].hit();
            player.board[value] = 'x';
        } else if(player.board[value] == 'submarine'){
            player.ships[3].hit();
            player.board[value] = 'x';
        } else if(player.board[value] == 'destroyer'){
            player.ships[4].hit();
            player.board[value] = 'x';
        } else {
            player.ships[5].hit()
            player.board[value] = 'x';
        }
    }
};

function checkSunk(player){
    player.ships.array.forEach(element => {
        if(element.health == 0){
            element.sunk = true;
            console.log(`You have sunk ${element.name}!`)
        }
    });
};

function checkWin(player){
    const score = 0;
    player.ships.array.forEach(element => {
        if(element.sunk = true){
            score += 1;
        }
    })
    if(score == 6){
        return true
    } 
}
    





