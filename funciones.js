//Primer Ejercicio: closure

const sumarNumero = (numeroFijo) => {
    return (numeroVariable) => {
        return numeroFijo + numeroVariable
    }   
}

const sumarDiez = sumarNumero(10)

console.log(sumarDiez(3))

const crearSaludador = (nombre) => {
    return () => {
        return `Hola ${nombre}, como estas?`
    }
}

const saludarPedro = crearSaludador("Pedro")

console.log(saludarPedro())

//Segundo Ejercicio: Limitar cantidad de veces que otra funcion es llamada

const once = (funcion) => {
    let fueLlamada = false
    return () => {
        if(!fueLlamada){
            funcion()
            fueLlamada = true
        }
        else console.log("Ya fue llamada")
    }
}

const saludar = () => {
    console.log("Hola Mundo")
}

const saludarUnaVez = once(saludar)

saludarUnaVez()
saludarUnaVez()
saludarUnaVez()

//Esta me pinto a mi, llevar una cuenta de las llamadas 

const contarFuncion = (funcion) => {
    let cuenta = 0
    return () => {
        funcion()
        cuenta++
        console.log(cuenta)
    }
}

const saludosContados = contarFuncion(saludar)

saludosContados()
saludosContados()
saludosContados()
saludosContados()
saludosContados()

//Ahora que uno mismo limite la cantidad

const funcionLimite = (funcion, limite) => {
    let cuenta = 0
    return () => {
        if(cuenta < limite){
            funcion()
            cuenta++
        }
        else console.log("Se llego al limite")
    }
}  

const comprarLeche = () => {
    console.log("Comprando leche xd")
}

const comprarTresLeches = funcionLimite(comprarLeche, 3)

comprarTresLeches()
comprarTresLeches()
comprarTresLeches()
comprarTresLeches()
comprarTresLeches()

//Tercer Ejercicio: Memoizacion
