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
(function randomize(numMin = 501, numMax = 600) {
  let result = Math.ceil(Math.random() * (numMax - numMin) + numMin);
  console.log(result);
})();
console.clear();
//********  EJERCICIO 9 FIN********/

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */
//********  EJERCICIO 10********/
const capicua = (n = "") => {
  let nString = n.toString();
  let nReverse = nString.split("").reverse().join("");
  if (nString == nReverse) {
    console.log(`El número ${n} es capicúa`);
  } else {
    console.log(`El número ${n} NO es capicúa`);
  }
};
capicua(2002);
console.clear();
//********  EJERCICIO 10 FIN********/
/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
//********  EJERCICIO 11 ********/
const factorial = (n = "") => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
    console.log(`El factorial de ${i} es: ${result}`);
  }
};
factorial(5);
console.clear();
//********  EJERCICIO 11 FIN********/

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */
//********  EJERCICIO 12********/
const pariente = (n = "") => {
  let result = n % 2;
  if (result === 1) {
    return true;
  } else {
    return false;
  }
};
console.log(pariente(7));
console.clear();
//********  EJERCICIO 12 FIN********/

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
//********  EJERCICIO 13********/
const kesoy = (n = 0) => {
  let result = n % 2;
  if (result === 1) {
    return `El número ${n} es impar`;
  } else {
    return `El número ${n} es par`;
  }
};
console.log(kesoy(30));
console.clear();
//********  EJERCICIO 13 FIN********/

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */
//********  EJERCICIO 14********/
const temperature = (g = "", ng = "") => {
  let grados = g;
  let tipoDeGrado = ng;
  let tp = tipoDeGrado.toLowerCase();

  let result;
  switch (tp) {
    case !grados:
      console.log("Debe de ingresar el tipo de grados para convertir");
      break;

    case !tipoDeGrado:
      console.log("Debe de ingresar los grados a convertir");
      break;

    case "c":
      result = grados * 1.8 + 32;
      console.log(
        `${g} grados celsius es equivalente a ${result} grados fahrenheit`
      );
      break;

    case "f":
      result = ((grados - 32) * 5) / 9;
      console.log(
        `${g} grados fahrenheit es equivalente a ${result} grados celsius`
      );
      break;
  }
};
temperature(3, "c");
console.clear();
//********  EJERCICIO 14 FIN********/
/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */
//********  EJERCICIO 15********/

// ? El método parseInt permite convertir números de base binaria a base decimal. Para utilizar el método debemos de ingresar el número a evaluar y la base actual del número

const convertBinToDec = (number = undefined, base = undefined) => {
  let a = number;
  let b = base;
  if (a === undefined) return console.warn("Ingrese el número a convertir");

  if (b === undefined) return console.warn("Ingrese la base a convertir");

  if (typeof a !== "number")
    return console.warn("El tipo de datos que ingresó no es numerico");

  if (typeof b !== "number")
    return console.warn("El tipo de datos que ingresó no es numerico");

  //? Conversión de binario a decimal
  if (b === 2) {
    return console.info(
      `El número ${a} base ${b} es igual a ${parseInt(a, b)} base 10`
    );
  }
  //? Conversión de decimal a binario
  if (b === 1) {
    return console.info(
      `El número ${a} base ${b} es igual a ${a.toString(2)} base 2`
    );
  } else {
    return console.warn(`La base ${base} ingresada no esta permitida`);
  }
};
convertBinToDec(4, 1);
console.clear();
//********  EJERCICIO 15 FIN********/

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */
//********  EJERCICIO 16********/
const descounter = (ci = "", desc = "") => {
  let cuenta = ci;
  let descount = desc;
  let descountResult = (cuenta * descount) / 100;
  let total = cuenta - descountResult;
  console.log(`La cuenta a pagar es de: ${total}`);
};
descounter(100, 10);
console.clear();
//********  EJERCICIO 16 FIN********/

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
//********  EJERCICIO 17********/

/* 
https://medium.com/javascript-in-plain-english/find-difference-between-dates-in-javascript-80d9280d8598
*/

