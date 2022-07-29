import "./style.css";
function aleatorioVal() {
  let medios = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let puntas = ["♦", "♥", "♠", "♣"];
  const cartas = [];
  for (let a = 0; a < medios.length; a++) {
    for (let b = 0; b < puntas.length; b++) {
      const punta = puntas[b];
      const medio = medios[a];
      cartas.push({ medio, punta });
    }
  }
  return cartas;
}
function random(cartas) {
  const aleatorio = Math.floor(Math.random() * 51);
  const valor = cartas[aleatorio].medio;
  const forma = cartas[aleatorio].punta;
  const carta = document.getElementById("carta");
  carta.innerHTML =
    forma == "♠" || forma == "♣"
      ? `<span class="figura-arriba">${forma}</span><span class="numero">${valor}</span><span class="figura-abajo">${forma}</span>`
      : `<span class="figura-arriba-rojo">${forma}</span><span class="numero-rojo">${valor}</span><span class="figura-abajo-rojo">${forma}</span>`;
}
const cartas = aleatorioVal();
random(cartas);
