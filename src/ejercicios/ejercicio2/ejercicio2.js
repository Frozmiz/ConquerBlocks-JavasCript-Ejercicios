import "../../main";

const clickButton = document.querySelector(".main_button");
const counterOutput = document.getElementById("contador");

let count = 0;
counterOutput.textContent = count;

function sumCounter() {
    count += 1;
    counterOutput.textContent = count;
}

clickButton.addEventListener("click", sumCounter);

if (!clickButton || !counterOutput) {
  console.warn("No se encontró el botón o el contador en el DOM.");
}



