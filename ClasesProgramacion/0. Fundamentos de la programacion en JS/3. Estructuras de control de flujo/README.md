# ESTRUCTURAS DE CONTROL DE FLUJO

De momento estamos ejecutando código línea por línea. Estas estructuras nos sirven para saltar lineas, repetir bloques o ejecutar código con condicionales!

## Condicionales

Basicamente esto es "Si esto es así quiero que hagas X, si no, haz Y". Para que esto funcione usamos **operadores de comparacion**!! 

- Mayor que: >
- Mayor o igual que: >=
- Menor que: <
- Menor o igual que: <=
- Estrictamente igual que: ===
- Estrictamente diferente que: !==

### Operadores lógicos:

- Y: &&
    - (edad > 18 && tieneCarnet === true) // es verdadero (true) si ambos son true
- O: `
    - (edad > 18 ` tieneCarnet === true) // Al menos una debe ser true
- No: !
    - !esValido // Si esValido es true, !esValido seria false

### If/Else

const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad!!");
} else {
    console.log("Ta chikito, eres menor de edad");
}

Si mantenemos el valor en 18 o más te mostrará el primer mensaje, si cambiamos a un valor menor a 18 te mostrara el segundo mensaje :3

### Else if

const puntuacion = 85;

if (puntuacion >= 90) {
    console.log("Bien hecho fiera, maquina, mastodonte, farm animal :D");
} else if (puntuacion >= 70) {
    console.log("Not bad ;D");
} else {
    console.log("Bueeeeno, podrías mejorar eh?");
}

## Bucles

Nos permiten recorrer un trozo de código varias veces sin tener que escribirlo 40 veces

### For

Esto es repeticiones con contador, que sabes perfectamente cuantas veces quieres que se repita algo, por ejemplo, mientras que i sea menor a 5 este bucle se repetira, y mientras se repite le va sumando uno a i, cuando llegue a 4 parará!

for (let i = 0; i < 5; i++) {
    console.log(i);
}

### While

Esto es repetir el bucle mientras una condicion sea verdadera, y no sabes cuantas veces quieres repetir el bucle:

let vidaEnemigo = 5;

while (vidaEnemigo > 0 ) {
    console.log("Le quedan " + vidaEnemigo + " vidas!!");
    vidaEnemigo--;
}

console.log("Has ganadoooo!!!");

### Do... While

Primo rebelde del while: garantiza que el codigo dentro del do se ejecute minimo una vez antes de revisar la condicion por primera vez, se usa cuando necesitas obtener por ejemplo la entrada de tu usuario antes de decidir si seguirle preguntando.

let numero = 0;

do {
    console.log("Número es: " + numero);
    numero++;
} while (numero < 5);

### Swithc

El switch es la alternativa limpita y eficiente que usar una larga cadena de ifs cuando quieres comparar una unica variable contra muchos valores fijos. Es crucial que pongamos break sobretodo aqui, ya que si no te hace un bucle infinito HAHAHAHHAHA no le quieras hacer eso a tu pc :,)

const diaSemana = "Martes";

switch (diaSemana) {
    case "Lunes":
        console.log("Empezamos la tortura...");
        break;
        
    case "Martes":
    case "Miércoles":
    case "Jueves":
        console.log("Vamos aguantando, hay esperanzas en el viernes uwu");
        break; 

    case "Viernes":
        console.log("Sale plan o klok?");
        break;

    default:
        console.log("Ese no es un día válido.");
}

Si quieres toquetear codigos y ver si funcan ve a [controlFlujos.js](./controlFlujos.js) ;D