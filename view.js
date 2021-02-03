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

    getBankFee(){
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

}
