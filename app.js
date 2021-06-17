console.log("HELLO THERE!!")
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let hexstring = "#"

let btn = document.getElementById("btn")

let color = document.querySelector(".color")

btn.addEventListener("click", randomcolor)

function randomcolor() {

   
    for (let i = 0; i < 6; i++) {
        hexstring += colors[getRandomNumber()]

    }
    document.body.style.backgroundColor = hexstring
    color.textContent = hexstring
    console.log("Clicked")
    hexstring="#"
};



function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};