newGame();

function draw(sqrv) {
    var isNull = checkIt(sqrv);
    if (isNull) {
        var player = plTurn();
        $(sqrv).html(player);
        wins();
    } else alert("Выберите другой квадрат");
}

function checkIt(sqrv) {
    var sNull = $(sqrv).text();
    if (sNull === 'X' || sNull === 'O') {
        return false;
    }
    return true;
}

function plTurn() {
    var countx = 0,
        counto = 0;
    var player;
    for (var i = 1; i <= 9; i++) {
        player = document.getElementById("sqr" + i).innerHTML;
        if (player === 'X') {
            countx++;
        }
        if (player === 'O') {
            counto++;
        }
    }
    if (countx === counto) player = 'X';
    else player = 'O';
    return player;
}

function wins() {
    var count = 0;
    var a = 1;
    var b = 2;
    var c = 3;
    for (var i = 0; i < 3; i++) {
        if (winner(a, b, c)) {
            return;
        }
        a += 3;
        b += 3;
        c += 3;
    }
    a = 1;
    b = 4;
    c = 7;
    for (var i = 0; i < 3; i++) {
        if (winner(a, b, c)) {
            return;
        }
        a += 1;
        b += 1;
        c += 1;
    }
    if (winner(1, 5, 9)) {
        return;
    }
    if (winner(3, 5, 7)) {
        return;
    }
    for (var i = 1; i <= 9; i++) {
        if (document.getElementById("sqr" + i).innerHTML === 'X' || document.getElementById("sqr" + i).innerHTML === 'O') count++;
    }
    if (count === 9) {
        if (confirm("Ничья! Сыграем?")) {
            newGame();
        }
    }
}

function winner(a, b, c) {
    if ((document.getElementById("sqr" + a).innerHTML === document.getElementById("sqr" + b).innerHTML) && (document.getElementById("sqr" + b).innerHTML === document.getElementById("sqr" + c).innerHTML) && (document.getElementById("sqr" + a).innerHTML === document.getElementById("sqr" + c).innerHTML) && (document.getElementById("sqr" + a).innerHTML != "" || document.getElementById("sqr" + b).innerHTML != "" || document.getElementById("sqr" + c).innerHTML != "")) {
        if (confirm(document.getElementById("sqr" + a).innerHTML + " выиграл!!! Еще раз?")) {
            newGame();
        }
        return true;
    } else return false;
}

function newGame() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("sqr" + i).innerHTML = "";
    }
}
