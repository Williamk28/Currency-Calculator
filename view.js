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

    visitOutput(visit,home){
        document.getElementById("visiting").value = visit;
        document.getElementById("home").value = home;
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
