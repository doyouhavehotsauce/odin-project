const gameBtns = `<div id="gme-btn-wrp">` +
                `<button class="game-btn" id="rock">Rock</button>` +
                `<button class="game-btn" id="paper">Paper</button>` + 
                `<button class="game-btn" id="scissors">Scissors</button>` +
                `</div>`;
const newGameBtn = `<button class="" id="new-game">Play Again</button>`;
const startGameBtn = `<button class="game-btn" id="play">Play!</button>`;
const countdownArr = [
    'rock', 'paper', 'scissors', 'shoot!'  
];

let playerSelection = '';
let computerSelection ;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let winMsg = 'You Win!';
let loseMsg = 'You Lose :( ';



// need to create function to run game, keep track of score, and update round counter
function game(){
    if (playerScore === 5){
        $('#game-status').text('You Win!');
        $('div#gme-btn-wrp').remove();
        console.log('btn cont empty ran');
        restartGame();
        
    } else if (computerScore === 5){
        $('#game-status').text('You Lose :(');
        $('div#gme-btn-wrp').remove();
        console.log('btn cont empty ran');
        restartGame();

        
    } else {

    }

    playerMove()



}




// function that makes computer selection
function computerPlay(){
    let computerPlay = Math.floor( Math.random() * 10 );

    if ( computerPlay <= 3){
        computerSelection = 'rock';
        //return computerSelection
    } else if (computerPlay >= 4 && computerPlay <= 7){
        computerSelection = 'paper';
        //return computerSelection
    } else {
        computerSelection = 'scissors';
        //return computerSelection
    }
    checkResults();
    return computerSelection
}





// function that stores player selection
function playerMove(){
//append the game choice buttons to div
$('#btn-container').append(gameBtns);
//bind event listners
$('#rock').bind('click', ()=> {
    playerSelection = 'rock';
    $('.game-btn').remove();
    computerPlay();

})

$('#paper').bind('click', ()=>  {
    playerSelection = 'paper';
    $('.game-btn').remove();
    computerPlay();

})

$('#scissors').bind('click', ()=>  {
    playerSelection = 'scissors';
    $('.game-btn').remove();
    computerPlay();

}) 


}


// function to see who won the round
function checkResults(){
    $('#btn-container').empty();
    
    if (computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'scissors' && playerSelection == 'paper' || computerSelection == 'paper' && playerSelection == 'rock'){
        computerScore += 1;

        $('#game-status').text(`You chose ${playerSelection} and computer chose ${computerSelection}: you lose`);
        $('#player-score').text(playerScore);
        $('#computer-score').text(computerScore);

    } else if (computerSelection == 'paper' && playerSelection == 'scissors' || computerSelection == 'rock' && playerSelection == 'paper' || computerSelection == 'scissors' && playerSelection == 'rock'){
        playerScore += 1

        $('#game-status').text(`You chose ${playerSelection} computer chose ${computerSelection}: you win!`);
        $('#player-score').text(playerScore);
        $('#computer-score').text(computerScore);
    } else {
        $('#game-status').text(`You chose ${playerSelection} computer chose ${computerSelection}: it's a tie!`);
        $('#player-score').text(playerScore);
        $('#computer-score').text(computerScore);
    }
    game()
}





function startANewGame(){
    console.log('start a new game func running');
    playerScore = 0;
    computerScore = 0;
    $('#player-score').text(playerScore);
    $('#computer-score').text(computerScore);
    
    $('#btn-container').append(startGameBtn);
    $('#new-game').bind('click', ()=> {
        console.log('new game button clicked, remove is next');
        $('#new-game').remove();
        
        topOfGame();
    })
}






function restartGame(){
    console.log('restart game func ran');
    $('div#gme-btn-wrp').remove();
    $('#btn-container').append(newGameBtn);
    $('#new-game').bind('click', ()=> {
        console.log('new game button was clicked');
        $('#new-game').remove();
        startANewGame();
        
    })
}

function topOfGame(){
    console.log('top of game fun ran');
    $('#btn-container').append(startGameBtn);
    $('#play').bind('click', ()=> {
        $('#play').remove();
        game();
        
    })
}



// $('#new-game').bind('click', ()=> {

//     $('#new-game').remove()

//     const newGame = setTimeout(topOfGame, 300)
// })





$(document).ready(function() {
    topOfGame();
});
