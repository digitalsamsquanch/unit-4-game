var chosen = "";
var myChar = "";

$(document).ready(function() {
  /* 
    - make object for each playable character
    - for each character make a variable for their hitpoints
    */
  var characters = [
    {
      name: "Rey",
      hitPoints: 150,
      counterattack: 20,
      picture: "assets/images/rey-red-saber.jpg"
    },
    {
      name: "Boba Fett",
      hitPoints: 100,
      counterattack: 50,
      picture: "assets/images/Boba2.jpeg"
    },
    {
      name: "Grievous",
      hitPoints: 200,
      counterattack: 10,
      picture: "assets/images/Grievous.jpg"
    },
    {
      name: "Phasma",
      hitPoints: 180,
      counterattack: 15,
      picture: "assets/images/Phasma.jpg"
    }
  ];

    $("body").on("click", ".charCol", function() {
        var existClass = $(this).attr("class");
        var notChosen = [];

        $(this).attr('class', existClass + ' chosenChar');
        notChosen = $(".charCol").not(".chosenChar")
        notChosen.hide();
        for(var i = 0; i < notChosen.length; i++){
            var notChosenValue = (notChosen[i].attributes[2].value);
            enemy = ($(".enemyCol")[i])
            enemyName = ($(".enemyCol")[i]).attributes["'value'"].value
            
            if(enemyName == notChosenValue){
                console.log("here");
                enemy.show()
            }
            console.log("enemy" + enemy)
            console.log("enemyName " + enemyName)
            console.log("chosen " + notChosenValue)
        }
    });

    $(".btn").click(function(){
        alert("hello")
    });

  function startGame(){
    for (var i = 0; i < characters.length; i++) {

        $(".charRow").append(
        $("<div id='cols" + i + "' class='col-md-2 cols charCol' 'value'='" + characters[i].name + "'></div>").append(
            $("<div class='card text-center cards'></div>").append(
            $("<div class='card-header'>" + characters[i].name + "</div>"),
            $(
                "<img class='card-img-top imgs' src=" + characters[i].picture + ">"
            ),
            $("<div class='card-footer'></div>").append(
                $(
                "<div id='" +
                    characters[i].name +
                    "'HP>" +
                    characters[i].hitPoints +
                    "</div>"
                )
            )
            )
        )
        );

        $(".enemyRow").append(
            $("<div id='cols" + i + "' class='col-md-2 cols enemyCol' 'value'='" + characters[i].name + "'></div>").append(
                $("<div class='card text-center cards'></div>").append(
                $("<div class='card-header'>" + characters[i].name + "</div>"),
                $(
                    "<img class='card-img-top imgs' src=" + characters[i].picture + ">"
                ),
                $("<div class='card-footer'></div>").append(
                    $(
                    "<div id='" +
                        characters[i].name +
                        "'HP>" +
                        characters[i].hitPoints +
                        "</div>"
                    )
                )
                )
            ).hide()
            );

        $(".defendRow").append(
            $("<div id='cols" + i + "' class='col-md-2 cols defendCol'></div>").append(
                $("<div class='card text-center cards'></div>").append(
                $("<div class='card-header'>" + characters[i].name + "</div>"),
                $(
                    "<img class='card-img-top imgs' src=" + characters[i].picture + ">"
                ),
                $("<div class='card-footer'></div>").append(
                    $(
                    "<div id='" +
                        characters[i].name +
                        "'HP>" +
                        characters[i].hitPoints +
                        "</div>"
                    )
                )
                )
            ).hide()
        )
    };

  };

  
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
   startGame();
});
