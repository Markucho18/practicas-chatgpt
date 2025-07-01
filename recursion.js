//Ejercicio 1: Calculo de factorial recursivo
//El producto de todos los numeros enteros hasta llegar a X numero

const factorial = (n) => {
    let total = 1
    for(let i = 2; i <= n; i++){//Tambien me lo corrigio ChatGPT xd
        total *= i //Ni sabia que existia, me lo corrigio ChatGPT
    }
    return  total
}
 


console.log(factorial(5))

//Me estruji el cerebro y me rendi
//Solucion correcta:

/* const factorial = (n) => {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
} */

//Ejercicio 1B: Fibonacci recursivo

