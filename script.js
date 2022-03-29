function CriarNovaBox(){

    var divNova = document.createElement("div");
    let principal = document.getElementById("principal");

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("div1");
  principal.insertBefore(divNova, divAtual);
  divNova.setAttribute('class', 'box')
}