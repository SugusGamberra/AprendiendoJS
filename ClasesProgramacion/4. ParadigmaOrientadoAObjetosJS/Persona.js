// Para el paradigma orientado a objetos en JS tomaré el ejemplo anterior
// Crearé una persona con nombre y edad
// Y le agregaré un método para saludar

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años.`);

    }

}

let p = new Persona("Patri", 32);
p.saludar();

let b = new Persona("Yisus", 23);
b.saludar();

let a = new Persona("PacoPepe", 87);
a.saludar();

