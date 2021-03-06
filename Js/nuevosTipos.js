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
