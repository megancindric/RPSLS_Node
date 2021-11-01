const prompt = require("prompt-sync")();

class Player{

    constructor(name){
        this.name = name;
        this.score = 0;
        this.selectedGesture = "";
        this.gestureList = ["rock", "paper", "scissors", "lizard", "spock"];
    }

    selectGesture(){
        this.selectedGesture = "";
        while(!this.gestureList.includes(this.selectedGesture)){
            this.selectedGesture = prompt("Please enter gesture choice: ").toLowerCase();
        }
    }
}

module.exports = {
    Player: Player
}