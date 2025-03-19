// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nuevoAmigo = document.getElementById("amigo");  // Agregamos a cada nuevo amigo 
let listaAmigos = []; // se crea un array vacío para guardar a los amigos
let anotacionListaAmigos = document.getElementById("listaAmigos")  //agregar los nombres a la pantalla
let resultado =document.getElementById("resultado");

function agregarAmigo() {
    if (nuevoAmigo.value == ""){
        alert("Por favor, ingrese un nombre válido");
    } 
    listaAmigos.push(nuevoAmigo.value);  
    //console.log(listaAmigos)
    anotacionListaAmigos.innerHTML = anotacionListaAmigos.innerHTML + `<li> ${nuevoAmigo.value}</li>`;        
    document.querySelector('#amigo').value= '';
}

function sortearAmigo() {
    let numeroArray= listaAmigos.length;
    let numeroRandom = Math.floor(Math.random()* numeroArray);
    let amigoSecreto = listaAmigos[numeroRandom];
    resultado.innerHTML = (`<li>el amigo secreto es: ${amigoSecreto} </li>`);
}
