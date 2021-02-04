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

    visitOutput(away){
        document.getElementById("display").value = away;
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

    getBankFee() {
        return document.getElementById("fee").value;
    }

    getAwayCurrency(){
        return document.getElementById("awayCurrency").value;
    }

    getHomeCurrency(){
        return document.getElementById("homeCurrency").value;
    }

}
