const botones = document.getElementsByTagName("td")

const pantalla = document.getElementById("pantalla")

let valorPantalla = ""

let historial = []

let resultadoActual = 0

const modificarHistorial = (valor) => {
    const ultimoElemento = historial[ historial.length - 1]
    if(parseInt(valor) && parseInt(ultimoElemento)){
        historial[historial.length - 1] = ultimoElemento + valor
    } else{
        historial.push(valor)
    }
    console.log(historial)
    //Tambien debo comprobar si el ultimo elemento es una operacion no añadirlo, por que no hay dos opereaciones seguidas
}

const borrar = () => {
    const ultimoElemento = historial[ historial.length - 1]
    if(ultimoElemento.length > 1){
        historial[historial.length - 1] = ultimoElemento.slice(0, -1)
    } else{
        historial.pop()
    }
    mostrarEnPantalla()
}

const calcularResultado = () => {
    console.log("calculando resultado...")
    //Hay que simular la prioridad 
    let total = 0
    historial.forEach((elemento, i) => {
        
    })
}

const mostrarEnPantalla = (valor) => {
    valorPantalla = historial.join(" ")
    pantalla.textContent = valorPantalla
}

const revelarResultado = () => {}

for(let i = 0; i < botones.length; i++){
    const boton = botones[i]
    const valor = boton.textContent
    if(boton.id === "botonBorrar"){
        boton.addEventListener("click", borrar)
    }
    else if(boton.id === "botonResultado"){
        boton.addEventListener("click", calcularResultado)
    }
    else {
        boton.addEventListener("click", () =>{
            modificarHistorial(valor)
            mostrarEnPantalla()
        })
    }
}


//Casos que se deben contemplar:
//La division y la multiplicacion se hacen primero, lo cual dificulta hacer el resultado sobre la marcha
//Los numeros deben estar juntos haciendo otro valor a menos que un signo de operacion los separe