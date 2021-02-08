'use strict';

let currency = [];
let rates = [];

class Model {
    constructor(){
        this.display = "";
    }

    appendNumber(number){
        this.display += number;
    }

    clear(){
        this.display = "";
    }

    convert(value, visit, home, fee){
        let result;
        if (visit === home){
            result = (value * fee);
        } else {
            result = Math.round(((value / visit) * home) * fee);
        }
        this.display = result;
    }

    bankFee(fee){
        if (fee === "0"){
            return 1;
        } else if (fee === "2"){
            return 1.02;
        } else if (fee === "4"){
            return 1.04;
        } else {
            return 1.06;
        }
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
            localStorage.setItem("Currency", JSON.stringify(currency));
            localStorage.setItem("Rates", JSON.stringify(rates));
            localStorage.setItem("Date", ECBRates.getAttribute("time"));
        });
        request.open("GET", "https://devweb2020.cis.strath.ac.uk/~aes02112/ecbxml.php", true);
        request.send();
    }

    getVisitRates(visit){
        let i;
        let visitRate;
        for (i = 0; i < currency.length; i++) {
            if (currency[i] === visit){
                visitRate = rates[i];
            }
        }
        return visitRate;
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

    getRatesStorage(){
        currency = JSON.parse(localStorage.getItem("Currency"));
        rates = JSON.parse(localStorage.getItem("Rates"));
        if ((currency === []) && (rates === [])){
            console.log("Local Storage is empty... Getting Live Rates");
            this.getLiveRates();
        }
    }

    getLiveDate(){
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth()+1;
        let date = today.getDate();

        if (date < 10){
            date = "0" + date;
        }

        if (month < 10){
            month = "0" + month;
        }
        return year + "-" + month + "-" + date;
    }

    getDateStorage(){
        let date;
        date = localStorage.getItem("Date");
        return date;
    }

    setBankStorage(fee){
        localStorage.setItem("fee", fee);
    }

    getBankStorage(){
        if (localStorage.getItem("fee") === null){
            return 0;
        } else {
            return localStorage.getItem("fee");
        }
    }

    setCurrencyStorage(visit,home){
        let i;
        let j;
        for(i = 0; i < visit.length; i++){
            if(visit[i].checked === true){
                localStorage.setItem("visitCurrency", visit[i].value);
                break;
            }
        }
        for(j = 0; j < home.length; j++){
            if(home[j].checked === true){
                localStorage.setItem("homeCurrency", home[j].value);
                break;
            }
        }
    }

    getCurrencyStorage(visit,home){
        let i;
        let j;
        for (i = 0; i < visit.length; i++){
            if (visit[i].value === localStorage.getItem("visitCurrency")){
                visit[i].checked = true;
                break;
            }
        }
        for (j = 0; j < home.length; j++){
            if (home[j].value === localStorage.getItem("homeCurrency")){
                home[j].checked = true;
                break;
            }
        }
    }
}