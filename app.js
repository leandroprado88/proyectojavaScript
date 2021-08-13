class Usuario {
    constructor(nombreUsuario, apellidoUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
    }
    saludar() {
        alert(" Hola! " + this.nombreUsuario + " " + this.apellidoUsuario);
    }
}
let nombre = prompt("Como te llamás?");
let apellido = prompt("Cuál es tu apellido?");
const persona1 = new Usuario(nombre, apellido);
persona1.saludar();
console.log(persona1)

//Productos
class Productos {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}
const item1 = new Productos(1,`Remera Adidas her studio`, 7500);
const item2 = new Productos(2, `pantalon Largo Adidas River Plate`, 4800);
const item3 = new Productos(3, "Zapatillas Vans negras", 9200);
const item4 = new Productos(4, "Remera Jordan AJ1 Shoe", 4500);
const item5 = new Productos(5, "Mochila adidas Disney Mickey", 4799);
const item6 = new Productos(6, "Buzo adidas Shattered Trefoil", 12999);


let remera = " 1 = Remera Adidas her studio" 
let pantalon = " 2 = Pantalon Largo Nike River Plate"
let zapatillas = " 3 = Zapatillas Vans negras"
let zapatillas2 = "4= Remera Jordan AJ1 Shoe"
let mochila = "5= Mochila adidas Disney Mickey"
let buzo = "6= Buzo adidas Shattered Trefoil"


let carrito = [];
function comprar() {
    let buscar = prompt(`Que querés comprar? Ingrese el número correspondiente: ${item1.id} = ${item1.producto} / ${item2.id} = ${item2.producto} / ${item3.id} = ${item3.producto} / ${item4.id} = ${item4.producto} / ${item5.id} = ${item5.producto} / ${item6.id} = ${item6.producto}`);
    switch (buscar) {
        case "1":
            carrito.push(item1)
            return item1.precio;
        case "2":
            carrito.push(item2)
            return item2.precio;
        case "3":
            carrito.push(item3)
            return item3.precio;
        case "4":
            carrito.push(item4)
            return item4.precio;
        case "5":
            carrito.push(item5)
            return item5.precio;
        case "6":
            carrito.push(item6)
            return item6.precio;
        default:
            alert("No existe el producto ingresado");
            break;
    }
}
console.log(carrito);
function precioFinal() {
    primerCompra = true;
    let precioInicial = 0;
    while (primerCompra) {
        let nuevaCompra = comprar();
        precioInicial = precioInicial + nuevaCompra;
        console.log(precioInicial);
        primerCompra = confirm("Usted desea comprar otro producto?");
    }
    return precioInicial;
}
alert(`El total de su carrito es de $ ${precioFinal()}`);
