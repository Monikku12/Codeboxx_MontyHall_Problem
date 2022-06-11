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
    }

    firstTurn() {
        this.doorPicked = this.doors[Math.floor(Math.random() * (3 - 1 + 1) )]
        console.log("Game Start")
        console.log("You chose a door.")
    }

    secondTurn() {        
        this.goatDoor = this.doors.filter(door=>
            door.number !== this.doorPicked.number && door.isCar == false); 
            this.goatDoor[0].opened = true;
        this.openedGoatDoor = this.goatDoor.filter(door=>
            door.opened == true);
        console.log("Monty opened a loosing door.")
    }

    thirdTurn() {
        this.finalPick = this.doors.filter(door=>
            door.opened == false && door.number !== this.doorPicked.number);
        this.finalPick[0].opened = true;
        console.log("The possibility of you changing door and opening it is calculated.")
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
            if (this.finalPick[0].isCar == true) {
                this.finalPick[0].opened = true;
                this.won = true;
            } else {
                this.finalPick[0].opened = true;
                this.won = false;                
            }
        }
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

    statsGamesWithSameDoorWon () {
        this.percentageGamesWithSameDoorWon = this.gamesWithSameDoorWon / this.totalSameDoorPlayedGames * 100
        return (this.percentageGamesWithSameDoorWon.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " %")
    }    

    statsGamesWithSameDoorLost () {
        this.percentageGamesWithSameDoorLost = this.gamesWithSameDoorLost / this.totalSameDoorPlayedGames * 100
        return (this.percentageGamesWithSameDoorLost.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " %")
    }

    statsGamesWithDoorChangeWon () {
        this.percentageGamesWithDoorChangeWon = this.gamesWithDoorChangeWon / this.totalDoorChangePlayedGames * 100
        return (this.percentageGamesWithDoorChangeWon.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " %")
    }

    statsGamesWithDoorChangeLost () {
        this.percentageGamesWithDoorChangeLost = this.gamesWithDoorChangeLost / this.totalDoorChangePlayedGames * 100
        return (this.percentageGamesWithDoorChangeLost.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " %")
    }
}


var data = new Statistics;
var numberOfGameToPlay = 10000

let totalSameDoorPlayedGames = 0
// Game(choice) : true = sameDoor, false = doorChange
for (let i = 0; i < numberOfGameToPlay; i++) {
    var sameDoorGame = new Game(true); 
    data.totalSameDoorPlayedGames++;   
    if (sameDoorGame.won == true) {
        data.gamesWithSameDoorWon++;
        console.log("You win")
    } else {
        data.gamesWithSameDoorLost++;
        console.log("You loose")
        } console.log("End Game")
    }

    let totalDoorChangePlayedGames = 0
    // Game(choice) : true = sameDoor, false = doorChange
    for (let i = 0; i < numberOfGameToPlay; i++) {
        var doorChangeGame = new Game(false); 
        data.totalDoorChangePlayedGames++;   
        if (doorChangeGame.won == true) {
            data.gamesWithDoorChangeWon++;
            console.log("You win")
        } else {
            data.gamesWithDoorChangeLost++;
            console.log("loose")
            }
        }

console.log("----- Game Statistics ------")
data.statsGamesWithSameDoorWon ();
console.log(data.statsGamesWithSameDoorWon(""), "of games were won when not switching door")
data.statsGamesWithSameDoorLost ();
console.log(data.statsGamesWithSameDoorLost(""), "of games were lost when not switching door")
data.statsGamesWithDoorChangeWon ();
console.log(data.statsGamesWithDoorChangeWon(""), "of games were won when switching door")
data.statsGamesWithDoorChangeLost ();
console.log(data.statsGamesWithDoorChangeLost(""), "of games were lost when switching door")

  console.log("Thank you for playing!")