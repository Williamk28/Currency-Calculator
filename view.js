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

    conversion(){
        let currency = 0;
        if (document.getElementById("awayCurrency").value !== document.getElementById("homeCurrency").value){
            if (document.getElementById("awayCurrency").value === "EUR"){
                if (document.getElementById("homeCurrency").value === "GBP"){
                    currency = 0.88603;
                } else if (document.getElementById("homeCurrency").value === "PLN"){
                    currency = 4.5471;
                }
            }
            else if (document.getElementById("awayCurrency").value === "GBP"){
                if (document.getElementById("homeCurrency").value === "EUR"){
                    currency = 1.1286;
                } else if (document.getElementById("homeCurrency").value === "PLN"){
                    currency = 5.14049;
                }
            }
            else if (document.getElementById("awayCurrency").value === "PLN"){
                if (document.getElementById("homeCurrency").value === "EUR"){
                    currency = 0.219947;
                } else if (document.getElementById("homeCurrency").value === "GBP"){
                    currency = 0.194534;
                }
            }
        }
        return currency;
    }

}
