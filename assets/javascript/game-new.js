$(document).ready(function(){
    /* 
    - make object for each playable character
    - for each character make a variable for their hitpoints
    */
    var characters = [
        {
            name:  "Rey",
            hitPoints: 150,
            counterattack: 20,
            picture: "../images/rey-red-saber.jpg"
        },
        {
            name: "Boba Fett",
            hitPoints: 100,
            counterattack: 50,
            picture: "../images/Boba2.jpeg"
        },
        {
            name: "Grievous",
            hitPoints: 200,
            counterattack: 10,
            picture: "../images/Grievous.jpg"
        },
        {
            name: "Phasma",
            hitPoints: 180,
            counterattack: 15,
            picture: "../images/Phasma.jpg"
        }
    ]
    
    for(var i = 0; i< characters.length; i++){
        $(".charRow").append("<div class='col-md-2 charCol'></div>");
        $(".charCol").append("<div class='card text-center charCard'></div>");
        $(".charCard").append("<div class='card-header'>" + characters[i].name + "</div>");
        // $(".card-header").html("<img class='card-img-top charImg' src=" + characters)

    }
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