'use strict';

class View{
    constructor() {
    }

    buttonClick(listener){
        document.getElementById("9").addEventListener("click", listener);
        document.getElementById("8").addEventListener("click", listener);
        document.getElementById("7").addEventListener("click", listener);
        document.getElementById("6").addEventListener("click", listener);
        document.getElementById("5").addEventListener("click", listener);
        document.getElementById("4").addEventListener("click", listener);
        document.getElementById("3").addEventListener("click", listener);
        document.getElementById("2").addEventListener("click", listener);
        document.getElementById("1").addEventListener("click", listener);
        document.getElementById("0").addEventListener("click", listener);
        document.getElementById("clear").addEventListener("click", listener);
        document.getElementById("equals").addEventListener("click", listener);

    }

    visitOutput(away,home){
        document.getElementById("away").value = away;
        document.getElementById("home").value = home;
    }

    setStorage(){
        localStorage.setItem("homeCurrency", document.getElementById("homeCurrency").value);
        localStorage.setItem("awayCurrency", document.getElementById("awayCurrency").value);
    }

    getStorage(){
        if (localStorage.getItem("awayCurrency") === null){
            document.getElementById("awayCurrency").value = "EUR";
        } else {
            document.getElementById("awayCurrency").value = localStorage.getItem("awayCurrency");
        }
        if (localStorage.getItem("homeCurrency") === null){
            document.getElementById("homeCurrency").value = "GBP";
        } else {
            document.getElementById("homeCurrency").value = localStorage.getItem("homeCurrency");
        }
    }

    bankFee(){
        let fee;
        if (document.getElementById("bankFee").value === "0"){
            fee = 1;
        } else if (document.getElementById("bankFee").value === "2"){
            fee = 1.02;
        } else if (document.getElementById("bankFee").value === "4") {
            fee = 1.04;
        }
        else {
            fee = 1.06;
        }
        return fee;
    }

    getAwayCurrency(){
        return document.getElementById("awayCurrency").value;
    }

    getHomeCurrency(){
        return document.getElementById("homeCurrency").value;
    }

    getCurrency(rate){
        let currency;
        if (rate === "EUR"){
            currency = 1;
        } else if (rate === "GBP"){
            currency = 0.88603;
        } else if (rate === "PLN"){
            currency = 4.5471;
        } else if (rate === "USD"){
            currency = 1.2091;
        } else if (rate === "JPY"){
            currency = 126.20;
        } else if (rate === "BGN"){
            currency = 1.9558;
        } else if (rate === "CZK"){
            currency = 26.114;
        } else if (rate === "DKK"){
            currency = 7.4368;
        } else if (rate === "HUF"){
            currency = 360.34;
        } else if (rate === "RON"){
            currency = 4.8761;
        } else if (rate === "SEK"){
            currency = 10.5205;
        } else if (rate === "CHF"){
            currency = 1.0783;
        } else if (rate === "ISK"){
            currency = 156.00;
        } else if (rate === "NOK"){
            currency = 10.5205;
        } else if (rate === "HRK"){
            currency = 7.5652;
        } else if (rate === "RUB"){
            currency = 92.3842;
        } else if (rate === "TRY"){
            currency = 8.9313;
        } else if (rate === "AUD"){
            currency = 1.5914;
        } else if (rate === "BRL"){
            currency = 6.5857;
        } else if (rate === "CAD"){
            currency = 1.5564;
        } else if (rate === "CNY"){
            currency = 7.8226;
        } else if (rate === "HKD"){
            currency = 9.3742;
        } else if (rate === "IDR"){
            currency = 17069.17;
        } else if (rate === "ILS"){
            currency = 3.9825;
        } else if (rate === "INR"){
            currency = 88.3210;
        } else if (rate === "KRW"){
            currency = 1350.76;
        } else if (rate === "MXN"){
            currency = 24.7187;
        } else if (rate === "MYR"){
            currency = 4.8914;
        } else if (rate === "NZD"){
            currency = 1.7008;
        } else if (rate === "PHP"){
            currency = 58.126;
        } else if (rate === "SGD"){
            currency = 1.6119;
        } else if (rate === "THB"){
            currency = 36.315;
        } else if (rate === "ZAR"){
            currency = 18.4355;
        }
        return currency;
    }

}
