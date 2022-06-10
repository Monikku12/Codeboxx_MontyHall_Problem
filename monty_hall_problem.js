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
        this.thirdTurn();
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
        this.openedGoatDoor = this.doors.filter(door=>
            door.number !== this.doorPicked.number && door.isCar == false); 
            this.openedGoatDoor[0].opened = true;
        console.log("secondTurn is :", this.openedGoatDoor)
    }

// TODO: - Check Why "this.finalPick[0].opened = true" don't return 
    thirdTurn() {
        this.finalPick = this.doors.filter(door=>
            door.number !== this.doorPicked.number && this.openedGoatDoor.number);
            this.finalPick[0].opened = true;
        console.log("thirdTurn is :", this.doorPicked.number)
    }
    
    Results() {  
        var choice;
        var sameDoor;
        var doorChange;
        if (choice = sameDoor) {
            if (this.doorPicked.isCar = true) {
                this.doorPicked.opened = true;
                console.log("this.doorPicked is", this.doorPicked)
                alert("You win!");
                this.won = true;
            } else {
                this.doorPicked.opened = true;
                alert("You loose!");
                this.won = false;
            }
        } else (choice = doorChange)
        if (this.finalPick.isCar = true) {
            this.finalPick.opened = true;
            console.log("this.finalPick is", this.finalPick)
            alert("You win!");
            this.won = true;
        } else {
            this.finalPick.opened = true;
            alert("You loose!");
            this.won = false;
        }
    }
}

var sameDoorGame = new Game(choice = sameDoor);
var doorChangeGame = new Game(choice = doorChange);

// for (let i = 0; i < 10000; i++) {
//     // if statement game play
//    }



class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = []
        this.totalSameDoorPlayedGames = [];
        this.totalDoorChangePlayedGames = [];
        this.percentageGamesWithSameDoorWon;
        this.percentageGamesWithSameDoorLost;
        this.percentageGamesWithDoorChangeWon;
        this.percentageGamesWithDoorChangeLost;

    }

    function () {
        percentageGamesWithSameDoorWon = gamesWithSameDoorWon / totalSameDoorPlayedGames * 100
        return (percentageGamesWithSameDoorWon, "%")
    }

    function () {
        percentageGamesWithSameDoorLost = gamesWithSameDoorLost / totalSameDoorPlayedGames * 100
        return (percentageGamesWithSameDoorLost, "%")
    }

    function () {
        percentageGamesWithDoorChangeWon = gamesWithDoorChangeWon / totalDoorChangePlayedGames * 100
        return (percentageGamesWithDoorChangeWon, "%")
    }

    function () {
        percentageGamesWithDoorChangeLost = gamesWithDoorChangeLost / totalDoorChangePlayedGames * 100
        return (percentageGamesWithDoorChangeLost, "%")
    }
}
// let game = 0

while (game <= 10000) {
    // game play
    game++;
  }
  totalPlayedGames = game(value)

  console.log("End game")