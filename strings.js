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

const fraseInvertida = invertirOrdenFrase(frase)

//console.log(fraseInvertida)
//La tengo clarisima, yo solito.

//Segundo Ejercicio:
const texto = "Yo ayer fui a pasear con mi amigo Pedro, Pedro y yo fuimos a pasear, yo comi un pancho y yo tome una pepsi despues de pasear"

const contarFrecuencias = (texto) => {
    const palabras = texto.toLowerCase().split(" ")
    const palabrasVistas = new Set()
    const palabrasRepetidas = {}
    for(palabra of palabras){
        if(palabrasVistas.has(palabra)){
            const yaSeConto = palabrasRepetidas[palabra]
            palabrasRepetidas[palabra] = yaSeConto ? palabrasRepetidas[palabra] + 1 : 2
        }
        else{
            palabrasVistas.add(palabra)
        }
    }
    return palabrasRepetidas
}

//console.log(contarFrecuencias(texto))

//Segun chatGPT el Set() es innnecesario y se puede trabajar directamente con el objeto
//Tambien tiene el problema de los signos de puntuacion, el usa regex.

//Tercer ejercicio: palindromo

const palabra = "Ana"

const verificarPalindromo = (palabra) => {
    const palabraInvertida = palabra.split("").reverse().join("")
    if(palabra.toLowerCase() === palabraInvertida.toLowerCase()) return true
    return false
}

const esPalindromo = verificarPalindromo(palabra)

//console.log(esPalindromo)

//Mejor solucion (aun asi puede ser mejor):

const palabra2 = "Radar"

const comprobarPalindromo = (palabra) => {
    let esPalindromo = false
    let cuenta = 0
    let cuentaInversa = palabra.length - 1
    do {
        palabra.toLowerCase()
        if(palabra[cuenta] === palabra[cuentaInversa - cuenta]){
            cuenta++
            esPalindromo = true
        } else{
            esPalindromo = false
        }
    } while(esPalindromo && cuenta !== cuentaInversa)
    return esPalindromo
}

//Mejor SOlucion de ChatGPT:
/* 
const comprobarPalindromo = (palabra) => {
    const limpia = palabra.toLowerCase()
    for(let i = 0; i < Math.floor(limpia.length / 2); i++) {
        if(limpia[i] !== limpia[limpia.length - 1 - i]) {
            return false
        }
    }
    return true
}

 */

//Cuarto Ejercicio: 

const palabrita = "fjrigrjdfgmfgiemrogimrmvfdvkfdmvfjmgboitrjihyjtrhiof"

const obtenerCaracterMasFrecuente = (string) => {
    const vecesPorCaracter = {}
    for(const caracter of string.toLowerCase()){
        vecesPorCaracter[caracter] = (vecesPorCaracter[caracter]  || 0) + 1
    }
    const caracteresMasFrecuentes = []
    const cantidadMaxima = Object.values(vecesPorCaracter)[0]
    for(const caracter in vecesPorCaracter){
        if(vecesPorCaracter[caracter] > cantidadMaxima){
            caracteresMasFrecuentes = [caracter]
        }
        else if(vecesPorCaracter[caracter] === cantidadMaxima){
            caracteresMasFrecuentes.push(caracter)
        }
    }
    return caracteresMasFrecuentes.length > 1 ? caracteresMasFrecuentes : caracteresMasFrecuentes[0]
}

const caracterMasFrecuente = obtenerCaracterMasFrecuente(palabrita)

console.log(caracterMasFrecuente)
//Me estruji el cerebro pero no se me ocurrio una mejor forma

/* Solucionde chatGPT, la correcta:

const obtenerCaracterMasFrecuente = (string) => {
  const vecesPorCaracter = {};
  let maxFrecuencia = 0;
  let masFrecuentes = [];

  for (const caracter of string.toLowerCase()) {
    vecesPorCaracter[caracter] = (vecesPorCaracter[caracter] || 0) + 1;
    const frecuencia = vecesPorCaracter[caracter];

    if (frecuencia > maxFrecuencia) {
      maxFrecuencia = frecuencia;
      masFrecuentes = [caracter]; // nuevo líder
    } else if (frecuencia === maxFrecuencia) {
      if (!masFrecuentes.includes(caracter)) {
        masFrecuentes.push(caracter); // empate
      }
    }
  }

  return masFrecuentes.length > 1 ? masFrecuentes : masFrecuentes[0];
};


*/
