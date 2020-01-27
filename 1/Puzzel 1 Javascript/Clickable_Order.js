// Variables

let icon1 = false;
const order1 = 1;

let icon2 = false;
const order2 = 2;

let icon3 = false;
const order3 = 3;

let icon4 = false;
const order4 = 4;

let clicked = 0;

// On Click Functions

function Icon1(){
    if(clicked = 0){
        icon1 = true;
        clicked++;
    }
}

function Icon2(){
    if(clicked = 1){
        icon2 = true;
        clicked++;
    }
}

function Icon3(){
    if(clicked = 2){
        icon3 = true;
        clicked++;
    }
}

function Icon4(){
    if(clicked = 3){
        icon4 = true;
        clicked = 0;
        icon1 = false;
        icon2 = false;
        icon3 = false;
        icon4 = false;
        Debug.Log("Level Completed")
    }
}