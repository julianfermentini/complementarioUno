/*
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

*/

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

let numeroUno = parseFloat(prompt("Ingrese un numero"));
let numeroDos = parseFloat(prompt("Ingrese otro numero"));
let operacion = prompt("Ingrese una operacion (+,-,*,/)");

if (operacion === "+") {
  alert(sumar(numeroUno, numeroDos));
} else if (operacion === "*") {
  alert(multiplicar(numeroUno, numeroDos));
} else if (operacion === "/") {
  alert(dividir(numeroUno, numeroDos));
} else if (operacion === "-") {
  alert(restar(numeroUno, numeroDos));
} else {
  alert("Operacion no valida");
}
