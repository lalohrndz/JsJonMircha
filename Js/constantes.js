export const PI = Math.PI;

export let usuario = "Lalo",
  password = "123";

//La exportación se realiza de forma automática en el archivo que se referencie
export function saludar() {
  console.log("Hola modulos +ES6");
}

export default class Saludar {
  constructor() {
    console.log("Hola clases +ES6");
  }
}
