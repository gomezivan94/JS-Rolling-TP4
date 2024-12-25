// EJERCICIO 1

/* const auto  = {
    marca: "Volkswagen",
    modelo: "Vento",
    color: "Negro",
    encendido: false,
    encender: function(){
        if(auto.encendido === false){
            auto.encendido = true
            return document.write('El auto esta encendido');
        } else{
            return document.write("El auto ya esta encendido")
        }
    },
    apagar: function(){
        if(auto.encendido === true){
            auto.encendido = false;
            return document.write("El auto se apago")
        } else {
            return  document.write("El auto ya esta apagado")
        }
    }

}


auto.encender()
auto.apagar() */


// ---------------------------------------------------------------------------------------

// EJERCICIO 2

/* const cliente = {
    titular: "Alex",
    saldo: 0,

    ingresar: function(monto){
        return this.saldo += monto;
    },
    extraer: function(monto){
        return this.saldo -= monto;
    },
    informar: function(){
        return document.write(`Titular de la cuenta: ${cliente.titular} <br> Saldo en la cuenta: ${cliente.saldo} <br>`)
    }
}

cliente.informar();
cliente.ingresar(1500);
cliente.informar();
cliente.extraer(1000);
cliente.informar(); */

// ---------------------------------------------------------------------------------------

// EJERCICIO 3

/* class Rectangulo {
    constructor(alto, ancho){
        this._alto = alto;
        this._ancho = ancho;
    }

    get alto(){
        return this._alto;
    }
    get ancho(){
        return this._ancho;
    }


    set alto(nuevaAltura){
        if(nuevaAltura > 0){
            this._alto = nuevaAltura
        } else {
            alert("La altura debe ser mayor que 0")
        }
    }

    set ancho(nuevoAncho){
        if(nuevoAncho > 0){
            this._ancho = nuevoAncho
        } else {
            alert("El ancho debe ser mayor que 0")
        }
    }

    perimetro(){
        return document.write("El perimetro es de: " + (this._alto * this._ancho))
    }

    area(){
        return document.write("El area es de: " + (this._alto + this._alto + this._ancho + this._ancho))
    }
}

const rectangulo1 = new Rectangulo(20,40);


rectangulo1.alto = 500;
rectangulo1.ancho = 10;

rectangulo1.area();
rectangulo1.perimetro(); */

// ----------------------------------------------------------------------------------------

// EJERCICIO 4

class Producto {
    constructor(codigo, nombre, precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }

    imprimirDatos(){
        return document.write(`
            Codigo: ${this._codigo} <br>
            Nombre: ${this._nombre} <br>
            Precio: ${this._precio} <hr>
            
        `
        )    
    }
}

const producto1 = new Producto(139485,"Turbo", 550000);
const producto2 = new Producto(306485,"Intercooler", 220000);
const producto3 = new Producto(170794,"ECU", 500000)

const productos = [producto1, producto2, producto3];

productos.forEach(producto => producto.imprimirDatos());

// ----------------------------------------------------------------------------------------

// EJERCICIO 5

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anio){
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._anio = anio;
    }

    mostrarGeneracion(){
        switch(true){
            case this._anio <= 1948: document.write(`Año de nacimiento: ${this._anio} <br> Pertenece a "Silent Generation" y el rasgo caracteristico es Austeridad <hr>`)
            break;
            case this._anio <= 1968: document.write(`Año de nacimiento: ${this._anio} <br> Pertenece a Generacion "Baby Boom" y el rasgo caracteristico es Ambicion <hr>`)
            break;
            case this._anio <= 1980: document.write(`Año de nacimiento: ${this._anio} <br> Pertenece a Generacion "X" y el rasgo caracteristico es Obsesion por el exito <hr>`)
            break;
            case this._anio <= 1993: document.write(`Año de nacimiento: ${this._anio} <br> Pertenece a Generacion "Y" y el rasgo caracteristico es Frustracion <hr>`)
            break;
            case this._anio <= 2010: document.write(`Año de nacimiento: ${this._anio} <br> Pertenece a Generacion "Z" y el rasgo caracteristico es Irreverencia <hr>`)
            break;
            default: document.write("Fecha invalida")
            break; 
        }
    }

    esMayorDeEdad(){
        return this._edad >= 18 ? document.write("Es mayor de edad <hr>") : document.write("Es menor de edad <hr>")
    }

    mostrarDatos(){
        return document.write(`
            
            Nombre: ${this._nombre} <br>
            Edad: ${this._edad} <br>
            DNI: ${this._dni} <br>
            Sexo: ${this._sexo} <br>
            Peso: ${this._peso}kg <br>
            altura: ${this._altura}cm <br>
            Año de Nacimiento: ${this._anio} <hr>
        `)
    }

    generaDni(){
        return document.write(`DNI Aleatorio: ${Math.floor(Math.random() * 99999999)} <hr> `)
    }

}

