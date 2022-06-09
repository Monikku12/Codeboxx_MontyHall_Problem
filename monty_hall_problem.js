// en attendant de revoir mon fichier

class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false
        }

    // function () {
    //     return Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    // }

}


 


class Game {
    constructor() {
        this.doors = [];
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;
        this.won;
        this.createDoors();
        this.firstTurn();
        this.secondTurn();
    }
    
    createDoors() {
        this.doors[0] = new Door(1, true);
        this.doors[1] = new Door(2, false);
        this.doors[2] = new Door(3, false);
        console.log(this.doors)
    }

    firstTurn() {
        this.doorPicked = this.doors[Math.floor(Math.random() * (3 - 1 + 1) )]
        console.log(this.doorPicked)
    }

    secondTurn() {
        var minusFirstTurn
        minusFirstTurn = this.doors.filter(door=>
            door.number !== this.doorPicked.number && door.isCar == false); 
        minusFirstTurn[0].opened = true;
        this.openedGoatDoor = minusFirstTurn
        console.log(this.openedGoatDoor 
    }

    thirdTurn() {



    }

   
}

var game = new Game();

for (let i = 0; i < 10000; i++) {
    // if statement game play
   }



class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [""];
        this.gamesWithSameDoorLost = [""];
        this.gamesWithDoorChangeWon = [""];
        this.gamesWithDoorChangeLost = [""]
        this.totalPlayedGames = [""];
    }

    function () {
        gamesWithSameDoorWon / totalPlayedGames * 100
    }

    function () {
        gamesWithSameDoorLost / totalPlayedGames * 100
    }

    function () {
        gamesWithDoorChangeWon / totalPlayedGames * 100
    }

    function () {
        gamesWithDoorChangeLost / totalPlayedGames * 100
    }
}
// let game = 0

// // while (game <= 10000) {
// //     // game play
// //     game++;
// //   }
// //   totalPlayedGames = game(value)

// //   console.log("End game")