const howLong = (yyyy = "", mm = "", dd = "") => {
  let date1 = Date.now();
  let date2 = new Date(yyyy, mm, dd).getTime();
  let today = new Date();
  let dateCompared = new Date(yyyy, mm, dd);
  //seconds
  let milliSecDiff = date2 - date1;
  let secondsDiff = Math.floor((date2 - date1) / 1000);
  //minutes
  let minDiff = Math.floor(secondsDiff / 60);
  //hours
  let hourDiff = Math.floor(minDiff / 60);
  //days
  let dayDiff = Math.floor(hourDiff / 24);
  //weeks
  let weekDiff = Math.floor(dayDiff / 7);
  //years
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  let yearsDiff = d2.getFullYear() - d1.getFullYear();
  //months
  let monthDiff = yearsDiff * 12 + (d2.getMonth() - d1.getMonth());
  //Results
  /*****/
  console.log(
    `Tiempo que ha pasado desde ${dateCompared.getDate()}/${dateCompared.getMonth()}/${dateCompared.getFullYear()} hasta ${today.toLocaleDateString()}`
  );
  //Years
  console.log(`Años: ${yearsDiff * -1}`);
  //Months
  console.log(`Meses: ${monthDiff * -1}`);
  //Weeks
  console.log(`Semanas: ${weekDiff * -1}`);
  //Days
  console.log(`Días: ${dayDiff * -1}`);
  //Hours
  console.log(`Horas: ${hourDiff * -1}`);
  //Minutes
  console.log(`Minutos: ${minDiff * -1}`);
  //Seconds
  console.log(`Segundos: ${secondsDiff * -1}`);
  //Milliseconds
  console.log(`Segundos: ${milliSecDiff * -1}`);
};
howLong(2019, 5, 22);
console.clear();
//********  EJERCICIO 17 FIN********/

/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
//********  EJERCICIO 18********/
const vocalCount = (text = undefined) => {
  if (text === undefined)
    return console.warn("Ingrese texto para contar sus vocales y consonantes");

  if (typeof text === "number")
    return console.error("No se aceptan valores numéricos");

  if (typeof text !== "string") {
    return console.error(
      `El tipo de dato de ${text} no es valido [${typeof text}]`
    );
  } else {
    let t = text.toLowerCase();
    let oneText = t.replace(/ /g, "");
    console.log(oneText);
    let vocals = 0;
    let consonants = 0;
    for (let count = 0; count < oneText.length; count++) {
      if (
        oneText[count] == "a" ||
        oneText[count] == "e" ||
        oneText[count] == "i" ||
        oneText[count] == "o" ||
        oneText[count] == "u"
      ) {
        console.log(text[count]);
        vocals++;
      } else {
        consonants++;
      }
    }
    console.info(`Texto: ${text}`);
    console.info(`Vocales: ${vocals}`);
    console.info(`Consonantes: ${consonants}`);
  }
};
vocalCount("HOLA MUNDO");
console.clear();
//********  EJERCICIO 18 FIN********/

/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
//********  EJERCICIO 19********/
const validName = (name = undefined) => {
  if (name === undefined) return console.warn("Ingresar algún valor");

  if (name == "") return console.warn("Favor de ingrear algún nombre.");

  if (name == "number") {
    return console.warn("Debe de ingresar valores del tipo texto");
  } else {
    let validation = /^[a-zA-Z0-9]/;
    console.log(validation.exec(name));
  }
};
validName("Jonathan MirCha");
//!Checar resultado en video
console.clear();
//********  EJERCICIO 19 FIN********/

/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/
//********  EJERCICIO 20********/
const validMail = (mail = undefined) => {
  if (mail === undefined) return console.warn("Favor de ingresar un correo.");
  if (mail == "") return console.warn("Favor de ingresar un correo");

  if (mail == "number") {
    return console.warn("Ingrese un correo");
  } else {
    let validation = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]/;
    return console.log(validation.test(mail));
  }
};
validMail("jonmircha@gmail.com");
//!Checar resultado en video
console.clear();
//********  EJERCICIO 20 FIN********/

