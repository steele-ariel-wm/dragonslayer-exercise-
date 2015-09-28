/**
 * Created by session1 on 9/28/15.
 */

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
var slaying = false;
while(slaying);
if(youHit)
{ console.log("Congratulations!")
    totalDamage += damageThisRound;
    if(totalDamage >= 4)
    { console.log("You win")
        slaying = false;
    } else {
        youHit = Math.floor(Math.random() * 2);
    }
} else {
    console.log("You lose!");
    slaying = false;
}
game();
function game() {
 var again = prompt("Do you want to play again? Yes or no?");
    if(again === "yes")
    {
        var slaying = true;
        var youHit = Math.floor(Math.random() * 2);
        var damageThisRound = Math.floor(Math.random()*5 + 1);
        var totalDamage = 0;
        var slaying = false;
        while(slaying);
        if(youHit)
        { console.log("Congratulations!")
            totalDamage += damageThisRound;
            if(totalDamage >= 4)
            { console.log("You win")
                slaying = false;
            } else {
                youHit = Math.floor(Math.random() * 2);
            }
        } else {
            console.log("You lose!");
            slaying = false;
        }
    }
    game();
    else if (again === "no")
    {
        alert("GAME OVER")
    }
}