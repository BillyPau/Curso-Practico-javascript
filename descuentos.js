function calcularDescuento(precio, descuento) {
    const porcentajeDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajeDescuento)/100;
    return precioDescuento;
}

function calcularPrecioDescuento() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
   
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioFinal = calcularDescuento(priceValue,discountValue);
    
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioFinal;
}