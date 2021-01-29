'use strict';

class Model {
    constructor(){
        this.visitDisplay = "";
        this.homeDisplay = "";
    }

    appendNumber(number){
        this.visitDisplay += number;
    }

    clear(){
        this.visitDisplay = "";
        this.homeDisplay = "";
    }

    convert(value, away, home, fee){
        let result;
        if (away === home){
            result = (value * fee);
        } else {
            result = Math.round(((value / away) * home) * fee);
        }
        this.homeDisplay = result;
    }

}