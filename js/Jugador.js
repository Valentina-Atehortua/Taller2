let A = parseInt(prompt("Digita tu estatuta sin puntos"))
let B = parseInt(prompt("Digita tu velocidad"))
let C = parseInt(prompt("Digita tu edad"))

if(A >170 && B >= 100){
    alert("Ingresas al equipo")
    if(C >= 18){
        alert("División mayor")
    }else{
        alert("División menor")
    }
}else{
    alert("No puede ingresar al equipo")
}



