// Reserva de asientos usando JS mostrando cuadrícula con el encabezado de lo q estas haciendo, botones d reservas, etc

// coonfiguracion inicial
const app = document.getElementById("app");

const FILAS = 5;
const COLUMNAS = 10;

let asientos = [];

let selectorFila, selectorAsiento, divMensaje, spanDisponibles, spanReservados;

// Inicializacion de las funciones
function iniciar() {
    crearEncabezado();
    crearControles();
    crearMensaje();
    crearContadores();
    crearAsientos();
}

iniciar();

// Encabezado de la web
function crearEncabezado() {
    const h1 = document.createElement("h1");
    h1.textContent = "Sistema de reserva de Asientos";
    app.appendChild(h1);
}

// Controles
function crearControles() {
    const contenedor = document.createElement("div");
    contenedor.className = "controles";

    // Selector de la fila en la q nos encontremos
    selectorFila = document.createElement("select");
    for (let i = 0; i < FILAS; i++) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = `Fila ${i}`;
        selectorFila.appendChild(opcion);
    }

    // seledctor del asiento q estamos seleccionando
    selectorAsiento = document.createElement("select");
    for (let j = 0; j < COLUMNAS; j++) {
        const opcion = document.createElement("option");
        opcion.value = j;
        opcion.textContent = `Asiento ${j}`;
        selectorAsiento.appendChild(opcion);
    }

    //boton para reservar ese asiento en la fila concreta
    const botonReservar = document.createElement("button");
    botonReservar.textContent = "Reservar";
    botonReservar.addEventListener("click", reservarAsiento);

    // Boton para reiniciar las opciones
    const botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "Reiniciar";
    botonReiniciar.addEventListener("click", reiniciarAsientos);

    contenedor.appendChild(selectorFila);
    contenedor.appendChild(selectorAsiento);
    contenedor.appendChild(botonReservar);
    contenedor.appendChild(botonReiniciar);

    app.appendChild(contenedor);

}

// funciones relacionadas con mensajes
function crearMensaje() {
    divMensaje = document.createElement("div");
    divMensaje.className = "mensaje";
    app.appendChild(divMensaje);
}

function mostrarMensaje(texto, tipo) {
    divMensaje.textContent = texto;
    divMensaje.className = `mensaje ${tipo}`;
}

// Contadores
function crearContadores() {
    const contenedor = document.createElement("div");

    spanDisponibles = document.createElement("span");
    spanReservados = document.createElement("span");

    contenedor.appendChild(document.createTextNode("Disponible: "));
    contenedor.appendChild(spanDisponibles);
    contenedor.appendChild(document.createTextNode("| Reservados: "));
    contenedor.appendChild(spanReservados);

    app.appendChild(contenedor);
}

// Creación de lista de los asientos
function crearAsientos() {
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-asientos";

    for(let i = 0; i < FILAS; i++) {
        asientos[i] = [];
        for (let j = 0; j < COLUMNAS; j++) {
            const boton = document.createElement("button");
            boton.className = "asiento disponible";
            boton.textContent = `Asiento ${i} - ${j}`;

            boton.dataset.fila = i;
            boton.dataset.columna = j;

            asientos[i][j] = false; //false = no esta seleccionadoaun disponible

            boton.addEventListener("click", () => alternarAsiento(i, j, boton));

            contenedor.appendChild(boton);
        }
    }

    app.appendChild(contenedor);
    actualizarContadores();
}

//Reserva del form
function reservarAsiento() {
    const fila = parseInt(selectorFila.value);
    const columna = parseInt(selectorAsiento.value);

    if(asientos[fila][columna] === true) {
        mostrarMensaje("El asiento seleccionado ya está ocupado.", "error");
        return;
    }

    asientos[fila][columna] = true;

    actualizarUIAsiento(fila, columna);
    actualizarContadores();
}
//reserva x click directo
function alternarAsiento(fila, columna, elemento) {
    asientos[fila][columna] = !asientos[fila][columna];

    if(asientos[fila][columna]) {
        elemento.className = "asiento reservado";
    } else {
        elemento.className = "asiento disponible";
    }

    actualizarContadores();
}

//Actualizar UI del asiento
function actualizarUIAsiento(fila, columna) {
    const botones = document.querySelectorAll(".asiento");

    botones.forEach(boton => {
        if(parseInt(boton.dataset.fila) === fila && parseInt(boton.dataset.columna) === columna) {
            boton.className = "asiento reservado";
        }
    });
}

//contadores
function actualizarContadores() {
    let disponibles = 0;
    let reservados = 0;

    for(let i = 0; i < FILAS; i++) {
        for(let j = 0; j < COLUMNAS; j++) {
            if (asientos[i][j] === true) {
                reservados++;
            } else {
                disponibles++;
            }
        }
    }

    spanDisponibles.textContent = disponibles;
    spanReservados.textContent = reservados;
}

//reinicio
function reiniciarAsientos() {
    const botones = document.querySelectorAll(".asiento");

    for (let i = 0; i < FILAS; i++) {
        for (let j = 0; j < COLUMNAS; j++) {
            asientos[i][j] = false;
        }
    }

    botones.forEach(boton => {
        boton.className = "asiento disponible";
    });

    mostrarMensaje("Todos los asientos han sido liberados", "exito");
    actualizarContadores();
}
