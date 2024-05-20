//en app va lo que se quiere ejecutar

import { nombre } from "./js/ex1.js";
import { sum } from "./js/ex2.js";
import { printTerminal } from "./js/printData.js";

let number1 = 3; //cuando son variables de usuario
let number2 = 5;

function app() {
  printTerminal("The name is : " + nombre);
  printTerminal(sum(number1, number2));
}

app();


