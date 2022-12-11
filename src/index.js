class Player{
    constructor(name){
        this.name = name,
        this.ships = []
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

function initializeShips(){
    const shipInfo = {
        carrier: 5,
        battleship: 4,
        cruiser: 3,
        submarine: 3,
        destroyer: 2,
        scout: 2
    }
    let shipList = []
    for(item in shipInfo){
        let ship = new Ship(item, shipInfo[item]);
        shipList.push(ship)
    }
    return shipList;
}
let player1 = new Player("one");
player1.ships = initializeShips();
console.log(player1.ships)



