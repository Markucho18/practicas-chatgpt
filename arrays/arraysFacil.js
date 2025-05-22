/* 🟢 Fácil

    Crear un array con 5 frutas e imprimir cada una en consola.

    Dado un array de números, imprimir solo los números pares.

    Agregar un nuevo elemento al principio y al final de un array.

    Dado un array, eliminar el primer y el último elemento.

    Verificar si un elemento específico existe en un array. */

const frutas = ["banana", "manzana", "mandarina", "frutilla", "sandia"]
console.log({frutas})

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const pares = numeros.filter(num => num % 2 === 0)
console.log("Numeros pares: ", pares)

const numerosExtras = [0, ...numeros, 16]
console.log("Numeros extras: ", numerosExtras)

const numerosMenos = numeros.slice(1, -1)
console.log("Numeros menos: ", numerosMenos)

const incluyeDos = numeros.includes(2)
if(incluyeDos) console.log("El array incluye el numero 2")
else console.log("El array no incluye el numero 2")

