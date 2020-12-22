/* ************ 1 de 10 ************
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. 
/********  EJERCICIO 1 ********/

const textCounter = (a) => {
  let someText = a;
  let type = typeof someText;

  if (typeof someText == "undefined") {
    console.log("Favor de ingresar texto.");
  } else {
    if (typeof someText !== "string") {
      console.error(
        `El tipo de dato de "${someText}" es ${type}. Favor de ingresar texto`
      );
    } else {
      console.log(`El texto "${someText}" tiene ${someText.length} caracteres`);
    }
  }
};

const a = {
  a: "a",
  b: "b",
};

const b = ["a", "1"];

console.info("***Caso de un número***");
textCounter(32);

console.info("***Caso de un objeto***");
textCounter(a);

console.info("***Caso de un arreglo***");
textCounter(b);

console.info("***Caso de texto***");
textCounter("a");

console.clear();
/********  EJERCICIO 1 FIN********/

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
//www.w3schools.com/jsref/jsref_slice_string.asp
/********  EJERCICIO 2 ********/
const slicer = (a = "Hello  World!", b = 5) => {
  let theText = a;
  let numberSlicer = b;

  if (theText == "") {
    console.info("Favor de ingresar texto");
  }
  if (numberSlicer == 0) {
    console.info("¿Apoco no se corta nada del texto?");
  }
  if (typeof theText == "undefined" || typeof theText == "undefined") {
    console.error("El tipo de dato ingresado no se acepta, verifique");
  } else {
    if (typeof theText !== "string") {
      console.error(`El tipo de dato de "${theText}" no es texto, verifique`);
    }
    if (typeof numberSlicer !== "number") {
      console.error(
        `El tipo de dato de "${numberSlicer}" no es numerico, verifique`
      );
    } else {
      let result = theText.slice(0, numberSlicer);
      console.log(result);
    }
  }
};
slicer("Hola mundo", 8);
console.clear();
//********  EJERCICIO 2 FIN********

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
//********  EJERCICIO 3 ********/
const spliter = (text = "Hello World!") => {
  let spliterText = text;
  if (typeof spliterText != "string") {
    console.error(
      `El tipo de dato de "${spliterText}" no es string, verifique`
    );
  }
  if (spliterText == "") {
    console.info("¿Nada que agregar?");
  } else {
    let result = spliterText.split(" ");
    console.log(result);
  }
};

spliter("hola que tal");
console.clear();
//********  EJERCICIO 3 FIN********/

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo',3)  devolverá Hola Mundo Hola Mundo Hola Mundo. */
//********  EJERCICIO 4 ********/
const repeater = (a = "Hello World!", b = 5) => {
  let repeaterText = a;
  let numberOfRepeats = b;

  if (typeof repeaterText == "number")
    return console.error(
      `"El tipo de dato de ${repeaterText} no es texto, verifique."`
    );

  if (typeof repeaterText == "array")
    return console.error(
      `"El tipo de dato de ${repeaterText} no es texto, verifique."`
    );

  if (numberOfRepeats == 0 || numberOfRepeats < 0)
    return console.warn(
      "El número de repeticiones no puede ser negativo o cero"
    );

  for (let i = 0; i < numberOfRepeats; i++) {
    console.log(repeaterText);
  }
};

repeater("hola", 20);
console.clear();
//********  EJERCICIO 4 FIN********/

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
//********  EJERCICIO 5 ********/
const upSideDown = (inputText = "Hello world!") => {
  let text = inputText;
  let textSplited = text.split("").reverse();
  console.log(textSplited.toString());
};
upSideDown();
console.clear();
//********  EJERCICIO 5 FIN********/

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
//********  EJERCICIO 6 ********/
const repe = (a = "hola mundo, adios mundo", b = "mundo") => {
  let repeText = a;
  let repeWord = b;

  let i = 0;
  let contador = 0;

  /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf*/

  /*Cuando el método de infexOf NO encuentra coincidencia en la búsqueda regresa 
  -1 de valor, en caso de que lo haga regresa el indice de la palabra. 
  Por eso la condición en el while y en el if*/

  while (i !== -1) {
    i = repeText.indexOf(repeWord, i);

    /*Realiza una condición donde verifica si el método encontró algo, si es así entrará la condicional y el contador*/

    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.log(`La palabra ${repeWord} se repite ${contador} veces`);
};

repe();
console.clear();
//********  EJERCICIO 6 FIN********/

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */
//********  EJERCICIO 7 ********/
const validator = (a = "salas") => {
  let wordWithSpace = a.toLowerCase();
  let word = wordWithSpace.replace(/ /g, "");

  let rightWordSplited = word.split("");
  let leftWordSplited = word.split("").reverse();
  let rightWord = rightWordSplited.join("");
  let leftWord = leftWordSplited.join("");

  console.log(rightWord);
  console.log(leftWord);
  console.log(rightWordSplited);
  console.log(leftWordSplited);

  if (rightWord == leftWord) {
    return true;
  } else {
    return false;
  }
};

console.log(validator("Anita lava la tina"));
console.clear();
//********  EJERCICIO 7 FIN********/

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
//********  EJERCICIO 8 ********/
const terminator = (text = "", non_worthy_text = "") =>
  !text
    ? console.log("Debes de ingresar un texto a evaluar")
    : !non_worthy_text
    ? console.log("Debes de ingresar una palabra a evaluar")
    : console.log(text.replace(new RegExp(non_worthy_text, "ig"), ""));

terminator("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
console.clear();
//********  EJERCICIO 8 FIN********/

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
//********  EJERCICIO 9 ********/

//********  EJERCICIO 9 FIN********/

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */
//********  EJERCICIO 10 FIN********/

//********  EJERCICIO 10 FIN********/

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
//********  EJERCICIO 11 FIN********/

//********  EJERCICIO 11 FIN********/
