// Variables

let icon1 = false;

let icon2 = false;

let icon3 = false;

let icon4 = false;

let clicked = 0;

// On Click Functions

function Icon1(){
    if(clicked == 0){
        icon1 = true;
        clicked++;
    }
    else{
        clicked = 0;
        icon1 = false;
        icon2 = false;
        icon3 = false;
        icon4 = false;
        console.log("Level Failed")
        console.log(clicked + icon1 + icon2 + icon3 + icon4)
    }
}

function Icon2(){
    if(clicked == 1){
        icon2 = true;
        clicked++;
    }
    else{
        clicked = 0;
        icon1 = false;
        icon2 = false;
        icon3 = false;
        icon4 = false;
        console.log("Level Failed")
        console.log(clicked + icon1 + icon2 + icon3 + icon4)
    }
}

function Icon3(){
    if(clicked == 2){
        icon3 = true;
        clicked++;
    }
    else{
        clicked = 0;
        icon1 = false;
        icon2 = false;
        icon3 = false;
        icon4 = false;
        console.log("Level Failed")
        console.log(clicked + icon1 + icon2 + icon3 + icon4)
    }
}

function Icon4(){
    if(clicked == 3){
        icon4 = true;
        clicked = 0;
        icon1 = false;
        icon2 = false;
        icon3 = false;
        icon4 = false;
        console.log("Level Completed")
        console.log(clicked + icon1 + icon2 + icon3 + icon4)
    }
    else{
        clicked = 0;
        icon1 = false;
        icon2 = false;
        icon3 = false;
        icon4 = false;
        console.log("Level Failed")
        console.log(clicked + icon1 + icon2 + icon3 + icon4)
    }
}