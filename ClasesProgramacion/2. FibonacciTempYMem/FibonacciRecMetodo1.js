// Fibonacci con método recursivo
// Defino fibRec para que se llame a si misma
// La base es si n es menor que 2, devuelve n (0 o 1)
// Fijamoms 40 en n, imprimo el resultado y dejo un timeout para ver uso de memoria
// Esta version crece en tiempo y memoria de forma exponencial

function fibRec(n) {
    if (n < 2) return n;
    return fibRec(n - 1) + fibRec(n - 2);

}

const n = 40;
console.log("Resultado recursivo para Fibonacci: ", fibRec(n));
setTimeout(() => {}, 30000);