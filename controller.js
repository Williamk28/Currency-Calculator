'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = () => {
    model = new Model();
    view = new View();
    //do any initialisation and "plumbing" here

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
    view.getBankStorage();

    view.buttonClick((event)=>{
        if (event.target.id === "clear"){
            model.clear();
        } else if (event.target.id === "equals"){
            let away = model.getAwayRates(view.getAwayCurrency());
            let home = model.getHomeRates(view.getHomeCurrency());
            let value = model.display;
            let fee = model.bankFee(view.getBankFee());
            model.convert(value, away, home, fee);
        }
        else {
            model.appendNumber(event.target.id);
        }
        view.display(model.display);
    });

    view.radioClick(()=>{
        view.getAwayCurrency();
        view.getHomeCurrency();
        view.setStorage();
    });

    view.sideNavClick(()=>{
        view.sideNav();
    });

    view.bankFeeClick(()=>{
        view.setBankStorage();
    });
};


window.addEventListener("load", initialise);
