var chosen;
var myChar = "";

var characters = {
    rey: {
        name:  "Rey",
        hitPoints: 150,
        counterattack: 20
    },
    boba: {
        name: "Boba Fett",
        hitPoints: 100,
        counterattack: 50
    },
    grievous: {
        name: "Grievous",
        hitPoints: 200,
        counterattack: 10
    },
    phasma: {
        name: "Phasma",
        hitPoints: 180,
        counterattack: 15
    }
};

$(document).ready(function(){
/* 
- make object for each playable character
- for each character make a variable for their hitpoints
*/

$(".charCol").click(function(){
    if(myChar == "") {
        myChar = $(this);
        console.log(myChar);
        chosen = $(myChar).attr("value");
        console.log(chosen)
    };
    // console.log(chosen)
    if(chosen == "rey"){
        
    }
});

    
/*
- create a counterattack power level for each character and assign variable
- when character is selected, move the rest of the characters to the "enemies available to attack" area

- when user selects enemy, move that enemy to the "Defender" area
- create attack button
- set base attack power at 6 and set it to increase by 6 every time attack takes place
- subtract the attacks from the hitpoints of the defender
- have a counter attack by the defender after each attack from the player and subtract that from the player hitpoints
- end the game if player reaches 0 hitpoints
- have user select new defender when they defeat a defender
- once final defender is beaten declare the player the winner
*/
});