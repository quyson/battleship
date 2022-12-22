import { initializePage } from "./initialize";
import { changeBoard, changeStatus } from "./domChange";
import { sleep, initializeShips, generateBoard, convertLetter, checkBoardSpace, placeShips, userInput, attackInput, checkHit, checkSunk, computerPlacement, randomAttackInput, checkWin, gameStart, Player, Ship, shipInfo } from "./script";
import "./styles.css";

initializePage();

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', e => {
    const board1 = document.querySelector('#one');
    const board2 = document.querySelector('#two');
    for(let i = 0; i < 100; i ++){
        let box = document.createElement('div');
        box.className = 'box';
        box.style.borderColor = 'black';
        box.style.borderWidth = '1px';
        box.style.borderStyle = 'solid'
        board1.append(box);
        box.id = `p${i}`;
    }
    for(let i = 0; i < 100; i ++){
        let box = document.createElement('div');
        box.className = 'box';
        box.style.borderColor = 'black';
        box.style.borderWidth = '1px';
        box.style.borderStyle = 'solid'
        board2.append(box);
        box.id = `cpu${i}`;
    }
    gameStart();
})

