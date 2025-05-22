/* Manipulación de strings y arrays:

    Invertir palabras en una frase sin usar métodos directos (split, reverse).

    Contar la frecuencia de cada palabra en un texto.

    Validar si una palabra o frase es un palíndromo.

    Encontrar el carácter más frecuente en un string.

    Implementar funciones de búsqueda (por ejemplo, encontrar el índice de un elemento sin usar indexOf). */

//Primer Ejercicio:
const frase = "Ayer comi un pancho"

const invertirOrdenFrase = (frase) => {
    const arrayPalabras = []
    let palabraActual = ""
    for(let i = 0; i <= frase.length; i++){
        const letra = frase[i]
        if(letra === " " || i === frase.length){
            arrayPalabras.push(palabraActual)
            palabraActual = ""
        }
        else{
            palabraActual += letra
        }
    }
    const fraseInvertida = arrayPalabras.reduceRight((accum, palabra) => {
        return accum.length > 0 ? accum + " " + palabra : palabra
    }, "")
    return fraseInvertida
}

console.log(invertirOrdenFrase(frase))
//La tengo clarisima, yo solito.