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
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);

console.clear();
