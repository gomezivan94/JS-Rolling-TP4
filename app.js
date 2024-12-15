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
rectangulo1.perimetro();
 */
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
    
}
