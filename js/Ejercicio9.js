let text = prompt("Escribe una frase");
let nText = text.length;
let i;
for (i = 0; i < nText; i++) {
  if (
    text.substr(i, 1) === "a" ||
    text.substr(i, 1) === "e" ||
    text.substr(i, 1) === "i" ||
    text.substr(i, 1) === "o" ||
    text.substr(i, 1) === "u"
  ) {
    document.write(text.substr(i, 1));
  }
}