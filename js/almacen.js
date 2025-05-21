let unidades = parseInt(prompt("Unidades"))
let precio = parseInt(prompt("Precio"))
let preciofinal = unidades * precio

if(unidades < 5){
    document.writeln("Obtiene 10% de descuento, total a pagar", preciofinal - (preciofinal * 0.1))
}else if(unidades >= 5 && unidades < 10){
    document.writeln("Obtiene 20% de descuento, total a pagar", preciofinal - (preciofinal * 0.2))
}else if(unidades >= 10){
    document.writeln("Obtiene 40% de descuento, total a pagar", preciofinal - (preciofinal * 0.4))
}else{
    document.writeln("no obtiene descuento")
}