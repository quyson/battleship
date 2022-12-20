import { initializePage } from "./initialize";
import { initializeShips, generateBoard, convertLetter, checkBoardSpace, placeShips, userInput, attackInput, checkHit, checkSunk, computerPlacement, randomAttackInput, checkWin, gameStart } from "./script";
import "./styles.css";

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

initializePage();

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', e => {
    gameStart();
})

