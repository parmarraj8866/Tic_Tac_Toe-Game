const allcell = document.querySelectorAll(".cell");
const result = document.querySelector(".winner");
const board = document.querySelector(".board");
const container = document.querySelector(".container");
const playagain = document.querySelector(".playagain");
const winTital = document.querySelector(".winTital");

var count = 0;

let arr = [];
board.addEventListener('click', function (e) {

    let index = e.target.id

    if (!e.target.classList.contains('cell') || e.target.innerText !== "") {
        return;
    }
    if (count == 0) {
        e.target.innerText = "X";
        count = 1;
        arr[index] = ("X");

    } else {
        e.target.innerText = "O";
        count = 0;
        arr[index] = ("O");
    }

    desideWinner()
})

function desideWinner() {
    let win = "";

    if ((arr[0] === "X" && arr[1] === "X" && arr[2] === "X") || (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") ||
        (arr[0] === "X" && arr[4] === "X" && arr[8] === "X") || (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") ||
        (arr[2] === "X" && arr[4] === "X" && arr[6] === "X") || (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") ||
        (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") || (arr[6] === "X" && arr[7] === "X" && arr[8] === "X")) {
        win = "X";
        winner(win);
        return
    }

    else if ((arr[0] === "O" && arr[1] === "O" && arr[2] === "O") || (arr[0] === "O" && arr[3] === "O" && arr[6] === "O") ||
        (arr[0] === "O" && arr[4] === "O" && arr[8] === "O") || (arr[1] === "O" && arr[4] === "O" && arr[7] === "O") ||
        (arr[2] === "O" && arr[4] === "O" && arr[6] === "O") || (arr[2] === "O" && arr[5] === "O" && arr[8] === "O") ||
        (arr[3] === "O" && arr[4] === "O" && arr[5] === "O") || (arr[6] === "O" && arr[7] === "O" && arr[8] === "O")) {
        win = "O";
        winner(win);
        return

    }

    if (arr.filter(cell => cell === "X" || cell === "O").length === 9) {
        winner("");
    }

}

function winner(i) {
    if (i === "X") {
        setTimer(i)
        allRemove()
        return

    } else if (i === "O") {
        setTimer(i)
        allRemove()
        return
    }

    else {
        setTimer(i)
        allRemove()
        return
    }

}

function setTimer(i) {
    if (i === "X" || i === "O") {
        setTimeout(() => {
            result.style.display = "block"
            container.style.display = "none"
            winTital.innerText = `${i}- Win The Match`
        }, 100)
    } else {
        setTimeout(() => {
            result.style.display = "block"
            container.style.display = "none"
            winTital.innerText = `Draw The Match`
        }, 100)
    }
}

function allRemove() {

    allcell.forEach(function (cell) {
        cell.innerText = "";
    });

    arr = [];
    count = 0;

}

playagain.addEventListener("click", function () {
    result.style.display = "none"
    container.style.display = "block"

})
