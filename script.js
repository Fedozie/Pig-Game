var player1, player2;

document.querySelector("#edit-names").addEventListener("click", function(){
    player1 = prompt('Dear Player 1, please put in your name.');
    player2 = prompt('Dear Player 2, please put in your name.');
    document.querySelector("#player1").innerHTML = player1;
    document.querySelector("#player2").innerHTML = player2;
    /*This code block takes in the name of the players and replaces it with the 
    place where player 1 and 2 where previously written*/
})


document.querySelector('#roll-dice').addEventListener("click", function(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    setTimeout(function(){
        document.querySelector('#img1').setAttribute("src", `Images/dice${randomNumber1}.png`)
    }, 650); //This is to set the time, it will take the dice before it settles on a random dice face

    setTimeout(function(){
        document.querySelector('#img2').setAttribute("src", `Images/dice${randomNumber2}.png`)
    }, 650); //This is to set the time, it will take the dice before it settles on a random dice face

    if(randomNumber1 > randomNumber2){
        setTimeout(function(){
            document.querySelector('#result').innerHTML = player1 + " 💪🏾 wins!";
        }, 650);

        var winSfx = new Audio('Sfx/winning-sfx.mp3');
        setTimeout(function(){
            winSfx.play()
        }, 650); 
    } else if(randomNumber2 > randomNumber1){
        setTimeout(function(){
            document.querySelector('#result').innerHTML = player2 + " 💪🏾 wins!";
        }, 650);

        var winSfx = new Audio('Sfx/winning-sfx.mp3');
        setTimeout(function(){
            winSfx.play()
        }, 650);
    }else{
        setTimeout(function(){
            document.querySelector('#result').innerHTML = "The players drew 🤭";
        }, 650);

        var drawSfx = new Audio('Sfx/draw-sfx.mp3');
        setTimeout(function(){
            drawSfx.play()
        }, 650);
    }
})