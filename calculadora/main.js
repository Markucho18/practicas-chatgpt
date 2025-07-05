const botones = document.getElementsByTagName("td")

const pantalla = document.getElementById("pantalla")

let valorPantalla = ""

let historial = ["+"]

let resultadoActual = 0

const modificarHistorial = (valor) => {
    const ultimoElemento = historial[ historial.length - 1]
    if(parseInt(valor) && parseInt(ultimoElemento)){
        historial[historial.length - 1] = ultimoElemento + valor
    } else{
        historial.push(valor)
    }
    mostrarEnPantalla()
    //El primer elemento no puede ser una operacion
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

const operaciones = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "%": (a, b) => a / b 
}

const calcularResultado = () => {

    //Simplemente recorro de a pares

    let cola = []
    let total = 0

    for(let i = 0; i < historial.length; i += 2){
        const operacionActual = historial[i]
        const numeroActual = parseInt(historial[i + 1])
        const operacionProxima = historial[i + 2]
        const operar = operaciones[operacionActual]
        if(cola.length > 0){
            const operacionAnterior = cola[0]
            const numeroAnterior = cola[1]
            total = operar(numeroAnterior, numeroActual)
        }
        console.log({operacionActual, numeroActual, operacionProxima})
    }

    /* let i = 0
    let hayPar = false
    do{
        //Por que no lo incluye el ultimo
        hayPar = historial.slice(i, i + 2).length === 2
        const operacionActual = historial[i]
        const numeroActual = parseInt(historial[i + 1])
        const operacionProxima = historial[i + 2]
        console.log({operacionActual, numeroActual, operacionProxima, hayPar})
        i += 2
    } while(hayPar) */


    


    /* console.log("calculando resultado...")
    //Hay que simular la prioridad 
    let total = 0
    for(let i = 0; i < 1; i++){
        //Puedo sumar el total de los 3 primeros, y comprobar la siguiente operacion para descartar o seguir

        const operacionActual = historial[i]
        const numeroActual = historial[i + 1]
        const operacionProxima = historial[i + 2]
        if(["x", "%"].includes(operacionProxima)){
            const operar = operaciones[operacionProxima]
            
        } else{
            const operar = operaciones[operacionActual]
            total = operar(total, parseInt(numeroActual))
        }
    } */
}

const mostrarEnPantalla = (valor) => {
    valorPantalla = historial.slice(1).join(" ")
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
        boton.addEventListener("click", () => modificarHistorial(valor))
    }
}


//Casos que se deben contemplar:
//La division y la multiplicacion se hacen primero, lo cual dificulta hacer el resultado sobre la marcha
//Los numeros deben estar juntos haciendo otro valor a menos que un signo de operacion los separe