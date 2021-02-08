'use strict';

class View{
    constructor() {
        document.getElementById("openCloseButton").addEventListener("click", this.sideNav);
        document.getElementById("about").addEventListener("click", this.about);
        document.getElementsByClassName("close")[0].addEventListener("click", this.closeAbout);
    }

    calculatorClick(listener){
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
        let visit = document.getElementsByName("visitCurrency");
        let home = document.getElementsByName("homeCurrency");
        for (let i = 0 ; i < visit.length; i++) {
            visit[i].addEventListener('click' , listener ) ;
        }
        for (let j = 0 ; j < home.length; j++) {
            home[j].addEventListener('click' , listener ) ;
        }
    }
    bankFeeClick(listener){
        document.getElementById("fee").addEventListener("click", listener);
    }
    display(value){
        document.getElementById("display").value = value;
    }
    getVisitList(){
        return document.getElementsByName("visitCurrency");
    }

    getHomeList(){
        return document.getElementsByName("homeCurrency");
    }

    getBankFee(){
        return document.getElementById("fee").value;
    }

    insertBankFee(fee){
        document.getElementById("fee").value = fee;
    }

    getVisitCurrency(){
        let value;
        let i = 0;
        let buttons = document.getElementsByName("visitCurrency");
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
        document.getElementById("sideNav").classList.toggle("active");
        document.getElementById("openCloseButton").classList.toggle("active");
        document.getElementById("openCloseButton").classList.toggle("change");
    }

    about(){
        document.getElementById("aboutBackground").style.display = "block";
    }

    closeAbout(){
        document.getElementById("aboutBackground").style.display = "none";
    }

}
