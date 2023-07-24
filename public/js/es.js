
// switch (diaSemana) {
//   case "lunes":
//   case "martes":
//   case "miércoles":
//   case "jueves":
//   case "viernes":
//     console.log("Es un día laboral");
//     break;
//   case "sábado":
//   case "domingo":
//     console.log("Es fin de semana");
//     break;
//   default:
//     console.log("Día inválido");
// }
// let diaSemana = "domingo";
// if(diaSemana == 'lunes'){
//     console.log("Es un día laboral");
// }
// else if(diaSemana == 'martes'){
//     console.log("Es un día laboral")
// }
// else if(diaSemana == 'miercoles'){
//     console.log("Es un día laboral")
// }
// else if(diaSemana == 'jueves'){
//     console.log("Es un día laboral")
// }
// else if(diaSemana == 'viernes'){
//     console.log("Es un día laboral")
// }
// else if(diaSemana == 'sabado'){
//     console.log("Es un día de descanso")
// }
// else if(diaSemana = 'domingo'){
//     console.log("Es un día de descanso")
// }
// else{
//     console.log("Dato no existe")
// }

let diaSemana = "sabado";
if (diaSemana == 'lunes' || diaSemana == 'martes' || diaSemana == 'miércoles' || diaSemana == 'jueves') {
    console.log("Es un día laboral");
} else if (diaSemana == 'viernes' || diaSemana == 'sábado' || diaSemana == 'domingo') {
    console.log("Es un día de descanso");
} else {
    console.log("Dato no existe");
}

function sumar(a, b) {
    return a + b;
  }
  let resultado = sumar(2, 3);
  console.log("El resultado es: " + resultado); // Output: El resultado es: 5

function saludo(nombre){
    return 'hola ' + nombre
}

let nombre = 'Angela'
let oracionSaludo = saludo(nombre)
console.log(oracionSaludo)
