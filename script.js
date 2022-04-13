

function AbrirConfiguracoes(){
  document.getElementById("configuracoes").style.visibility = "visible";
}
function FecharConfiguracoes(){
  document.getElementById("configuracoes").style.visibility = "hidden";
}

function LigarDesligarAr(){

  let arTemperatura = document.getElementById("ar-temperatura");

  
    arTemperatura = arTemperatura.style.borderColor = "green";
    lblTemperatura = lblTemperatura.style.color = "green";
    

}

function AumentarTemperatura(){
  let txtTemperatura = document.getElementById("txtTemperatura");

  if(txtTemperatura.value >= 32){
    alert("Temperatura não pode ser maior que 32°c")
  }
  else{
    txtTemperatura.value++;
  }

}
function DiminuirTemperatura(){
  let txtTemperatura = document.getElementById("txtTemperatura");
  if(txtTemperatura.value <= 16){
    alert("Temperatura não pode ser menor que 16°c")
  }
  else{
  txtTemperatura.value--;
  }

}