/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
//********  EJERCICIO 21********/
const squareArray = (arr = []) => {
  for (const i in arr) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
};
squareArray([1, 4, 5]);
console.clear();
//********  EJERCICIO 21 FIN********/

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/
//********  EJERCICIO 22********/
const biggestNLowest = (arr = []) => {
  arr.sort();
  let arr2 = [];
  let biggest = arr[arr.length - 1];
  let lowest = arr[0];

  arr2.push(biggest);
  arr2.push(lowest);

  console.log(arr);
  console.log(`Bigger: ${biggest}`);
  console.log(`Lower: ${lowest}`);
  console.log(arr2);
};
biggestNLowest([1, 4, 5, 99, -60, 3]);
console.clear();
//********  EJERCICIO 22 FIN********/

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
//********  EJERCICIO 23********/
const pairOdd = (arr = []) => {
  arr.sort();
  let pairs = [];
  let odds = [];

  for (const i in arr) {
    let result = arr[i] % 2;
    console.log(result);

    if (result === 0) {
      pairs.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }

  console.log("Lista de los números pares:");
  console.log(pairs);
  console.log("**************************");
  console.log("Lista de los números impartes");
  console.log(odds);
};
pairOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.clear();
//********  EJERCICIO 23 FIN********/

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
//********  EJERCICIO 24********/
const sorter = (arr = []) => {
  let desc = arr;
  let asc = arr;

  console.log("Arreglo desendente:");
  console.log(desc.sort().reverse());
  console.log("*********************");
  console.log("Arreglo asendente:");
  console.log(asc.sort());
};
sorter([7, 5, 7, 8, 6]);
console.clear();
//********  EJERCICIO 24 FIN********/

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
//********  EJERCICIO 25********/
const duplicated = (arr = []) => {
  let uniqueValues = [...new Set(arr)];
  console.log(uniqueValues);
};
duplicated(["x", 10, "x", 2, "10", 10, true, true]);
console.clear();
//********  EJERCICIO 25 FIN********/

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
//********  EJERCICIO 26********/
const avg = (arr = []) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = num + arr[i];
  }
  let resultAvg = num / arr.length;
  console.log(resultAvg);
};
avg([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
console.clear();
//********  EJERCICIO 26 FIN********/

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios. [x]
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y  los 7 restantes números. [x]
  - Valida que el título no rebase los 100 caracteres. [x]
  - Valida que el director no rebase los 50 caracteres. [x]
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

//********  EJERCICIO 27********/
class Peliculas {
  constructor(
    IdPeliculaIMDB,
    Titulo,
    Director,
    AñoDeEstreno,
    PaisDeOrigen,
    Genero,
    CalificacionIMDB
  ) {
    this.IdPeliculaIMDB = IdPeliculaIMDB;
    this.Titulo = Titulo;
    this.Director = Director;
    this.AñoDeEstreno = AñoDeEstreno;
    this.PaisDeOrigen = PaisDeOrigen;
    this.Genero = Genero;
    this.CalificacionIMDB = CalificacionIMDB;
  }
  pelicula() {
    //? Todos los datos del objeto son obligatorios.
    if (
      this.IdPeliculaIMDB == undefined ||
      this.Titulo == undefined ||
      this.Director == undefined ||
      this.AñoDeEstreno == undefined ||
      this.PaisDeOrigen == undefined ||
      this.Genero == undefined ||
      this.CalificacionIMDB == undefined
    ) {
      return console.warn("Favor de ingresar todos los valores.");
    }

    //? Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y  los 7 restantes números.
    if (this.IdPeliculaIMDB.length != 9) {
      return console.warn("Favor de validar el ID de IMDB");
    }
    let IdLettersIMDB = this.IdPeliculaIMDB.slice(0, 2);
    let IdIMDB = /[a-zA-Z]/;
    let IdLettersIMDBLenght = IdIMDB.test(IdLettersIMDB);

    if (IdLettersIMDBLenght == false) {
      console.warn("Favor de veificar primeros caracteres del ID IMDB");
    }

    //?Valida que el título no rebase los 100 caracteres.
    if (this.Titulo.length > 100) {
      console.warn(
        "El titulo es demasiado largo, favor de introducir uno más corto"
      );
    }
    //? Valida que el director no rebase los 50 caracteres.
    if (this.Director.length > 50) {
      console.warn("El nomrbe del director es demasiado largo");
    }

    //?Valida que el año de estreno sea un número entero de 4 dígitos.
    let AñoEstrenoLenght = this.AñoDeEstreno.toString().length;
    if (AñoEstrenoLenght > 4) {
      console.warn("Favor de verificar el año de estreno");
    }
  }
}
const soul = new Peliculas(
  "SO3456789",
  "Soul",
  "Director",
  2020,
  "USA",
  "Infantil",
  10
);

soul.pelicula();
//********  EJERCICIO 27 FIN********/
