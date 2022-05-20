let esketchWrap = document.getElementById('esketch-wrap');
let resetBtn = document.getElementById('reset');
let slider = document.getElementById('square-range');
let refreshBoard = document.getElementById('refresh-board');

let rgb = [];
let square = `<div class='square' style="background: rgb(255, 255, 255);"></div>`;
let x = 20;


// Event Listeners
resetBtn.addEventListener('click', ()=> {
    clearSketch();
})
slider.addEventListener('input', () => {
    document.getElementById('square-size').textContent = `${slider.value} x ${slider.value}`
    x = slider.value;
})
refreshBoard.addEventListener('click', () => {
    updateEtchBoard();
})





function setColandRows(){
    esketchWrap.style.gridTemplateColumns = `repeat(${x}, 1fr)` ;
    esketchWrap.style.gridTemplateRows = `repeat(${x}, 1fr)` ;
    makeSquares();
}


function makeSquares(){
    for(i = 0; i < (x * x); i++){
        esketchWrap.innerHTML += square;
    }
    setHoverState();
}


function updateEtchBoard(){
    while(esketchWrap.hasChildNodes()){
        esketchWrap.removeChild(esketchWrap.firstChild);
    }
    clearSketch();
    setColandRows();
}


function setHoverState(){
    let getSquare = document.getElementsByClassName('square');

    

    setTimeout( () => {
        for(let el of getSquare){
            el.addEventListener('mouseover', () => {
                randomBGcolor()
                el.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
                console.log(`mouseover heard look at colors:(${rgb} - such colors!`)
            }, false);
        }
    }, 500);
}


function clearSketch(){
    let getSquare = document.querySelectorAll('div.square');

    for(let el of getSquare){
        el.style.background = '#fff'
    }
}

function randomBGcolor(){
    rgb = []

    let min = 50;
    let max = 200;
        
    for(let i = 0; i < 3; i++){
        let randomNum = Math.floor(Math.random() * (max - min + 1)+min);
        rgb.push(randomNum)
    }
}




document.addEventListener('DOMContentLoaded', () => {
    setColandRows();
  });



  