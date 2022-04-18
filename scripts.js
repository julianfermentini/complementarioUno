let continua = true;
alert("Ingrese dos numero para compararlos");
let numeroUno = 0;
let numeroDos = 0;
while (continua) {
  numeroUno = parseFloat(prompt("Ingrese un numero"));
  numeroDos = parseFloat(prompt("Ingrese otro numero"));

  if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Por favor ingrese un numero valido");
  } else {
    continua = false;
  }
}

if (numeroUno > numeroDos) {
  alert("El numero uno es mayor");
} else if (numeroDos > numeroUno) {
  alert("El numero dos es mayor");
} else if (numeroUno === numeroDos) {
  alert("Los numero son iguales");
}
