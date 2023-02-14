let exibirBodyFilhos = document.body.childElementCount;
console.log(exibirBodyFilhos);

function verificaElementos() {
  if (exibirBodyFilhos > 5) {
    console.log(true);
  } else {
    console.log(false);
  }
}
verificaElementos(exibirBodyFilhos.length);

pList = document.querySelectorAll("p");
console.log(pList);
