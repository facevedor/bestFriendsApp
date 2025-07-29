// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    nombres.push(amigo);
    document.getElementById("amigo").value = "";
    console.log(nombres);
    mostrarNombres();
}
function mostrarNombres() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    let amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)];
    let ul = document.getElementById("resultado");
    ul.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = "El amigo secreto es: " + amigoSecreto;
    ul.appendChild(li);
}