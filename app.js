//movimiento del titulo//
$("#Productos").fadeOut("slow", function(){
$("#Productos").fadeIn(8000);})
$("#Productos").css("width", "40%");
$("#Productos").css({ 
                    "font-size": "60px", 
                     });



const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
 
$.get(URLGET, (respuesta, estado) => {
    if (estado === "success")  {
        $("#dolar").append (`
        <p>Cotización ${respuesta[1].casa.nombre}  ${respuesta[1].casa.venta}</p>
            
        `)
        console.log(respuesta);    
        }})
       
$("#dolar").fadeOut("slow", function(){
$("#dolar").fadeIn(1000);
})

//Productos //
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


let carrito = [];
let preciosCarrito = [];
var precioInicial = 0

let btn = document.getElementById("boton-compra");
let mostrarCarrito = document.getElementById("mostrarCarrito");

function comprar() {
    var valoresCompra = document.getElementById('select').value;
    switch (valoresCompra) {
        case "1":
            carrito.push(item1);
            preciosCarrito.push(item1.precio)

            break;
        case "2":
            carrito.push(item2);
            preciosCarrito.push(item2.precio)
            
            break;

        case "3":
            carrito.push(item3);
            preciosCarrito.push(item3.precio)
    
            break;
        case "4":
            carrito.push(item4);
            preciosCarrito.push(item4.precio)
                
            break;    
    }

    console.log(carrito);
    console.log(preciosCarrito);
    const sumarPrecios = () => {
        for (let index = 0; index < preciosCarrito.length; index++) {
            precioInicial += preciosCarrito[index];
            console.log(precioInicial);
        }
        return precioInicial
    }

    sumarPrecios();
    const div_nombre_bienvenida = document.querySelector('.productosCarrito');

    const div_contenedor = document.createElement('div');
    div_contenedor.className = "carrito"

    const div_precio = document.createElement('div');
    div_precio.className = "precio_pedido"

    const p_precio = document.createElement('p');
    p_precio.className = "precio_p"

    div_contenedor.appendChild(div_precio);
    div_precio.appendChild(p_precio);
    div_nombre_bienvenida.appendChild(div_contenedor);

    const renderizarPrecioFinal = (precioInicial) => {
        p_precio.textContent = `El total de su compra es de ${precioInicial}`;
    };
    renderizarPrecioFinal(precioInicial)
}

comprar(); 
btn.addEventListener("click", function() {
    let eliminoCarrito = document.querySelector('.carrito');
    let eliminoPrecio = document.querySelector('.precio_p');
    eliminoCarrito.parentNode.removeChild(eliminoCarrito);
    eliminoPrecio.parentNode.removeChild(eliminoPrecio);
    comprar()
})


