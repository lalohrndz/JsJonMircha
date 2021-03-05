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
