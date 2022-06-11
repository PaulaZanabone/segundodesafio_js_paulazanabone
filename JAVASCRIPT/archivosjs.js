//let nombreCompleto= prompt("Suscribite para recibir ofertas")
//alert("quiero recibir ofertas")
//confirm("¿desea suscribirse para recibir nuestras ofertas?")



//let username = prompt("Ingrese su nombre:")
//let username = "atodos"
//if(username == "atodos"){
//console.log("Bienvenidos, username")
//} else{
//    console.warn ("No se reconoce el usuario ingresado")
//}

//let suscripcion = prompt ("quiero recibir ofertas")
//suscripcion=suscripcion

debugger

//let respuesta = confirm ("¿Está seguro que se quiere subscribir?")
//if(respuesta == true) {
//console.warn("Ingrese su correo electrónico")
//}else{
 //   console.log("Seguí navegando en Las TOTAS")
//}


let limite = parseInt(prompt("Ingrese un correo electronico:"))
for (let i = 0; i < limite; i++) {
        if (i === 5) {
            continue
        }
        console.log("Correo válido:", i)
    }

    let seguimos = true

 while (seguimos) {
     console.log("Correo invalido.")
     seguimos = confirm("¿Olvidaste la contraseña?")
 }


 