let id = Symbol("Hola");
let id2 = Symbol("Hola");

console.log(id === id2);

const NAME = Symbol("Nombre");
const SALUDO = Symbol("Saludar");

//note:El agregar texto dentro del symbol es mera referencia para describir lo que alojará el tipo de dato

const PERSONA = {
  [NAME]: "Lalo",
};

console.log(PERSONA);

PERSONA.NAME = "Edd Pastor";
console.log(PERSONA.NAME);
console.log(PERSONA[NAME]);
console.log(PERSONA);

PERSONA[SALUDO] = function () {
  console.log(`Hola`);
};

console.log(PERSONA);
PERSONA[SALUDO]();

for (let propiedad in PERSONA) {
  console.log(propiedad);
  console.log(PERSONA[propiedad]);
}

console.log(Object.getOwnPropertySymbols(PERSONA));
console.clear();

//note: El tipo de dato 'set' es similar al arreglo sin embargo que se compone de datos únicos
const set = new Set([1, 2, 3, 3, 5, true, false, {}, "Hola"]);

console.log(set);
console.log(set.size);

const set2 = new Set([]);

set2.add(1);
set2.add(1);
set2.add(2);
set2.add(3);
set2.add("Adios");
set2.add([]);
set2.add({});
set2.add(true);
set2.add(true);

console.log(set2);
console.log(set2.size);

console.log("Set2");
for (const iterator of set2) {
  console.log(iterator);
}

console.log("Set como arreglo");
let arr = Array.from(set2);
console.log(arr[0]);

console.log("Eliminacion de valores del set");

set2.delete("Adios");
console.log(set2);

console.log(
  "Comprueba si existe un valor. Regresa true si existe | false si no"
);
console.log(set2.has(3));

console.log("Para limpiar un set");
set2.clear();
console.log(set2);
console.clear();

//?: Tipo de dato:  MAP
//note: El tipo de dato Map trabaja similar a los getters y setters

let mapa = new Map();

mapa.set("nombre", "Lalo");
mapa.set("apellido", "Pastor");
mapa.set("edad", 24);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "José");
console.log(mapa.get("nombre"));
console.log(mapa.delete("apellido"));
console.log(mapa);

for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
  ["nombre", "Edd"],
  ["edad", 24],
  ["animal", "perro"],
  [null, "nulo"],
]);

console.log(mapa2);

const LlavesMapa2 = [...mapa2.keys()];
const ValoresMapa2 = [...mapa.values()];

console.log(LlavesMapa2);
console.log(ValoresMapa2);
console.clear();

//note: Para agregar valores al weakSet se debe hacer uno por uno
const ws = new WeakSet();

let valor1 = { valor: 1 };
let valor2 = { valor: 2 };
let valor3 = { valor: 3 };

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

console.log(ws);
console.log(ws.has(valor1));

ws.delete(valor2);
ws.delete(valor3);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

/* setInterval(() => {
  console.log(ws);
}, 1000);

setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000); */

console.clear();

//note: Los WeakMap trabajan de forma similar al los weakset, para agregar valores se deben de hacer de uno a uno

const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);

console.log(wm.has(llave1));

wm.delete(llave3);
console.log(wm);

console.log(wm.get(llave3));
wm.set(llave3);

console.log(wm);

/* setInterval(() => {
  console.log(wm);
}, 1000);

setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000); */
console.clear();

//note: El iterable pueden ser un objeto de números o texto
const iterable = [1, 2, 3, 4, 5];
const iterable2 = "Hola mundo";
//note: En esta línea accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();
const iterador2 = iterable2[Symbol.iterator]();
/* console.log(iterador);
console.log(iterador2); */

let next = iterador.next();

while (!next.done) {
  //console.log(next.value);
  //note: Se debe de hacer una re-asignación de next hacía el siguiente valor de next para que no sea un infinite loop
  next = iterador.next();
}

let next2 = iterador2.next();

while (!next2.done) {
  //console.log(next2.value);
  next2 = iterador2.next();
}
//note: Con el iterador next también podemos trabajar con los set | maps | symbols (para valores únicos)

//? ------Proxies-------

const individuo = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      //return console.error(`La popiedad ${prop} no existe`);
    }
    obj[prop] = valor;
  },
};

const lalo = new Proxy(individuo, manejador);
lalo.nombre = "lalo";
lalo.apellido = "pastor";
lalo.edad = 24;
lalo.twitter = "@lalo.pastor";
//console.log(lalo);

//console.log(individuo);

//? Propiedades dinámicas

let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
  propiedad: "valor",
  [`id_${aleatorio}`]: "valor Aleatorio",
};
const usuarios = ["Irma", "miguel", "lalo", "dul"];

usuarios.forEach(
  (usuario, index) => (objUsuarios[`id_${index + 1}`] = usuario)
);
//console.log(objUsuarios);
