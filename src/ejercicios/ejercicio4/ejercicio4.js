import "../../main";

// Helpe: Normalizamos el texto.

const normalize = (str) => {
    String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

// Referencis al DOM

const form = document.getElementById("soviet-form");
const input = document.getElementById("soviet-input");
const list = document.getElementById("soviet-list");
const items = Array.from(list.querySelectorAll("li"));

// preventDefault

form.addEventListener("submit", (e) => e.preventDefault());


// Filtro en tiempo real - Por cada LI de items busca si contiene lo que
// escribas en el imput. 

input.addEventListener("input", () => {
    const query = normalize(input.value)
      console.clear();
  console.log("query normalizada:", query);

    items.forEach((li, i) => {
        const rawText = li.textContent || "";
        const text = normalize(rawText)

            // Logs de diagnóstico
    console.log(`[${i}] rawText:`, JSON.stringify(rawText));
    console.log(`[${i}] text normalizado:`, JSON.stringify(text));

        const match = text.includes(query);

        console.log(`[${i}] match?`, match);


        li.style.display = match ? "" : "none";
    })
})
