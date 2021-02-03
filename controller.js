'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = evt => {
    model = new Model();
    view = new View();

    if(navigator.onLine === true){
        console.log("ONLINE");
        if (model.getLiveDate() > model.getStorageDate()){
            console.log("Getting Live Rates");
            model.getLiveRates();
        } else {
            console.log("Rates have already been updated... Getting rates from storage");
            model.getStorage();
        }
    } else {
        console.log("OFFLINE");
        model.getStorage();
    }

    view.getStorage();
    //do any initialisation and "plumbing" here

    view.buttonClick((event)=>{
        if (event.target.id === "clear"){
            model.clear();
        } else if (event.target.id === "equals"){
            let away = model.getAwayRates(view.getAwayCurrency());
            let home = model.getHomeRates(view.getHomeCurrency());
            let value = model.visitDisplay;
            let fee = view.bankFee();
            model.convert(value, away, home, fee);
        }
        else {
            model.appendNumber(event.target.id);
        }
        view.visitOutput(model.visitDisplay,model.homeDisplay);
        view.setStorage();
    });
};


window.addEventListener("load", initialise);
