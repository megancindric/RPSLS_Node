"use strict"
const prompt = require("prompt-sync")();
const {Player} = require("./player");
class Human extends Player {

    constructor(){
        let name = prompt("Please enter player name: ");
        super(name);
    }
}

module.exports = {
    Human: Human
}