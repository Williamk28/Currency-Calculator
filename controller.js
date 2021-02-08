'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = () => {
    model = new Model();
    view = new View();
    //do any initialisation and "plumbing" here

    if(navigator.onLine === true){
        console.log("ONLINE");
        if (model.getLiveDate() === model.getDateStorage()){
            console.log("Rates have already been updated... Getting Rates from storage");
            model.getRatesStorage();
        } else {
            console.log("Getting Live Rates");
            model.getLiveRates();
        }
    } else {
        console.log("OFFLINE");
        model.getRatesStorage();
    }
    model.getCurrencyStorage(view.getVisitList(), view.getHomeList());
    view.insertBankFee(model.getBankStorage());

    view.calculatorClick((event)=>{
        if (event.target.id === "clear"){
            model.clear();
        } else if (event.target.id === "equals"){
            let visit = model.getVisitRates(view.getVisitCurrency());
            let home = model.getHomeRates(view.getHomeCurrency());
            let value = model.display;
            let fee = model.bankFee(view.getBankFee());
            model.convert(value, visit, home, fee);
        }
        else {
            model.appendNumber(event.target.id);
        }
        view.display(model.display);
    });

    view.radioClick(()=>{
        view.getVisitCurrency();
        view.getHomeCurrency();
        model.setCurrencyStorage(view.getVisitList(), view.getHomeList());
    });

    view.bankFeeClick(()=>{
        model.setBankStorage(view.getBankFee());
    });
};


window.addEventListener("load", initialise);
