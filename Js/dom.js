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
