function calculadora (){
    debugger
let primerNro = prompt("Ingrese el producto al carrito")  
let segundoNro = prompt("Ingrese el otro producto al carrito")
realizarCalculo = (primerNro, segundoNro) 
}

function realizarCalculo (primerNro, segundoNro){
    let resultado = parseInt (primerNro) + parseInt (sengundoNro)
    console.log("Resultado", resultado)
}

calculadora()

function generadorAutomatico() {
    productos.push(new Producto(1234, "Vaso térmico", 350))
    productos.push(new Producto(2345, "Mate antivuelco", 550))
    productos.push(new Producto(3456, "Botella diaria", 650))
    productos.push(new Producto(4567, "Bootella kids", 450))
    productos.push(new Producto(5678, "Organizador", 650))
    productos.push(new Producto(6789, "Organizador Canastita", 550))
    productos.push(new Producto(7890, "Bowls", 670))
}


function creoID() {
    return parseInt(Math.random() * 10000)
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:")
    let importe = prompt("Ingrese el importe:")
        productos.push(new Producto(creoID(), nombre, importe))
}

function calcularCarrito() {
    debugger
    console.log("TOTAL DEL CARRITO")
    let total = carrito.reduce( (acc, c) => acc + c.importe, 0)
        console.table(total)
}
