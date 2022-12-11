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



