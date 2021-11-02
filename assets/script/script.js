// Efeito máquina de escrever no H1 do banner
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
setInterval(() =>  typeWriter(titulo), 10000);
const titulo = document.getElementById("text");
typeWriter(titulo);

