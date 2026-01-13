// Esta versión usa un método diferente al que explicaste jeje
// Haré iterativo y recursivo aquí mismo para poder comparar mejor

const { performance } = require('perf_hooks');

// Fibonacci con método iterativo

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

// Fibonacci con método recursivo

function fibRec(n) {
    if (n < 2) return n;
    return fibRec(n - 1) + fibRec(n - 2);
}

// Ahora vemos tiempos y memoria
// Fijamos en 40 n para ambas funciones como en los ejemplos anteriores
// Creamos una funcion medida que recibe una funcion (fn) y n
// Guardamos la memoria inicial con memInicial y el tiempo inicial t0
// Luego llamamos la funcion con el valor n, le puse un trycatch por si acaso (buenas practicas jeje)
// Guardamos el tiempo final t1 y la memoria final memFinal
// Imprimimos en consola el nombre de la funcion, el resultado, el tiempo de ejecucion y la memoria usada
// Por ultimo imprimo en consola para comparar ambas funciones

const n = 40;

function medida(fn, n) {
    const memInicial = process.memoryUsage().heapUsed;
    const t0 = performance.now();
    let res;
    try { res = fn(n); } catch(e) {res = 'error';}
    const t1 = performance.now();
    const memFinal = process.memoryUsage().heapUsed;
    console.log(`\n--- ${fn.name} ---`);
    console.log("Resultado: ", res);
    console.log(`Tiempo de ejecución: ${(t1 - t0).toFixed(3)} ms`);
    console.log(`Memoria usada: ${(memFinal - memInicial)} bytes`);
}

console.log(`Comparando iterativo y recursivo con n = ${n}`);
medida(fibIter, n);
medida(fibRec, n);