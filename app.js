//en app va lo que se quiere ejecutar

import { nombre } from "./js/ex1.js";
import { sum } from "./js/ex2.js";
import { containsWord } from "./js/ex3.js";
import { reverseWords } from "./js/ex4.js"
import { printTerminal } from "./js/printData.js";

//ex2
let number1 = 3; //cuando son variables de usuario
let number2 = 5;

function app() {
  printTerminal("The name is : " + nombre); //ex1

  printTerminal(sum(number1, number2)); //ex2

  //ex3
  printTerminal(containsWord("abcnEnglishsef")); //true
  printTerminal(containsWord("abcnEglishsef")); //false
  printTerminal(containsWord("eNglisH")); //true
  printTerminal(containsWord("miau")); //false

  //ex 4
  printTerminal(reverseWords("Hello World")); //"World Hello" 
  printTerminal(reverseWords("Hi There.")); // "There. Hi"
  printTerminal(reverseWords("MiauGuau")); //"MiauGuau"
}

app();


