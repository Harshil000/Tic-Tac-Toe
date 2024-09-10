let Player = "NONE"
let ChooseO = "NONE"
let player1
let player2

document.getElementById("P1Label").innerHTML = document.getElementById("Player1").value
document.getElementsByClassName("radioBTN")[2].innerHTML = document.getElementById("Player1").value
document.getElementById("P2Label").innerHTML = document.getElementById("Player2").value
document.getElementsByClassName("radioBTN")[3].innerHTML = document.getElementById("Player2").value

const ChangePlayersName = () => {
    document.getElementById("P1Label").innerHTML = document.getElementById("Player1").value
    document.getElementsByClassName("radioBTN")[2].innerHTML = document.getElementById("Player1").value
    document.getElementById("P2Label").innerHTML = document.getElementById("Player2").value
    document.getElementsByClassName("radioBTN")[3].innerHTML = document.getElementById("Player2").value
}

document.getElementsByClassName("navlinks")[1].addEventListener("click", () => {
    window.location.reload()
})

document.getElementById("P1Label").addEventListener('click', () => {
    document.getElementById("P1Label").classList.add("selectedRadio")
    document.getElementById("P2Label").classList.remove("selectedRadio")
    Player = document.getElementById("P1Label").getAttribute("data-name")
})

document.getElementById("P2Label").addEventListener('click', () => {
    document.getElementById("P2Label").classList.add("selectedRadio")
    document.getElementById("P1Label").classList.remove("selectedRadio")
    Player = document.getElementById("P2Label").getAttribute("data-name")
})

document.getElementsByClassName("radioBTN")[2].addEventListener('click', () => {
    document.getElementsByClassName("radioBTN")[2].classList.add("selectedRadio")
    document.getElementsByClassName("radioBTN")[3].classList.remove("selectedRadio")
    ChooseO = document.getElementsByClassName("radioBTN")[2].getAttribute("data-name")
    player1 = "O"
    player2 = "X"
})

document.getElementsByClassName("radioBTN")[3].addEventListener('click', () => {
    document.getElementsByClassName("radioBTN")[3].classList.add("selectedRadio")
    document.getElementsByClassName("radioBTN")[2].classList.remove("selectedRadio")
    ChooseO = document.getElementsByClassName("radioBTN")[3].getAttribute("data-name")
    player1 = "X"
    player2 = "O"
})

const box1 = document.getElementsByClassName("box")[0]
const box2 = document.getElementsByClassName("box")[1]
const box3 = document.getElementsByClassName("box")[2]
const box4 = document.getElementsByClassName("box")[3]
const box5 = document.getElementsByClassName("box")[4]
const box6 = document.getElementsByClassName("box")[5]
const box7 = document.getElementsByClassName("box")[6]
const box8 = document.getElementsByClassName("box")[7]
const box9 = document.getElementsByClassName("box")[8]

const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
boxes.forEach(e => {
    e.addEventListener('click', () => {
        CheckReady(e)
    })
});

function CheckReady(e) {
    if (Player == "NONE" || ChooseO == "NONE") {
        alert("At first please select Who wants to play first and who wants to play O")
    }
    else {
        if (e.innerHTML == "X" || e.innerHTML == "O") {
            alert("Please Click on Empty Box")
        } else {
            if(Player == "player1"){
                e.innerHTML = player1
                Player = "player2"
            }else{
                e.innerHTML = player2
                Player = "player1"
            }
        }
    }
}