class Game {


    constructor(){
        this.playerOne;
        this.playerTwo;
    }

    displayWelcomeRules(){

    }

    selectGameMode(){

    }
    playBestOfThree(){
        //While p1 & p2 scores are below 3...
    }
    singleRound(){

    }

    compareGestures(){
        console.log(`${this.playerOne.name} selected ${this.playerOne.selectedGesture}`);
        console.log(`${this.playerTwo.name} selected ${this.playerTwo.selectedGesture}`);

        if(this.playerOne.selectedGesture === this.playerTwo.selectedGesture){
            console.log("Tie game!  Let's go again!")
        }
        else if(this.playerOne.selectedGesture == "rock"){
            if(this.playerTwo.selectedGesture == "scissors" || this.playerTwo.selectedGesture == "lizard"){
                displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
        else if(this.playerOne.selectedGesture == "paper"){
            if(this.playerTwo.selectedGesture == "rock" || this.playerTwo.selectedGesture == "spock"){
                displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
        else if(this.playerOne.selectedGesture == "scissors"){
            if(this.playerTwo.selectedGesture == "paper" || this.playerTwo.selectedGesture == "lizard"){
                displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
        else if(this.playerOne.selectedGesture == "lizard"){
            if(this.playerTwo.selectedGesture == "spock" || this.playerTwo.selectedGesture == "paper"){
                displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
        else if(this.playerOne.selectedGesture == "spock"){
            if(this.playerTwo.selectedGesture == "rock" || this.playerTwo.selectedGesture == "scisors"){
                displayRoundResults(this.playerOne, this.playerTwo);
            }
            else{
                displayRoundResults(this.playerTwo, this.playerOne);
            }
        }
    }
    
    displayRoundResults(winner, loser){
        console.log(`${winner.selectedGesture} beats ${loser.selectedGesture}`);
        console.log(`This round goes to ${winner.name}`);    
        winner.score++;
    }
}