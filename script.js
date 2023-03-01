// Score sheet function

var pScore =  159
var pScoreElement = document.querySelector("#pScore");

console.log(pScoreElement);

function add() {
    pScore++;
    pScoreElement.innerText = pScore
    console.log(pScore);
}

var nScore =  314
var nScoreElement = document.querySelector("#nScore");

console.log(nScoreElement);

function addN() {
    nScore++;
    nScoreElement.innerText = nScore
    console.log(nScore);
}

// box function

var neverBox
var neverBoxElement = document.querySelector("#neverBox")

function hide() {
    neverBoxElement.remove();
}

// countdown function

window.onload = setTimeout(function(){
     alert('The Ninjas have Won!!');
},13000);