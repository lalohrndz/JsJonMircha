/* console.log("******Elementos del documento*******");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000); */

//? https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
//?Los elementos anteriores han sido reemplazados por estos métodos
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => {
  console.log(el);
});
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
console.clear();

//? Atributos y data-attributes
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//note: como forma de distinguir se agrega un $ antes del nombre de la variable para identificar las variables que contienen símbolos del DOM
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
//note: se especifica la propiedad rel="noopener" para indicar que no hay relación entre la página origen y la página destino de la etiqueta ancla
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.google.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//? Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

console.log($linkDOM.dataset.id);
$linkDOM.setAttribute("data-id", "2");
console.log($linkDOM.dataset.id);

$linkDOM.dataset.id = "3";
console.log($linkDOM.dataset.id);

console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "16px";

//notes:Variables CSS | Custom properties CSS

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varLightColor = getComputedStyle($html).getPropertyValue("--light-color");

console.log(varDarkColor, varLightColor);

$body.style.backgroundColor = varLightColor;
$body.style.color = varDarkColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varLightColor);

//regreso al light color
$body.style.setProperty("--light-color", "#e9e9e9");
varLightColor = getComputedStyle($html).getPropertyValue("--light-color");

console.clear();

const $card = document.querySelector(".card");
console.log($card);
console.log($card.classList);
console.log($card.className);
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity", "sepia");
$card.classList.remove("opacity", "sepia");

$card.classList.toggle("rotate-135");
console.clear();

const $whatIsDOM = document.getElementById("que-es");
let text = `
<p>
El modelo de Objetos del Documento (<b><i>DOM - Document Objet Model </i></b>) es una API para documentos HTML y XML
</p>

<p>
Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
</p>

<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>

`;

//? innerText no forma parte del standard
$whatIsDOM.innerText = text;
//?textContent forma parte del standard pero no renderiza a HTML las etiquetas de las template strings
$whatIsDOM.textContent = text;
//? innerHTML renderiza el html
$whatIsDOM.innerHTML = text;
//? outerHTML reemplaza la etiqueta para una mejor semántica
$whatIsDOM.outerHTML = text;

console.clear();

//note: DOM Traversing - enfocado a etiquetas html

/* $cards = document.querySelector(".cards");
//?Accede a los elementos hijos
console.log($cards.children);
//? Se puede acceder a un elemento especfico
console.log($cards.children[2]);
//? accede al nodo apdre
console.log($cards.parentElement);
//? accede al primer hijo del nodo (sin importar si es nodo de elemento o no)
console.log($cards.firstChild);
//? accede al primer hijo del tipo de nodo elemento
console.log($cards.firstElementChild);
//? accede al ultimo elemento del nodo tipo elemento
console.log($cards.lastElementChild);
//? accede al nodo del tipo elemento anterior
console.log($cards.previousElementSibling);
//? accede al nodo siguiente del tipo elemento
console.log($cards.nextElementSibling);
//? busca el elemento más cercano del tipo que se ingrese
console.log($cards.closest("div"));

console.log($cards.closest("body"));

console.log($cards.children[3].closest("section")); */

console.clear();

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People"/>
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Otoño", "Verano", "Invierno"];
$ul = document.createElement("ul");

document.write("Estaciones del año");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceanía"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";

continentes.forEach((el) => {
  //?Debemos de agregar el sumando para que no sobreescriba el último elemento plasmado
  $ul2.innerHTML += `<li>${el}</li>`;
});

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//note: Esta es la forma que más optimiza la carga de elementos al DOM puesto que se le agregan los elementos al fragmento y se realiza solo una inserción al DOM
const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("Meses del año");
//aqui se hace la inserción al fragmento del dom
$ul3.appendChild($fragment);

document.body.appendChild($ul3);

//note: **DOM templates
const $cards2 = document.querySelector(".cards"),
  $template = document.querySelector("#template-card").content,
  $fragment2 = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  //? El importNode lo que hace es que "clona" un nodo del documento, en caso de que el segundo parametro sea true va a copiar toda la estructura, en caso de que sea false solamente copia la primer etiqueta de apertura y cierre
  let $clone = document.importNode($template, true);
  $fragment2.appendChild($clone);
});

$cards2.appendChild($fragment2);

$newCard = document.createElement("figure");

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="any">
  <figcaption>Any<figcaption>
`;

$newCard.classList.add("card");

$cards.replaceChild($newCard, $cards2.children[1]);

//? Nuevos métodos

/* .insertAdjacent
--Hace refencia a un nodo del tipo elemento (etiqueta html)
.insertAdjacentElement(position,el)

--Texto que este en formato HTML
.insertAdjacentHTML(position,html)

--Texto para html
.insertAdjacentText(position,text)

 --Posiciones--

 beforebegin(hermano anterior)
 afterbegin(primer hijo)
 beforeend(ultimo hijo)
 afterend(hermano siguiente) */

const $cards3 = document.querySelector(".cards"),
  $newCard3 = document.createElement("figure");

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="any">
  <figcaption><figcaption>
`;

$newCard3.classList.add("card");

$newCard3.insertAdjacentHTML("beforeend", $contentCard);
$newCard3.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards3.insertAdjacentElement("afterbegin", $newCard3);

//note: Lo que hace el método prepend agrga como hijo primero
$cards3.prepend($newCard3);

//note: agrega el elemento antes del elemento padre
$cards3.before($newCard3);

//note: agrega el elemento como siguiente en la lista
$cards3.append($newCard3);

//note: grega el elemento después del elemento padre
$cards3.after($newCard3);

//note: ****Manejador de eventos****

function holaMundo() {
  alert("hola mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");

function saludar(nombre = "Desconocido/a") {
  alert(`Hola ${nombre}`);
}

//note: Cuando defines un evento de forma semantica debe de ir sin los parentesis por que si los lleva activa el evento al inicio de la carga de la página
$eventoSemantico.onclick = holaMundo;

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);

$eventoMultiple.addEventListener("click", (e) => {
  alert("manejador de eventos múltiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

const $eventoRemover = document.getElementById("evento-remover");

$eventoMultiple.addEventListener("click", (e) => saludar("Lalo"));

const removerDobleClick = (e) => {
  alert(`Removiendo el evento del tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
