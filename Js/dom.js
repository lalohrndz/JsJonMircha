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

$cards = document.querySelector(".cards");
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

console.log($cards.children[3].closest("section"));
