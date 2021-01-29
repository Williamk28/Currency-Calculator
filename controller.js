'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = evt => {
    model = new Model();
    view = new View();
    view.getStorage();
    //do any initialisation and "plumbing" here

    view.buttonClick((event)=>{
        if (event.target.id === "clear"){
            model.clear();
        } else if (event.target.id === "equals"){
            let away = view.getCurrency(view.getAwayCurrency());
            let home = view.getCurrency(view.getHomeCurrency());
            model.convert(model.visitDisplay, away, home, view.bankFee());
        }
        else {
            model.appendNumber(event.target.id);
        }
        view.visitOutput(model.visitDisplay,model.homeDisplay);
        view.setStorage();
    });
};


window.addEventListener("load", initialise);
