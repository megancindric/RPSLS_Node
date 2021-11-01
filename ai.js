"use strict";
const {Player} = require("./player");
class AI extends Player {

    constructor(){
        super("The Iron Giant");
    }

    selectGesture(){
        let selection = Math.floor(Math.random() * this.gestureList.length);
        this.selectedGesture = this.gestureList[selection];
    }
}

module.exports = {
    AI: AI
}