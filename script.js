var elDiceOne = document.getElementById('dice1');
var elDiceTwo = document.getElementById('dice2');
var elComeOut = document.getElementById('roll').querySelector('button');
var total1 = 0;
var total2 = 0;
var totalonedisplay = document.getElementById('totalplayer1');
var totaltwodisplay = document.getElementById('totalplayer2');
var winnerdisplay = document.getElementById('winner');
var resetButton = document.getElementById('reset').querySelector('button');

elComeOut.onclick = function () {
    rollDice();
};

resetButton.onclick = function () {
    resetGame();
};

function rollDice() {
    var diceOne = Math.floor((Math.random() * 6) + 1);
    total1 += diceOne;
    var diceTwo = Math.floor((Math.random() * 6) + 1);
    total2 += diceTwo;
    console.log(diceOne + ' ' + diceTwo);

    for (var i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }

    for (var k = 1; k <= 6; k++) {
        elDiceTwo.classList.remove('show-' + k);
        if (diceTwo === k) {
            elDiceTwo.classList.add('show-' + k);
        }
    }

    totalonedisplay.textContent = `Total(Player1): ${total1}`;
    totaltwodisplay.textContent = `Total(Player2): ${total2}`;

    if (total1 >= 30) {
        winnerdisplay.textContent = 'Player 1 Wins!';
        elComeOut.disabled = true; // Disable the roll button after a win
    } else if (total2 >= 30) {
        winnerdisplay.textContent = 'Player 2 Wins!';
        elComeOut.disabled = true; // Disable the roll button after a win
    }
}

function resetGame() {
    total1 = 0;
    total2 = 0;

    totalonedisplay.textContent = `Total(Player1): ${total1}`;
    totaltwodisplay.textContent = `Total(Player2): ${total2}`;
    winnerdisplay.textContent = '';

    elDiceOne.className = 'dice dice-one show-1';
    elDiceTwo.className = 'dice dice-two show-1';

    elComeOut.disabled = false; // Re-enable the roll button
}
