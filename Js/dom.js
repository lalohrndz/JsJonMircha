console.log("******Elementos del documento*******");
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
}, 2000);
