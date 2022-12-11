class Player{
    constructor(name){
        this.name = name,
        this.ships = [],
        this.board = []
    }
}

class Ship{
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.hit = function() {
            this.length = this.length - 1;
        },
        this.sunk = false
    }
}

const shipInfo = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
    scout: 2
}

function initializeShips(shipInfo){
    let shipList = []
    for(item in shipInfo){
        let ship = new Ship(item, shipInfo[item]);
        shipList.push(ship)
    }
    return shipList;
}
let player1 = new Player("one");
player1.ships = initializeShips(shipInfo);

function generateBoard(player){
    const gameboard = [];
    for(let i = 0; i <= 99; i++){
        gameboard.push(0);
    };
    return player.board = gameboard
}

generateBoard(player1);
console.log(player1.board);

