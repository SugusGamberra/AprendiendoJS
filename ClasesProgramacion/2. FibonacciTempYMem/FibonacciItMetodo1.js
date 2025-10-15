// Fibonacci con método iterativo
// Es la primera vez que uso este método para ver uso de memoria y tiempo de ejecución :P
// No sé si es exactamente así como lo quiere, pero ahí va :D
// Defino fibIter como funcion iterativa que calcula fibonacci con un bucle for
// inicializo la variable a en 0 y b en 1
// luego el bucle for itera desde 2 hasta n
// fijamos n en 40, imprimo el resultado y dejo un timeout para ver uso de memoria

function fibIter(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

const n = 40;
console.log("Resultado iterativo para Fibonacci: ", fibIter(n));
setTimeout(() => {}, 30000);