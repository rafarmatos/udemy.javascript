/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScore, activePlayer, gamePlaying, lastDice;

newGame();



document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying){
        // Ramdom number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // Mostrar resultado
        var diceDOM1 = document.getElementById('dice-1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        var diceDOM2 = document.getElementById('dice-2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';


        // Atualizar score, se resultado não for igual a 1
        if (dice1 !== 1 && dice2 !== 1){
            // Adicionar score
            roundScore += dice1 + dice2;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore
        }else{
            setTimeout(nextPlayer,1000);
        }


        /*// Atualizar score, se resultado não for igual a 1
        if (dice === 6 && lastDice === 6){
            //perde tudo
            scores[activePlayer] = 0;
            document.querySelector('#score-'+ activePlayer).textContent = '0';
            setTimeout(nextPlayer,1000);
        }
        else if (dice !== 1){
            // Adicionar score
            roundScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore
        }else{
            setTimeout(nextPlayer,1000);
        }

        lastDice = dice;*/
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying){
        //Adicionar global score
        scores[activePlayer] += roundScore;

        //atualizar user interface
        document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        // Undefined, 0, null or "" are coerced to false
        //qualquer coisa fora disso não é coeso
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }

        //verificar se ganhou
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Vencedor!'
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();
        }


    }


})


function nextPlayer() {
    // Proximo player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Esse "toggle" tiver ativo ele remove, se não tiver ativo, ele ativa
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}

function newGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

}


document.querySelector('.btn-new').addEventListener('click', newGame)

