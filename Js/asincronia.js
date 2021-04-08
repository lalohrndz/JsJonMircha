/* setTimeout(() => {
        console.log(
          "Ejecutando un setTimeOut, esto solo se ejecuta una sola vez"
        );
      }, 3000);

      setInterval(() => {
        console.log(
          "Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo"
        );
      }, 2000); */

//*? Reloj en consola

/* setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000); */

//note: Existe una función que detiene al setInterval y setTimeOut llamados |clearInterval | clearTimeout

//?--Procesamiento Single thread y multi-thread
//note: Los hilos son las unidades básicas de proceso realizada por la máquina. Estos procesos pueden ejecutar uno o varios hilos

//?--Operaciones de CPU y Operaciones de I/O
//note: Las operaciones de CPU son aquellas que requieren mayor procesamiento de CPU
//note: Las  I/O sn las operaciones que esperan la petición del recurso deseado (Respuesta de una API o del servidor)

//? Operaciones Concurrentes y Paralelas
//note: Concurrencia: Es cuando dos o más tareas progresan simultaneamente.
//note: Paralelismo: Es cuando dos o más tareas se ejecutan al mismo tiempo

//?Operaciones Bloqueantes y No bloqueantes
//note: Bloqueante: Es aquella que no regresa el control hasta que haya terminado su tarea al hilo    principal
//note: No bloqueante: Es aquella que se ejecuta y regresa el control al hilo principal y al momento de finalización de la tarea se avisará al hilo para su procesamiento.

//?Operaciones Síncronas y Asíncronas
//note: Síncrona: Refiere a que espera la respuesta de forma inmediata
//note: Asíncrona: Refiere a que espera la respuesta en un futuro, así, regresando el control al hilo principal

//?JavaScript usa un modelo asíncrono y no bloqueante con un loop de eventos implementado en un sólo hilo (single thread) para operaciones de entrada y salida (I/O)

//! Código Síncrono Bloqueante
/*
      (() => {
        console.log("Código síncrono");
        console.log("------Inicio-------");

        function dos() {
          console.log("Dos");
        }

        function uno() {
          console.log("Uno");
          dos();
          console.log("Tres");
        }

        uno();
        console.log("------Fin------");
      })(); */

//! Código Asíncrono No bloqueante

/*       (() => {
        console.log("Código asíncrono");
        console.log("----Inicio-----");

        function dos() {
          setTimeout(function () {
            console.log("Dos");
          }, 1000);
        }

        function uno() {
          setTimeout(function () {
            console.log("Uno");
          }, 1000);
          dos();
          console.log("Tres");
        }

        uno();
        console.log("----Fin-----");
      })(); */

/* function cuadraroCallBack(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
} */

//!CallBack Hell
//? http://callbackhell.com
/* cuadraroCallBack(0, (value, result) => {
  console.log("Inicia callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadraroCallBack(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadraroCallBack(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadraroCallBack(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadraroCallBack(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadraroCallBack(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
          });
        });
      });
    });
  });
}); */

//note: Promesas
//? Si la promesa consta de dos objetos "Resolve" & "Reject". Si se reliza una petición que termina con un resultado de retorno se realiza el resolve de lo contrario mostrará un error, el reject

function cuadraroPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject("Error, vaya");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        value: value,
        resolve: value * value,
      });
    }, Math.random() * 1000);
  });
}

/* cuadraroPromise(0)
  .then((obj) => {
    console.log("Inicio promesa");
    console.log(`Promesa: ${obj.value}, ${obj.resolve}`);
    return cuadraroPromise(1);
    console.log(obj);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.resolve}`);
    return cuadraroPromise(2);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.resolve}`);
    return cuadraroPromise(3);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.resolve}`);
    return cuadraroPromise(4);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.resolve}`);
    return cuadraroPromise(5);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.resolve}`);
    console.log("Fin promesa");
  })
  .catch((err) => console.error(err)); */

//? Función Asíncrona
async function funcionAsyncDeclarada() {
  /*   try {
    console.log("Inicio de Async Func declarada");
    let obj = await cuadraroPromise(0);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(1);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(2);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(3);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(4);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(5);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    console.log("Fin async func delcarada");
  } catch (err) {
    console.log(err); 
  }*/
}

funcionAsyncDeclarada();

//? Función asincrona expresada
const funcAsynExp = async () => {
  /*   try {
    console.log("Inicio de Async Func expresada");
    let obj = await cuadraroPromise(6);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(7);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(8);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(9);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(10);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    obj = await cuadraroPromise(11);
    console.log(`Async Func: ${obj.value}, ${obj.resolve}`);

    console.log("Fin async func expresada");
  } catch (err) {
    console.log(err);
  } */
};

/* funcAsynExp();

//? Generators
//note: Al agregar el * al lado de la palabra function js lo reconoce como generador.
function* iterable() {
  //note: un yeild es similar al return. Cuando se detecta que se utiliza un yeild el buscador ejecuta el código y hasta que pase al siguiente yield no avanza el generador
  yield "Hola";
  console.log("Hola consola");
  yield "Hola 2";
  console.log("Hola consola 2");
  yield "Hola 3";
  yield "Hola 4";
}

let iterator = iterable();
for (const i of iterator) {
  console.log(i);
}

const arr = [...iterable()];
console.log(arr);

function square(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, Math.random() * 1000);

  return {
    valor,
    resultado: valor * valor,
  };
} */

/* function* generator() {
  console.log("Inicio generator");
  yield square(0);
  yield square(1);
  yield square(2);
  yield square(3);
  yield square(4);
  yield square(5);
  console.log("Termina generator");
}

let gen = generator();
for (let y of gen) {
  console.log(y);
} */

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    //note:Cuando agregamos que el objeto en cuestión agregue el valor a la propiedad es cuendo el set realiza la validación del proxi principal
    //?En caso de no querer que se agreguen nuevas propiedades debemos de definirlo con un condicionador:

    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad ${prop} no existe en el objeto persona`
      );
    }

    //?Se valida que el nombre y el apellido cumpla con las caracteristicas del regex
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad ${prop} sólo acepta letras y espacios en blanco`
      );
    }

    obj[prop] = valor;
  },
};

/* const jon = new Proxy(persona, manejador);
jon.nombre = "pepe";
jon.apellido = "pastor";
jon.edad = 24;
console.log(jon); */

//note:Si agregamos una nueva propiedad el proxi la agrega también al objeto original (persona)

/* jon.twitter = "@jonteitter";
console.log(persona);
console.log(jon); */

const objUsuarios = {};
const usuarios = ["Jon", "irma", "mike", "Karla", "Kenai"];

//note:Asiganmos un ID dinámico a cada valor de un objeto
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));
//console.log(objUsuarios);

console.log(this);
console.log(window);
this.nombre = "Contexto global";

function imprimir() {
  console.log(this);
}

/* imprimir(); */

const obj = {
  nombre: "Contexto objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};

//obj.imprimir();

const obj2 = {
  nombre: "contexto obj 2",
};

//obj2.imprimir();
