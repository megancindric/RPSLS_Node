class AI extends Player {

    constructor(){
        super("The Iron Giant");
    }

    selectGesture(){
        let selection = Math.floor(Math.random() * this.gestureList.length);
        this.selectedGesture = this.gestureList[selection];
    }
}