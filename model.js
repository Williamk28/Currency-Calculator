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

    convert(value, conversion){
        let result;
        if (conversion === 0){
            result = value;
        } else {
            result = Math.round(value * conversion);
        }
        this.homeDisplay = result;
    }

}