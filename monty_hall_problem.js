class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false
        }
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
        console.log("doors are ", this.doors)
    }

    firstTurn() {
        this.doorPicked = this.doors[Math.floor(Math.random() * (3 - 1 + 1) )]
        console.log("firstTurn is ", this.doorPicked)
    }

    secondTurn() {
        var minusFirstTurn
        this.openedGoatDoor = this.doors.filter(door=>
            door.number !== this.doorPicked.number && door.isCar == false); 
            this.openedGoatDoor[0].opened = true;
        // this.openedGoatDoor = minusFirstTurn[0]
        console.log("this.openedGoatDoor is :", this.openedGoatDoor)
    }

    thirdTurn() {
        this.finalPick = this.doors.filter(door=>
            door.number !== this.doorPicked.number && this.openedGoatDoor.number);
        this.finalPick.opened = true;
        console.log("this.openedGoatDoor is :", this.openedGoatDoor)



        var choice;
        var sameDoor;
        var changeDoor;
        if (choice = sameDoor) {
            if (this.doorPicked.isCar = true) {
                this.doorPicked.opened = true;
                console.log("this.doorPicked is", this.doorPicked)
                alert("You win!");
            } else {
                this.doorPicked.opened = true;
                alert("You loose!")
            }
        } else (choice = changeDoor)
        if (this.finalPick.isCar = true) {
            this.finalPick.opened = true;
            console.log("this.finalPick is", this.finalPick)
            alert("You win!");
        } else {
            this.finalPick.opened = true;
            alert("You loose!")
        }
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

while (game <= 10000) {
    // game play
    game++;
  }
  totalPlayedGames = game(value)

  console.log("End game")