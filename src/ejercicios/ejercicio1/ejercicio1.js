import "../../main";

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}


// Extra para hacer un poco el payasete :P (Lo siento)
function moveHexBox() {
 
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const boxWidth = hexBox.offsetWidth;
  const boxHeight = hexBox.offsetHeight;

  const randomX = Math.floor(Math.random() * (windowWidth - boxWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - boxHeight));

  hexBox.style.left = randomX + "px";
  hexBox.style.top = randomY + "px";
}


function changeBackground() {
    const randomColor = getRandomColor()
    mainContainer.style.backgroundColor = randomColor
    hexActual.textContent = randomColor

    moveHexBox()
}




const changeButton = document.getElementById("changeColorButton")
const mainContainer = document.querySelector(".main_ej1")
const hexActual = document.getElementById("hexActual")

const hexBox = document.querySelector(".main_hex");



changeButton.addEventListener("click", changeBackground)


changeBackground();