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

// carrosel

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel() {
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}
setInterval(carrosel, 2500);

//
