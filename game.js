"use strict"
const prompt = require("prompt-sync")();
const {Human} = require("./human");
const {AI} = require("./ai");
class Game {


    constructor(){
        this.playerOne;
        this.playerTwo;
    }

    displayWelcomeRules(){
        console.log("Welcome to Rock-Paper-Scissors-Lizard-Spock!  Here be the rules:")
        console.log(`
        Rock crushes Scissors
        Scissors cuts Paper
        Paper covers Rock
        Rock crushes Lizard
        Lizard poisons Spock
        Spock smashes Scissors
        Scissors decapitates Lizard
        Lizard eats Paper
        Paper dispoves Spock
        Spock vaporizes Rock
        `)
    }

    selectGameMode(){
        let gameMode = prompt("Press 1 for PvP.  Press 2 for PvAI. ");
        if(gameMode == "1"){
            console.log("PvP Selected")
            console.log("*******************************************************************************************************");
            this.playerOne = new Human();
            this.playerTwo = new Human();
        }
        else if(gameMode == "2"){
            console.log("PvAI Selected");
            console.log("*******************************************************************************************************");
            this.playerOne = new Human();
            this.playerTwo = new AI();
        }
        else{
            console.log("Invalid choice - try again!")
            this.selectGameMode();
        }
    }
    playBestOfThree(){
        while(this.playerOne.score < 2 && this.playerTwo.score < 2){
            this.singleRound();
        }
    }
    singleRound(){
        console.log("Let the round begin!")
        console.log("*******************************************************************************************************");
        this.playerOne.selectGesture();
        this.playerTwo.selectGesture();
        this.compareGestures();
    }

    runGame(){
        this.displayWelcomeRules();
        this.selectGameMode();
        this.playBestOfThree();
        this.displayGameWinner();
        this.checkForReplay();
    }

    compareGestures(){
        console.log(`${this.playerOne.name} selected ${this.playerOne.selectedGesture}`);
        console.log(`${this.playerTwo.name} selected ${this.playerTwo.selectedGesture}`);

        if(this.playerOne.selectedGesture === this.playerTwo.selectedGesture){
            console.log("Tie game!  Let's go again!")
        }
        else if(this.playerOne.selectedGesture == "rock"){
            if(this.playerTwo.selectedGesture == "scissors" || this.playerTwo.selectedGesture == "lizard"){
                this.displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                this.displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
        else if(this.playerOne.selectedGesture == "paper"){
            if(this.playerTwo.selectedGesture == "rock" || this.playerTwo.selectedGesture == "spock"){
                this.displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                this.displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
        else if(this.playerOne.selectedGesture == "scissors"){
            if(this.playerTwo.selectedGesture == "paper" || this.playerTwo.selectedGesture == "lizard"){
                this.displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                this.displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
        else if(this.playerOne.selectedGesture == "lizard"){
            if(this.playerTwo.selectedGesture == "spock" || this.playerTwo.selectedGesture == "paper"){
                this.displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                this.displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
        else if(this.playerOne.selectedGesture == "spock"){
            if(this.playerTwo.selectedGesture == "rock" || this.playerTwo.selectedGesture == "scisors"){
                this.displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                this.displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
    }
    
    displayRoundResults(winner, loser){
        console.log(`${winner.selectedGesture} beats ${loser.selectedGesture}`);
        console.log(`This round goes to ${winner.name}`);    
        winner.score++;
    }

    displayGameWinner(){
        if(this.playerOne.score > this.playerTwo.score){
            console.log(`This game's winner is: ${this.playerOne.name}!`);
        }
        else{
            console.log(`This game's winner is: ${this.playerTwo.name}!`);
        }
    }

    checkForReplay(){
        let userInput = prompt("Press 1 to play again, press 2 to exit!")

        if(userInput == 1){
            this.runGame()
        }
        else if (userInput == 2){
            return
        }
        else{
            console.log("Invalid input - try again!");
            this.checkForReplay();
        }
    }
}

module.exports = {
    Game: Game
}