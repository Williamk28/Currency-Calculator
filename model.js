'use strict';

let currency = [];
let rates = [];

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

    getLiveRates(){
        let i;
        let xmlText = "";
        let ECBRates;
        let parser;
        let xmlDoc;
        let request = new XMLHttpRequest();
        request.addEventListener("load", function() {
            xmlText = request.responseText;
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmlText, "text/xml");
            ECBRates = xmlDoc.getElementsByTagName("Cube")[0].getElementsByTagName("Cube")[0];
            for (i = 0; i < 32; i++){
                currency[i] = ECBRates.getElementsByTagName("Cube")[i].getAttribute("currency");
                rates[i] = ECBRates.getElementsByTagName("Cube")[i].getAttribute("rate");
            }
            currency.push("EUR");
            rates.push("1");
        });
        console.log(currency);
        console.log(rates);
        request.open("GET", "https://devweb2020.cis.strath.ac.uk/~aes02112/ecbxml.php", true);
        request.send();
    }

    getAwayRates(away){
        let i;
        let awayRate;
        for (i = 0; i < currency.length; i++) {
            if (currency[i] === away){
                awayRate = rates[i];
            }
        }
        return awayRate;
    }

    getHomeRates(home){
        let i;
        let homeRate;
        for (i = 0; i < currency.length; i++){
            if (currency[i] === home){
                homeRate = rates[i];
            }
        }
        return homeRate;
    }
}