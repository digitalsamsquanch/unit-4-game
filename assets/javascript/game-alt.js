var chosen = "";
var myChar = "";
var enemyName = [];
var notChosenID = [];
var enemy = 

$(document).ready(function() {
  /* 
    - make object for each playable character
    - for each character make a variable for their hitpoints
    */
  var characters = [
    {
      name: "Rey",
      id: "rey",
      hitPoints: 150,
      counterattack: 20,
      picture: "assets/images/rey-red-saber.jpg"
    },
    {
      name: "Boba Fett",
      id: "bobafett",
      hitPoints: 100,
      counterattack: 50,
      picture: "assets/images/Boba2.jpeg"
    },
    {
      name: "Grievous",
      id: "grievous",
      hitPoints: 200,
      counterattack: 10,
      picture: "assets/images/Grievous.jpg"
    },
    {
      name: "Phasma",
      id: "phasma",
      hitPoints: 180,
      counterattack: 15,
      picture: "assets/images/Phasma.jpg"
    }
  ];

    $("body").on("click", ".charCol", function() {
        var existClass = $(this).attr("class");
        var notChosen = [];

        $(this).attr('class', existClass + ' chosenChar');

        console.log(characters[0].id);
        for(var index = 0; index < characters.length; index++){
            if($(characters[index]).id != this.id){
                $(".enemyCol").show();
            }
        }
        notChosen = $(".charCol").not(".chosenChar")
        // console.log("Not Chose" + notChosen)
        notChosen.hide();
        for(var i = 1; i < 4; i++){
            // nID = notChosen[i].attributes.id.value;
            // notChosenID.push(nID);
            eName = $(".enemyRow")[0].childNodes[1].attributes.id.value
            console.log(eName);
            enemy.push(eName);
            enemyName.push(enemy);
            console.log(enemyName)
            // return enemyName;
        }
        // gives the list of values in the 
        // console.log("Enemy " + enemyName);
        // console.log(notChosenID);
        for(var i = 0; i < 3; i++){
        if(!enemyName.includes(notChosenID[i])){
            console.log("here");
            enemy.show()
        }
        }
    });
    //     $(this).attr('class', existClass + ' chosenChar');
    //     notChosen = $(".charCol").not(".chosenChar")
    //     console.log("Not Chose" + notChosen)
    //     notChosen.hide();
    //     for(var i = 1; i < 4; i++){
    //         // nID = notChosen[i].attributes.id.value;
    //         // notChosenID.push(nID);
    //         eName = $(".enemyRow")[0].childNodes[1].attributes.id.value
    //         console.log(eName);
    //         enemy.push(eName);
    //         enemyName.push(enemy);
    //         console.log(enemyName)
    //         // return enemyName;
    //     }
    //     // gives the list of values in the 
    //     // console.log("Enemy " + enemyName);
    //     // console.log(notChosenID);
    //     for(var i = 0; i < 3; i++){
    //     if(!enemyName.includes(notChosenID[i])){
    //         console.log("here");
    //         enemy.show()
    //     }
    //     }
    // });

    $(".btn").click(function(){
        alert("hello")
    });

  function startGame(){
    for (var i = 0; i < characters.length; i++) {

        $(".charRow").append(
        $("<div id='" + characters[i].id + "' class='col-md-2 cols charCol'></div>").append(
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
            $("<div id='" + characters[i].id + "' class='col-md-2 cols enemyCol'></div>").append(
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
            $("<div id='" + characters[i].id + "' class='col-md-2 cols defendCol'></div>").append(
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
