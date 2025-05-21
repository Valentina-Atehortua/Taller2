let A = parseFloat(prompt("Digita tu nota de matemáticas"))
let B = parseFloat(prompt("Digita tu nota de español"))
let C = parseFloat(prompt("Digita tu nota de sociales"))

let promedio = (A + B + C) / 3

if(promedio == 10){
    alert("Excelente")
}else if(promedio >7 && promedio <=10){
    alert("Bueno")
}else if (promedio <7){
    alert("Insuficiente")
}