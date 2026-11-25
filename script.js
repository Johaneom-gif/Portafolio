const fotosIzquierda = ["johan3.jpg.jpg" , "johan4.jpg.jpg"];
const fotosDerecha = ["johan3.jpg.jpg" , "johan4.jpg.jpg"];

const fotoIzq = document.getElementById("foto-izq");
const fotoDer = document.getElementById("foto-der");

function rotarFotos(imagen, fotos) {
    let posicion = 0;

    setInterval(() => {
        
        imagen.style.opacity = 0;

        
        setTimeout(() => {
            posicion = (posicion + 1) % fotos.length;
            imagen.src = fotos[posicion];
            imagen.style.opacity = 1;
        }, 600);

    }, 8000); 
}

rotarFotos(fotoIzq, fotosIzquierda);
rotarFotos(fotoDer, fotosDerecha);
