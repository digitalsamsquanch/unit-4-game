var chosen = "";
var myChar = "";
var enemyName = [];
var notChosen = [];
var enemyList = [];
var attackPower = 6;
var attackCounter = 0;
var currentEnemy;

$(document).ready(function() {
  var characters = [
    {
      name: "Rey",
      id: "rey",
      hitPoints: 150,
      counterattack: 15,
      picture: "assets/images/rey-red-saber.jpg"
    },
    {
      name: "Boba Fett",
      id: "bobafett",
      hitPoints: 100,
      counterattack: 7,
      picture: "assets/images/Boba2.jpeg"
    },
    {
      name: "Grievous",
      id: "grievous",
      hitPoints: 200,
      counterattack: 5,
      picture: "assets/images/Grievous.jpg"
    },
    {
      name: "Phasma",
      id: "phasma",
      hitPoints: 180,
      counterattack: 10,
      picture: "assets/images/Phasma.jpg"
    }
  ];

    $("body").on("click", ".charCol", function() {
        
        $(this).addClass('chosenChar');
        $(".charCol:not(.chosenChar)").hide();
        notChosen = $(".charCol:not(.chosenChar)");
        for(var i = 0; i < characters.length; i++){
            if(characters[i].id != this.id){
                enemyList.push(characters[i].id)
            }
        }
        enemies = $(".enemyCol");
        for(var i = 0; i < enemies.length; i++){
            if(enemyList.includes($(enemies[i]).attr('id'))){
                $(enemies[i]).show();
            };
        };
    });
    $("body").on("click", ".enemyCol", function() {
        $(this).addClass("enemy1").hide();
        var defenders = $(".defendCol")
        for(var i = 0; i < defenders.length; i++){
            if($(defenders[i]).attr('id') == this.id){
                $(defenders[i]).show();
                currentEnemy = defenders[i];
            };
        };
    });

    $(".btn").click(function(){
        fight();
    });

    function fight() {
        
        var characterHP = $(".chosenChar").find(".cards").find(".card-footer").text();
        var enemyHP = $(currentEnemy).find(".cards").find(".card-footer").text();
        var enemyCounter = $(currentEnemy).attr("counterattack")
        attackCounter++
        var currentAP = attackPower * attackCounter;
        enemyHP = parseInt(enemyHP) - currentAP;
        characterHP = characterHP - enemyCounter;
        $(currentEnemy).find(".cards").find(".card-footer").text(enemyHP)
        $(".chosenChar").find(".cards").find(".card-footer").text(characterHP)
        $(".battleText").text("You have hit your opponent for " + currentAP + " damage! They have countered and hit you for " + enemyCounter + " damage!");
        console.log(enemyHP)
        console.log(attackCounter)
        console.log(currentAP)
        if(characterHP > 0 && enemyHP <= 0){
            if(!$(".enemyCol:visible").length == 0 && !$(".defendCol:visible").length == 0){
                $(".battleText").text("You have defeated your opponent");
                $(currentEnemy).hide()
            } else{
                $(".battleText").text("You have defeated all of your opponents!!!");
                $(currentEnemy).hide();
            };
        } 
        else if(characterHP <= 0){
            $(".battleText").text("You have been defeated!");
        }
        
    };

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
            $("<div id='" + characters[i].id + "' counterattack=" + characters[i].counterattack + " class='col-md-2 cols defendCol'></div>").append(
                $("<div class='card text-center cards'></div>").append(
                $("<div class='card-header'>" + characters[i].name + "</div>"),
                $(
                    "<img class='card-img-top imgs' src=" + characters[i].picture + ">"
                ),
                $("<div class='card-footer'></div>").append(
                    $(
                    "<div id='" +
                        characters[i].id +"HP'>" +
                        characters[i].hitPoints +
                        "</div>"
                    )
                )
                )
            ).hide()
        )
    };

  };
   startGame();
});
