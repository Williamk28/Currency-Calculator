'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = evt => {
    model = new Model();
    view = new View();
    //do any initialisation and "plumbing" here

    view.buttonClick((event)=>{
        if (event.target.id === "clear"){
            model.clear();
        } else if (event.target.id === "equals"){
            model.convert(model.visitDisplay, view.conversion());
        }
        else {
            model.appendNumber(event.target.id);
        }
        view.visitOutput(model.visitDisplay,model.homeDisplay);
    });
};


window.addEventListener("load", initialise);
