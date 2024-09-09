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
})

document.getElementById("P2Label").addEventListener('click', () => {
    document.getElementById("P2Label").classList.add("selectedRadio")
    document.getElementById("P1Label").classList.remove("selectedRadio")
})

document.getElementsByClassName("radioBTN")[2].addEventListener('click' , () => {
    document.getElementsByClassName("radioBTN")[2].classList.add("selectedRadio")
    document.getElementsByClassName("radioBTN")[3].classList.remove("selectedRadio")
})

document.getElementsByClassName("radioBTN")[3].addEventListener('click' , () => {
    document.getElementsByClassName("radioBTN")[3].classList.add("selectedRadio")
    document.getElementsByClassName("radioBTN")[2].classList.remove("selectedRadio")
})

// let playFirst = document.getElementById("P1Label")
// console.log(playFirst)