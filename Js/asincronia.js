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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        resolve: value * value,
      });
    }, Math.random() * 1000);
  });
}

cuadraroPromise(0)
  .then((obj) => {
    console.log("Inicio promesa");
    console.log(`Promesa: ${obj.value}, ${obj.resolve}`);
    return cuadraroPromise(1);
    //console.log(obj);
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
  .catch((err) => console.error(err));
