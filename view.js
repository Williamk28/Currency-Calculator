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

    radioClick(listener){
        let away = document.getElementsByName("awayCurrency");
        let home = document.getElementsByName("homeCurrency");
        for (let i = 0 ; i < away.length; i++) {
            away[i].addEventListener('click' , listener ) ;
        }
        for (let j = 0 ; j < home.length; j++) {
            home[j].addEventListener('click' , listener ) ;
        }
    }

    sideNavClick(listener){
        document.getElementById("openCloseBtn").addEventListener("click", listener);
    }

    bankFeeClick(listener){
        document.getElementById("fee").addEventListener("click", listener);
    }

    display(away){
        document.getElementById("display").value = away;
    }

    setStorage(){
        let i;
        let j;
        let away = document.getElementsByName("awayCurrency");
        let home = document.getElementsByName("homeCurrency");
        for(i = 0; i < away.length; i++){
            if(away[i].checked === true){
                localStorage.setItem("awayCurrency", away[i].value);
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

    getStorage(){
        let i;
        let j;
        let away = document.getElementsByName("awayCurrency");
        let home = document.getElementsByName("homeCurrency");
        for (i = 0; i < away.length; i++){
            if (away[i].value === localStorage.getItem("awayCurrency")){
                away[i].checked = true;
                break;
            }
        }
        for (j = 0; j < away.length; j++){
            if (home[j].value === localStorage.getItem("homeCurrency")){
                home[j].checked = true;
                break;
            }
        }
    }

    getBankFee() {
        return document.getElementById("fee").value;
    }

    setBankStorage(){
        localStorage.setItem("fee", document.getElementById("fee").value);
    }

    getBankStorage(){
        if (localStorage.getItem("fee") === null){
            document.getElementById("fee").value = "0";
        } else {
            document.getElementById("fee").value = localStorage.getItem("fee");
        }
    }

    getAwayCurrency(){
        let value;
        let i = 0;
        let buttons = document.getElementsByName("awayCurrency");
        for(i; i < buttons.length; i++){
            if(buttons[i].checked === true){
                value = buttons[i].value;
                break;
            }
        }
        return value;
    }

    getHomeCurrency(){
        let value;
        let i;
        let buttons = document.getElementsByName("homeCurrency");
        for(i = 0; i < buttons.length; i++){
            if(buttons[i].checked === true){
                value = buttons[i].value;
                break;
            }
        }
        return value;
    }

    sideNav(){
        document.getElementById("sideNav").classList.toggle('active');
        document.getElementById("openCloseBtn").classList.toggle("change");
    }
}
