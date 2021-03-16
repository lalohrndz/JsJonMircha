const Hola = () => {
  let nombre = prompt("¿Cuál es tu nombre?");
  let apellido = prompt("¿Cuál es tu apellido?");
  let años = prompt("¿Cuál es tu edad?");
  let saludo = `Hola! mi nombre es ${nombre} ${apellido} y tengo ${años} años`;
  document.write(saludo);

  let lista = `
  <ul>
    <li>Nombre: ${nombre}<li/>
    <li>Apellido: ${apellido}<li/>
    <li>Edad: ${años}<li/>
  <ul/>
  `;
};
