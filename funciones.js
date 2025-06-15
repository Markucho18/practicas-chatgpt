//Primer Ejercicio: closure

const sumarNumero = (numeroFijo) => {
    return (numeroVariable) => {
        return numeroFijo + numeroVariable
    }   
}

const sumarDiez = sumarNumero(10)

//console.log(sumarDiez(3))

const crearSaludador = (nombre) => {
    return () => {
        return `Hola ${nombre}, como estas?`
    }
}

const saludarPedro = crearSaludador("Pedro")

//console.log(saludarPedro())

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

/* saludarUnaVez()
saludarUnaVez()
saludarUnaVez() */

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

/* saludosContados()
saludosContados()
saludosContados()
saludosContados()
saludosContados() */

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

/* comprarTresLeches()
comprarTresLeches()
comprarTresLeches()
comprarTresLeches()
comprarTresLeches() */


//Esto lo hice para joder nomas xd
const repetirFuncion = (funcion, veces) => {
    for(let i = 0; i < veces; i++){
        funcion()
    }
}

const gritar = () => {
    console.log("AAAAAAAAAAAAAAAAAA")
}

//repetirFuncion(gritar, 5)

//Tercer Ejercicio: Memoizacion

const resultados = {}

const sumar = (num1, num2) => {
    const clave = [num1, num2].join(",") 
    const claveInversa = [num2, num1].join(",")
    if(resultados[clave] || resultados[claveInversa]){
        return resultados[clave] || resultados[claveInversa]
    } else{
        resultados[clave] = num1 + num2
        return num1 + num2
    }
}

/* console.log(sumar(3,4))
console.log(sumar(5,6))
console.log(sumar(8,7))
console.log(sumar(6,5))
console.log(sumar(4,9))
console.log(resultados) */

//Solucion de chatGPT
/* const memoizar = (funcion) => {
    const cache = new Map()
    return (...args) => {
        const clave = JSON.stringify(args)
        console.log(cache)
        if (cache.has(clave)) {
            return cache.get(clave)
        }
        const resultado = funcion(...args)
        cache.set(clave, resultado)
        return resultado
    }
}

const sumar = (a, b) => a + b
const sumarMemo = memoizar(sumar)

console.log(sumarMemo(3, 4))
console.log(sumarMemo(6, 7))
console.log(sumarMemo(9, 7))
console.log(sumarMemo(14, 7))
console.log(sumarMemo(4, 3)) // no considera la conmutatividad aquí */

//Tema OBJECT / MAP
/* | Característica     | `Object`                | `Map`                        |
| ------------------ | ----------------------- | ---------------------------- |
| Claves             | Solo strings o símbolos | Cualquier tipo (obj, array…) |
| Orden de inserción | No garantizada          | Garantizada                  |
| Rendimiento        | Razonable               | Más eficiente para búsquedas |
| Métodos útiles     | Limitados (`has`, etc.) | `.set()`, `.get()`, `.has()` | */






