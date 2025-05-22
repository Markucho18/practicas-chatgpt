/* 🔴 Difícil

    Dado un array de números, encontrar el subarray contiguo con la mayor suma posible.

    Reordenar un array de números de forma que los pares vayan al principio y los impares al final.

    Eliminar todos los elementos duplicados de un array sin usar Set.

    Aplanar un array con múltiples niveles de anidamiento sin usar .flat().

    Dado un array de objetos con propiedades nombre y edad, ordenar el array por edad ascendente. */


//Mi intento de solucion del primer ejercicio.
const arr = [4, -1, 2, 1, -5, 4]
const subArraysPosibles = []
for(numero in arr){
    for(let i = 0; i < arr.length; i++){
        subArraysPosibles.push(arr.slice(numero, (arr.length - 1) - i))
        console.log({numero, i})
    }
}
const subArraysFiltrados = subArraysPosibles.filter(subarray => subarray.length > 1)
//

//ChatGPT me explico el metodo Kadane. No crea todos los subarrays posibles si no que evalua
//la suma maxima comparando, decidiendo si seguir sumando o reiniciar.
//Reinicia cuando la suma da un numero peor que el que se esta analizando (seguir es contraprudecente)
let maxSuma = -Infinity;
let sumaActual = 0;
let inicio = 0;
let tempInicio = 0;
let fin = 0;

for (let i = 0; i < arr.length; i++) {
    sumaActual += arr[i];

    if (sumaActual > maxSuma) {
        maxSuma = sumaActual;
        inicio = tempInicio;
        fin = i;
    }

    if (sumaActual < 0) {
        sumaActual = 0;
        tempInicio = i + 1;
    }
}

const mejorSubarray = arr.slice(inicio, fin + 1);
console.log("Subarray con la mayor suma:", mejorSubarray); // 👉 [4, -1, 2, 1]
console.log("Mayor suma:", maxSuma); // 👉 6

//Segundo Ejercicio:

//Primera solucion (mejor mia):
const numeros = [14, 24, 35, 17, 3, 5, 49, 23, 26, 31, 64, 78, 89, 4, 67]
const numerosImpares = numeros.filter(numero => numero % 2 === 1)
const numerosPares = numeros.filter(numero => numero % 2 === 0)
//const numerosOrdenados = [...numerosPares, ...numerosImpares]

//Segunda solucion (Peor, por que es O(n2) por que el unshift mueve todos los elementos)
const numerosOrdenados = []
numeros.forEach(numero => {
    const esPar = numero % 2 === 0
    if(esPar) numerosOrdenados.unshift(numero)
    else numerosOrdenados.push(numero)
})

//La mejor solucion es recorrer una sola vez con un for(en vez de 2 con filter)
//alterando arrays auxiliares(push). Despues unirlos.

console.log({numerosOrdenados})

//Tercer Ejercicio:
const animales = ["perro", "gato", "perro", "perro", "loro", "conejo", "gato", "tortuga"]
const sinDuplicados = animales.reduce((accum, animal) => {
    return accum.includes(animal) ? accum : [...accum, animal]
}, [])

//Mejor solucion(ChatGPT):
/* const animales = ["perro", "gato", "perro", "perro", "loro", "conejo", "gato", "tortuga"]
const sinDuplicados = []
const vistos = {}

for (const animal of animales) {
  if (!vistos[animal]) {
    sinDuplicados.push(animal)
    vistos[animal] = true
  }
} */ //No recorre todo el array en cada vuelta como .includes()

console.log({sinDuplicados})

//Cuarto Ejercicio:
const array = [1, [2, [3, 4], 5], 6]
const arrayPlano = []

const desanidar = (elemento) => {
    if(Array.isArray(elemento)){
        for(const subElemento of elemento){
            desanidar(subElemento)
        }
    }
    else arrayPlano.push(elemento)
}

array.forEach(elemento => desanidar(elemento))

console.log({arrayPlano})

//Solucion ChatGPT:
/* function desanidarIterativo(arr) {
  const resultado = [];
  const pila = [...arr]; // Copiamos el array

  while (pila.length) {
    const actual = pila.pop(); //Elimina y devuelve el ultimo elemento del array, como si lo recorriese
    //Modifica el array original para que en algun momento el while se detenga

    if (Array.isArray(actual)) {
      // Lo agregamos al stack en orden inverso
      pila.push(...actual); 
    } else {
      resultado.push(actual);
    }
  }

  return resultado.reverse(); // Porque se procesaron al revés
}
 */ //A diferencia del mio, es iterativo, no recursivo y no puede causar stack overflow en volumenes grandes de datos

 //Quinto Ejercicio:
 const personas = [
  { nombre: "Lucía", edad: 32 },
  { nombre: "Mateo", edad: 21 },
  { nombre: "Sofía", edad: 27 },
  { nombre: "Juan", edad: 45 },
  { nombre: "Valentina", edad: 19 },
  { nombre: "Pedro", edad: 36 }
];

const personasOrdenadas = [...personas].sort((a, b) => {
    return a.edad - b.edad
}) //Sort modifica el original ademas de devolver un nuevo array, recien me entero. Por eso hay usar el spread

console.log({personasOrdenadas})


//Lo mejor que aprendi fue el algoritmo Kadane y tipo Pila (en vez de recursivo, iterativo)
//Tambien repase la notacion Big O, tiempos de ejecucion y tal.

/* Métodos que modifican el array original:

    sort() → ordena el array in place.

    push() → agrega elementos al final.

    pop() → elimina el último elemento.

    shift() → elimina el primer elemento.

    unshift() → agrega elementos al inicio.

    splice() → inserta, elimina o reemplaza elementos.

    reverse() → invierte el array in place.

    fill() → rellena con un valor específico.

    copyWithin() → copia parte del array en otra posición dentro del mismo array. */


