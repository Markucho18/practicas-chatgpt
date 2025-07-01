const botones = document.getElementsByTagName("td")

const pantalla = document.getElementById("pantalla")

let valorPantalla = ""

let resultadoActual = 0

const mostrarEnPantalla = (valor) => {
    valorPantalla += ` ${valor}`
    pantalla.textContent = valorPantalla
}

const borrar = () => {
    valorPantalla = valorPantalla.slice(0, valorPantalla.length - 2)
    pantalla.textContent = valorPantalla
}

const revelarResultado = () => {}

for(let i = 0; i < botones.length; i++){
    const boton = botones[i]
    const valor = boton.textContent
    if(boton.id === "botonBorrar"){
        boton.addEventListener("click", borrar)
    }
    else {
        boton.addEventListener("click", () => mostrarEnPantalla(valor))
    }
}

//Casos que se deben contemplar:
//La division y la multiplicacion se hacen primero, lo cual dificulta hacer el resultado sobre la marcha
//Los numeros deben estar juntos haciendo otro valor a menos que un signo de operacion los separe