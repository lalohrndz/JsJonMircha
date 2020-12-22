import Saludar, { saludar, password, PI } from "./constantes.js";
import { aritmetica as ar } from "./aritmetica.js";

console.info("Se imprime la constante de PI del archivo de constantes");
console.log(PI);
console.info("Se imprime la variable de password del archivo de constantes");
console.log(password);
console.info("Se imprime la funcion de restar del archivo de aritmetica");
console.log(ar.restar(2, 1));
console.info("Se imprime la funcion de sumar del archivo de aritmetica");
console.log(ar.sumar(5, 5));
saludar();

let saludo = new Saludar();
saludo;
