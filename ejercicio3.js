var precio = 0;

precio = parseInt(prompt("Digita el precio del producto"))

iva = ivaf (precio);

function ivaf (nPrecio) {

    const total = nPrecio + 2.1;
    const ivag = nPrecio * 0.21;
    const siniva = nPrecio;

    console.log ("El precio sin iva es:"+siniva);
    console.log ("IVA:"+ivag);
    console.log ("Total:"+total);

}