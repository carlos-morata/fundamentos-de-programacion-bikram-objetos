// // 1 OBJETOS - DECLARACIÓN
const Coche = {
    marca: "Peugeot",
    modelo: "208",
    matricula: "1026 BBC"
}

// // 2
const Casa = {
    codPostal: "28030",
    calle: "De la marroquina",
    portal: 8,
    piso: "4A"
}

// // 3
let FullStackDeveloper = {
    lenguajes: ["JavaScript", "React", "HTML"],
    proyectos: ["Portfolio", "Calculadora"]
}

// // 4
const Perro = {
nombre: "Rocco",
raza: "Canne Corso",
color: "Negro",
edad: "4 meses",
ladrar: function () {
    return console.log("guagua")
},
popo: function () {
    return Math.random() * 3
} 
}

// // 5
let marcaPortatil = Portatil.marca
console.log(marcaPortatil)

// // 6
let marcaPortatil2 = Portatil["marca"]
console.log(marcaPortatil2)

// // 7
let grupos = Concierto.grupos

// // 8
let RGB = [Led.rojo, Led.verde, Led.azul]


// // 9 
Portatil.modelo = "P345"

// // 10
Concierto.cartelera.push("Guns N' Roses")

// // 11
Concierto.fecha = new Date()

// // 12
Impresora.imprimiendo = {

}

// 13
let Noticia = {
    titular: "Bootcamp",
    cuerpo: "Programación"
}

// 14
let Persona = {
    nombre: "Carlos",
    apellidos: "Moratinos",
    edad: 21
}

// 15
let Avion = {
    numPasajeros: 2,
    despegar: function () {
        return console.log("despegando")
    },
    volar: function () {
        return console.log("llegando al destino")
    },
    aterrizar: function () {
        return console.log("aterrizando")
    } 
}

// 16
let Paquete = {
    
}

// 17 
let Pais = {
    numHabitantes: 123,
    continente: "Europa",
    gentilicio: "Español"
}

// 18 LECTURA DE PROPIEDADES
let codError = O_Error.codigo;

// 19
let integrantes = Grupo.integrantes

// 20
let nivelesTinta = Impresora.tinta

// 21
let pixeles = Pantalla.pixeles

// 22
let especificaciones = Movil.["especificaciones"];

// 23 MODIFICACIÓN DE PROPIEDADES
Grupo.numIntegrantes = 5;

// 24 
Pantalla.dimensiones = "1920x1080";

// 25
if(Led.encendido) {
    Led.encendido = false;
} else {
    Led.encendido = true;
}

// 26
Movil.temperatura = "20º"