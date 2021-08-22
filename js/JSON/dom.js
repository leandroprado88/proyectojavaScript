const pedidos = document.querySelector (`.oferta`);
const div_precio = document.createElement (`div`);

const compraTotal = document.createElement (`p`);

div_precio.appendChild(compraTotal);
pedidos.appendChild(div_precio);

const renderizarPrecioFinal = (precioFinal) => {
    compraTotal.textContent = `El total de su carrito es de $ ${precioFinal()}`;
};



