/* 🟡 Intermedio

    Dado un array de strings, crear un nuevo array con todas las palabras en mayúsculas.

    Dado un array de números, devolver uno nuevo con cada número multiplicado por 2.

    Invertir el orden de los elementos de un array sin usar .reverse().

    Contar cuántas veces aparece un elemento específico en un array.

    Combinar dos arrays en uno solo sin repetir elementos. */

const palabras = ["paraguas", "arquitecto", "orangutan", "universo", "asincrono"]
const palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase())
console.log({palabrasMayusculas})

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const numerosDobles = numeros.map(num => num * 2)
console.log({numerosDobles})

const numerosInvertidos = numeros.map((_, i) => numeros[(numeros.length - 1) - i])
console.log({numerosInvertidos})

const animales = ["perro", "gato", "perro", "perro", "loro", "conejo", "gato", "tortuga"]
const perros = animales.filter(animal => animal === "perro").length
console.log({perros})
//Tambien se puede hacer con reduceRight(reduce pero en sentido inverso)

const frutas = ["manzana", "banana", "manzana", "naranja", "pera"]
const verduras = ["remolacha", "lechuga", "papa", "lechuga", "ajo", "cebolla"]
const vegetales = [...frutas, ...verduras].reduce((accum, vegetal) =>{
    return accum.includes(vegetal) ? accum : [...accum, vegetal]
}, [] ) //valor inicial
console.log(vegetales)