let persona1 = new Persona("Ivan",17,38030648,"M",63,175,1992)

persona1.mostrarGeneracion()
persona1.esMayorDeEdad()
persona1.mostrarDatos()
persona1.generaDni()

// ------------------------------------------------------------------------------------------

// EJERCICIO 6

class Libro {
    // Constructor de la clase Libro
    constructor(ISBN, titulo, autor, numPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
    }

    // Métodos getter y setter para ISBN
    get ISBN() {
    return this.ISBN;
    }

    set ISBN(ISBN) {
    this.ISBN = ISBN;
    }

    // Métodos getter y setter para Título
    get Titulo() {
    return this.titulo;
    }

    set Titulo(titulo) {
    this.titulo = titulo;
    }

    // Métodos getter y setter para Autor
    get Autor() {
    return this.autor;
    }

    set Autor(autor) {
    this.autor = autor;
    }

    // Métodos getter y setter para Número de páginas
    get NumPaginas() {
    return this.numPaginas;
    }

    set NumPaginas(numPaginas) {
    this.numPaginas = numPaginas;
    }

    // Método para mostrar la información del libro
    mostrarLibro() {
    console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numPaginas}`);
    }
}


let libro1 = new Libro('123', 'El Gran Libro', 'Juan Pérez', 300);
let libro2 = new Libro('456', 'El Pequeño Manual', 'María García', 150);


libro1.mostrarLibro();
libro2.mostrarLibro();


if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(`${libro1.getTitulo()} tiene más páginas que ${libro2.getTitulo()}.`);
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(`${libro2.getTitulo()} tiene más páginas que ${libro1.getTitulo()}.`);
} else {
    console.log(`${libro1.getTitulo()} y ${libro2.getTitulo()} tienen la misma cantidad de páginas.`);
}

// ------------------------------------------

// EJERCICIO 7

// Clase Contacto
class Contacto {
    constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
    }


    esIgual(contacto) {
    return this.nombre === contacto.nombre;
    }
}

class Agenda {
    constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
    }


    aniadirContacto(contacto) {
    if (this.agendaLlena()) {
        console.log("La agenda está llena, no se puede añadir más contactos.");
    } else {
        if (this.existeContacto(contacto)) {
        console.log("Este contacto ya existe.");
        } else {
        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.nombre} añadido correctamente.`);
        }
    }
    }

    
    existeContacto(contacto) {
    return this.contactos.some(c => c.esIgual(contacto));
    }


    listarContactos() {
    if (this.contactos.length === 0) {
        console.log("La agenda está vacía.");
    } else {
        console.log("Lista de contactos:");
        this.contactos.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
        });
    }
    }


    buscarContacto(nombre) {
    const contacto = this.contactos.find(c => c.nombre === nombre);
    if (contacto) {
        console.log(`El contacto de ${nombre} es: ${contacto.telefono}`);
    } else {
        console.log(`El contacto con nombre ${nombre} no se encontró.`);
    }
    }


    eliminarContacto(contacto) {
    const indice = this.contactos.findIndex(c => c.esIgual(contacto));
    if (indice !== -1) {
        this.contactos.splice(indice, 1);
        console.log(`Contacto ${contacto.nombre} eliminado.`);
    } else {
        console.log(`No se encontró el contacto ${contacto.nombre} para eliminar.`);
    }
    }

    agendaLlena() {
    return this.contactos.length >= this.tamano;
    }


    huecosLibres() {
    return this.tamano - this.contactos.length;
    }
}


function menu() {
    const agenda = new Agenda();
    let continuar = true;

    while (continuar) {
    const opcion = prompt(
        "Seleccione una opción:\n" +
        "1. Añadir contacto\n" +
        "2. Listar contactos\n" +
        "3. Buscar contacto\n" +
        "4. Eliminar contacto\n" +
        "5. Verificar si la agenda está llena\n" +
        "6. Ver huecos libres\n" +
        "7. Salir"
    );

    switch (opcion) {
        case '1':
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const contacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(contacto);
        break;

        case '2':
        agenda.listarContactos();
        break;

        case '3':
        const nombreBusqueda = prompt("Ingrese el nombre del contacto que desea buscar:");
        agenda.buscarContacto(nombreBusqueda);
        break;

        case '4':
        const nombreEliminar = prompt("Ingrese el nombre del contacto que desea eliminar:");
        const contactoEliminar = new Contacto(nombreEliminar);
        agenda.eliminarContacto(contactoEliminar);
        break;

        case '5':
        if (agenda.agendaLlena()) {
            console.log("La agenda está llena.");
        } else {
            console.log("La agenda no está llena.");
        }
        break;

        case '6':
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;

        case '7':
        console.log("Saliendo del menú...");
        continuar = false;
        break;

        default:
        console.log("Opción no válida. Intente de nuevo.");
    }
    }
}


menu();
