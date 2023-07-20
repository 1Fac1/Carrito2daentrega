//BIENVENIDOS
alert('Bienvenido a TodoMates!')

const productos = [
{nombre: "Mate camionero", precio: 2800 },
{nombre: "Mate imperial", precio: 2500 },
{nombre: "Termo stanley", precio: 11200 },
{nombre: "Termo lumilagro", precio: 7500 },
{nombre: "Bombilla premiun", precio: 1150 },
{nombre: "Bombilla economica", precio: 900 },
  ]
let carrito = []

let seleccion = prompt("Desea comprar algun producto?")

while(seleccion != "si" && seleccion != "no"){
 alert("Por favor responda si o no")
 seleccion = prompt("Desea comprar algo si o no?")
}

if(seleccion == "si"){
    alert("A continuacion nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + 
    producto.precio + "$");

    alert(todoslosProductos.join("\n"))
} else if (seleccion == "no"){
    alert("Gracias por venir, hasta pronto!")
}

while (seleccion != "no"){
  let producto = prompt("Agrega un producto a tu carrito")
  let precio = 0
  if(producto == "Mate camionero" || producto == "Mate imperial" || producto == "Termo stanley" || producto == "Termo lumilagro" || producto == "Bombilla premiun" 
  || producto == "Bombilla economica"){
    switch(producto) {
        case "Mate camionero":
        precio = 2800;
        break;
        case "Mate imperial":
        precio = 2500;
        break;
        case "Termo stanley":
        precio = 11200;
        break;
        case "Termo lumilagro":
        precio = 7500;
        break;
        case "Bombilla premiun":
        precio = 1150;
        break;
        case "Bombilla economica":
        precio = 900;
        break;
        default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))
    carrito.push({producto, unidades, precio})

} else {
    alert("No disponemos de este producto")
}

seleccion = prompt("Desea agregar mas productos?")

while(seleccion === "no"){
alert("Gracias por su compra, hasta pronto")
carrito.forEach((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
})
break;
} 
}
const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`)
