const botoes=document.querSelectorAll(".botao");
const textos= document.querySelectorAll(".aba-conteudo");
for(let i=0;i<botoes.length;i++){
  botoes[i].onclick=function(){

    for(let j=0;j<botoes.length;j++{
      botoes[j].classlist.remove("ativo");
      textos[j].classlist.remove("ativo");
    }
    botoes=[j].classlist.add("ativo");
    textos[j].classlist.add("ativo");
  }
}
const contadores=document.querySelectorAll(".contador");
const tempoObjetivo1=new Date
