let youScore = 0;
let pcScore = 0;
const youScore_span = document.getElementById("you-score");
const pcScore_span = document.getElementById("pc-score");
const tableScore_div = document.querySelector (".table-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getpcChoice (){
    const choices = ['r', 'p', 's']
    const randomnumber = Math.floor(Math.random() * 3);
    return choices [randomnumber];
}

function convertToWord (letter){
    if (letter === "r") return "Piedra";
    if (letter === "p") return "Papel";
    return "Tijéras"
}

function win (youChoice, pcChoice) {
    youScore++;
    youScore_span.innerHTML = youScore;
    pcScore_span.innerHTML = pcScore;
    console.log(youChoice);
    console.log (pcChoice);
    result_p.innerHTML = convertToWord(youChoice) + " gana a "+ convertToWord (pcChoice) + ". Tú ganas! 🎉🥇";
    document.getElementById(youChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(youChoice).classList.remove('green-glow')},400);
}

function lose (youChoice, pcChoice) {
    pcScore++;
    youScore_span.innerHTML = youScore;
    pcScore_span.innerHTML = pcScore;
    console.log(youChoice);
    console.log (pcChoice);
    result_p.innerHTML = convertToWord(youChoice) + " pierde contra " + convertToWord (pcChoice) + ". Tú pierdes! 👎";
    document.getElementById(youChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(youChoice).classList.remove('red-glow')},400);
}
function draw (youChoice, pcChoice) {
    result_p.innerHTML = convertToWord(youChoice) + " es igual a "+ convertToWord (pcChoice) + ". Es un empate 🌗";
    document.getElementById(youChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(youChoice).classList.remove('gray-glow')},400);
}
function game (youChoice) {
    const pcChoice = getpcChoice();
    switch (youChoice + pcChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log ("Haz ganado");
            win (youChoice, pcChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log ("Haz perdido");
            lose (youChoice, pcChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log ("Es un empate");
            draw (youChoice, pcChoice);
            break;
         
    }
    
}

function main (){

    rock_div.addEventListener('click', function() { 
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main ();