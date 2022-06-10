class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false
        }
}

class Game {
    constructor(choice) {
        this.doors = [];
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;
        this.won;
        this.goatDoor;
        this.choice = choice;
        this.createDoors();
        this.firstTurn();
        this.secondTurn();
        this.thirdTurn();
        this.results();
        
    }
    
    createDoors() {
        this.doors[0] = new Door(1, true);
        this.doors[1] = new Door(2, false);
        this.doors[2] = new Door(3, false);
        console.log("doors are ", this.doors)
    }

    firstTurn() {
        this.doorPicked = this.doors[Math.floor(Math.random() * (3 - 1 + 1) )]
        console.log("You chose", this.doorPicked)
    }

    secondTurn() {        
        this.goatDoor = this.doors.filter(door=>
            door.number !== this.doorPicked.number && door.isCar == false); 
            this.goatDoor[0].opened = true;
        this.openedGoatDoor = this.goatDoor.filter(door=>
            door.opened == true);
        console.log("Monty opened", this.openedGoatDoor)
    }

    thirdTurn() {
        this.finalPick = this.doors.filter(door=>
            door.opened == false && door.number !== this.doorPicked.number);
        this.finalPick[0].opened = true;
        console.log("You changed door and opened", this.finalPick)
    }
    
    results() {
        if (this.choice == true) {
            if (this.doorPicked.isCar == true) {
                this.doorPicked.opened = true;
                this.won = true;
            } else {
                this.doorPicked.opened = true;
                this.won = false;
            }
        } else if (this.choice == false) {
            if (this.finalPick.isCar == true) {
                this.finalPick.opened = true;
                this.won = true;
            } else {
                this.finalPick.opened = true;
                this.won = false;                
            }
        } console.log("You win is", this.won)
    }
}



class Statistics {
    constructor() {
        // this.gameNumber = gameNumber;
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

//     function () {
//         percentageGamesWithSameDoorLost = gamesWithSameDoorLost / totalSameDoorPlayedGames * 100
//         return (percentageGamesWithSameDoorLost, "%")
//     }

//     function () {
//         percentageGamesWithDoorChangeWon = gamesWithDoorChangeWon / totalDoorChangePlayedGames * 100
//         return (percentageGamesWithDoorChangeWon, "%")
//     }

//     function () {
//         percentageGamesWithDoorChangeLost = gamesWithDoorChangeLost / totalDoorChangePlayedGames * 100
//         return (percentageGamesWithDoorChangeLost, "%")
//     }
}


var data = new Statistics;

let count = 0
// Game(choice) : true = sameDoor, false = doorChange
for (let i = 0; i < 10; i++) {
    var sameDoorGame = new Game(true); 
    count++;   
    if (sameDoorGame.won = true) {
        data.gamesWithSameDoorWon++;
        console.log("Well played")
    }
    // sameDoorGame.won = false
    // console.log(this.gamesWithSameDoorWon)
    }

    
// for (let i = 0; i < 10; i++) {
//     var doorChangeGame = new Game(false);
//     }

// for (let gameNumber = 0; gameNumber < 10; gameNumber++) {
//     var doorChangeGame = new Game(false);
    
//     }


// while (gameNumber = 0, gameNumber <= 10) {
//     let 
//     var sameDoorGame = new Game(true);
//     this.gameNumber++;
//     }
//     totalSameDoorPlayedGames = gameNumber

  console.log("Game Over")