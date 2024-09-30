let ChooseO = "NONE"
let Winner = ""
let initialPlayer = "NONE"
let user = ""
let computer = ""
let firstComputer = true
let StartTheGame = false

document.getElementById("P1Label").addEventListener('click', () => {
    document.getElementById("P1Label").classList.add("selectedRadio")
    document.getElementById("P2Label").classList.remove("selectedRadio")
    initialPlayer = "user"
})
document.getElementById("P2Label").addEventListener('click', () => {
    document.getElementById("P2Label").classList.add("selectedRadio")
    document.getElementById("P1Label").classList.remove("selectedRadio")
    initialPlayer = "computer"
})
document.getElementsByClassName("radioBTN")[2].addEventListener('click', () => {
    document.getElementsByClassName("radioBTN")[2].classList.add("selectedRadio")
    document.getElementsByClassName("radioBTN")[3].classList.remove("selectedRadio")
    ChooseO = "user"
    user = "O"
    computer = "X"
})
document.getElementsByClassName("radioBTN")[3].addEventListener('click', () => {
    document.getElementsByClassName("radioBTN")[3].classList.add("selectedRadio")
    document.getElementsByClassName("radioBTN")[2].classList.remove("selectedRadio")
    ChooseO = "computer"
    user = "X"
    computer = "O"
})
document.getElementsByClassName("navlinks")[1].addEventListener('click', () => {
    window.location.reload()
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

document.getElementsByClassName("GameStartBTNWorking")[0].addEventListener('click', () => {
    if (firstComputer) {
        if (initialPlayer == "NONE" || ChooseO == "NONE") {
            alert("At first please select Who wants to play first and who wants to play O")
        } else {
            if (initialPlayer != "user") {
                let randomNumber = Math.floor(Math.random() * 8)
                document.getElementsByClassName("box")[randomNumber].innerHTML = computer
            }
            document.getElementsByClassName("GameStartBTN")[0].classList.remove("GameStartBTNWorking")
            firstComputer = false
            StartTheGame = true
        }
    }
})

const CheckWinner = () => {
    if ((box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") || (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") || (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") || (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") || (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") || (box3.innerHTML == "O" && box6.innerHTML == "O" && box9.innerHTML == "O") || (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") || (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O")) {
        document.getElementsByClassName("clearBTN")[0].classList.add("readyClearBTN")
        document.getElementsByClassName("readyClearBTN")[0].addEventListener('click', () => {
            Winner = ""
            boxes.forEach(e => {
                e.innerHTML = ""
            })
            document.getElementsByClassName("clearBTN")[0].classList.remove("readyClearBTN")
            firstComputer = true
            if (firstComputer) {
                if (initialPlayer == "NONE" || ChooseO == "NONE") {
                    alert("At first please select Who wants to play first and who wants to play O")
                } else {
                    if (initialPlayer != "user") {
                        let randomNumber = Math.floor(Math.random() * 8)
                        document.getElementsByClassName("box")[randomNumber].innerHTML = computer
                    }
                    document.getElementsByClassName("GameStartBTN")[0].classList.remove("GameStartBTNWorking")
                    firstComputer = false
                    StartTheGame = true
                }
            }
        })
        if (user == "O") {
            Winner = "You"
            alert(Winner + " are Winner")
            let score = parseInt(document.getElementsByClassName("scorePlate")[0].innerHTML)
            document.getElementsByClassName("scorePlate")[0].innerHTML = score + 1;
        } else {
            Winner = "Computer"
            alert(Winner + " is Winner")
            let score = parseInt(document.getElementsByClassName("scorePlate")[1].innerHTML)
            document.getElementsByClassName("scorePlate")[1].innerHTML = score + 1;
        }
        return true
    } else if ((box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") || (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") || (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") || (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") || (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") || (box3.innerHTML == "X" && box6.innerHTML == "X" && box9.innerHTML == "X") || (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") || (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X")) {
        document.getElementsByClassName("clearBTN")[0].classList.add("readyClearBTN")
        document.getElementsByClassName("readyClearBTN")[0].addEventListener('click', () => {
            Winner = ""
            boxes.forEach(e => {
                e.innerHTML = ""
            })
            document.getElementsByClassName("clearBTN")[0].classList.remove("readyClearBTN")
            firstComputer = true
            if (firstComputer) {
                if (initialPlayer == "NONE" || ChooseO == "NONE") {
                    alert("At first please select Who wants to play first and who wants to play O")
                } else {
                    if (initialPlayer != "user") {
                        let randomNumber = Math.floor(Math.random() * 8)
                        document.getElementsByClassName("box")[randomNumber].innerHTML = computer
                    }
                    document.getElementsByClassName("GameStartBTN")[0].classList.remove("GameStartBTNWorking")
                    firstComputer = false
                    StartTheGame = true
                }
            }
        })
        if (user == "X") {
            Winner = "You"
            alert(Winner + " are Winner")
            let score = parseInt(document.getElementsByClassName("scorePlate")[0].innerHTML)
            document.getElementsByClassName("scorePlate")[0].innerHTML = score + 1;
        } else {
            Winner = "Computer"
            alert(Winner + " is Winner")
            let score = parseInt(document.getElementsByClassName("scorePlate")[1].innerHTML)
            document.getElementsByClassName("scorePlate")[1].innerHTML = score + 1;
        }
        return true
    } else if (box1.innerHTML != "" && box2.innerHTML != "" && box3.innerHTML != "" && box4.innerHTML != "" && box5.innerHTML != "" && box6.innerHTML != "" && box7.innerHTML != "" && box8.innerHTML != "" && box9.innerHTML != "") {
        document.getElementsByClassName("clearBTN")[0].classList.add("readyClearBTN")
        document.getElementsByClassName("readyClearBTN")[0].addEventListener('click', () => {
            Winner = ""
            boxes.forEach(e => {
                e.innerHTML = ""
            })
            document.getElementsByClassName("clearBTN")[0].classList.remove("readyClearBTN")
            firstComputer = true
            if (firstComputer) {
                if (initialPlayer == "NONE" || ChooseO == "NONE") {
                    alert("At first please select Who wants to play first and who wants to play O")
                } else {
                    if (initialPlayer != "user") {
                        let randomNumber = Math.floor(Math.random() * 8)
                        document.getElementsByClassName("box")[randomNumber].innerHTML = computer
                    }
                    document.getElementsByClassName("GameStartBTN")[0].classList.remove("GameStartBTNWorking")
                    firstComputer = false
                    StartTheGame = true
                }
            }
        })
        Winner = "Tie"
        alert("Tie")
        return true
    } else {
        return false
    }
}

const computerPlay = () => {
    let emptyboxes = []
    boxes.forEach(box => {
        if (box.innerHTML != "X" && box.innerHTML != "O") {
            emptyboxes.push(box)
        }
    })
    if (box1.innerHTML == box2.innerHTML && box3.innerHTML != "X" && box3.innerHTML != "O") {
        box3.innerHTML = computer
    } else if (box1.innerHTML != "X" && box1.innerHTML != "O" && box2.innerHTML == box3.innerHTML) {
        box1.innerHTML = computer
    } else if (box1.innerHTML == box3.innerHTML && box2.innerHTML != "X" && box2.innerHTML != "O") {
        box2.innerHTML = computer
    } else if (box4.innerHTML == box5.innerHTML && box6.innerHTML != "X" && box6.innerHTML != "O") {
        box6.innerHTML = computer
    } else if (box5.innerHTML == box6.innerHTML && box4.innerHTML != "X" && box4.innerHTML != "O") {
        box4.innerHTML = computer
    } else if (box4.innerHTML == box6.innerHTML && box5.innerHTML != "X" && box5.innerHTML != "O") {
        box5.innerHTML = computer
    } else if (box7.innerHTML == box8.innerHTML && box9.innerHTML != "X" && box9.innerHTML != "O") {
        box9.innerHTML = computer
    } else if (box8.innerHTML == box9.innerHTML && box7.innerHTML != "X" && box7.innerHTML != "O") {
        box7.innerHTML = computer
    } else if (box7.innerHTML == box9.innerHTML && box8.innerHTML != "X" && box8.innerHTML != "O") {
        box8.innerHTML = computer
    } else if (box1.innerHTML == box4.innerHTML && box7.innerHTML != "X" && box7.innerHTML != "O") {
        box7.innerHTML = computer
    } else if (box1.innerHTML == box7.innerHTML && box4.innerHTML != "X" && box4.innerHTML != "O") {
        box4.innerHTML = computer
    } else if (box4.innerHTML == box7.innerHTML && box1.innerHTML != "X" && box1.innerHTML != "O") {
        box1.innerHTML = computer
    } else if (box2.innerHTML == box5.innerHTML && box8.innerHTML != "X" && box8.innerHTML != "O") {
        box8.innerHTML = computer
    } else if (box2.innerHTML == box8.innerHTML && box5.innerHTML != "X" && box5.innerHTML != "O") {
        box5.innerHTML = computer
    } else if (box5.innerHTML == box8.innerHTML && box2.innerHTML != "X" && box2.innerHTML != "O") {
        box2.innerHTML = computer
    } else if (box3.innerHTML == box6.innerHTML && box9.innerHTML != "X" && box9.innerHTML != "O") {
        box9.innerHTML = computer
    } else if (box3.innerHTML == box9.innerHTML && box6.innerHTML != "X" && box6.innerHTML != "O") {
        box6.innerHTML = computer
    } else if (box9.innerHTML == box6.innerHTML && box3.innerHTML != "X" && box3.innerHTML != "O") {
        box3.innerHTML = computer
    } else if (box1.innerHTML == box3.innerHTML && box2.innerHTML != "X" && box2.innerHTML != "O") {
        box2.innerHTML = computer
    } else if (box1.innerHTML == box5.innerHTML && box9.innerHTML != "X" && box9.innerHTML != "O") {
        box9.innerHTML = computer
    } else if (box1.innerHTML == box9.innerHTML && box5.innerHTML != "X" && box5.innerHTML != "O") {
        box5.innerHTML = computer
    } else if (box5.innerHTML == box9.innerHTML && box1.innerHTML != "X" && box1.innerHTML != "O") {
        box1.innerHTML = computer
    } else if (box3.innerHTML == box5.innerHTML && box7.innerHTML != "X" && box7.innerHTML != "O") {
        box7.innerHTML = computer
    } else if (box5.innerHTML == box7.innerHTML && box3.innerHTML != "X" && box3.innerHTML != "O") {
        box3.innerHTML = computer
    } else if (box3.innerHTML == box7.innerHTML && box5.innerHTML != "X" && box5.innerHTML != "O") {
        box5.innerHTML = computer
    } else {
        emptyboxes[Math.floor(Math.random() * (emptyboxes.length))].innerHTML = computer
    }
    CheckWinner()
}

function CheckReady(e) {
    if (StartTheGame) {
        if (initialPlayer == "NONE" || ChooseO == "NONE") {
            alert("At first please select Who wants to play first and who wants to play O")
        }
        else {
            if (Winner == "user") {
                alert(Winner + " are Winner")
            } else if (Winner == "Computer") {
                alert(Winner + " is Winner")
            } else {
                if (e.innerHTML == "X" || e.innerHTML == "O") {
                    alert("Please Click on Empty Box")
                } else {
                    e.innerHTML = user
                    if (!CheckWinner()) {
                        computerPlay()
                    }
                }
            }
        }
    } else {
        alert("Please Click On start The game , First")
    }
}