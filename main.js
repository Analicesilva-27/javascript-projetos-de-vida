const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".botao");

for(let i = 0; i< botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j = 0; i < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classlist.add('ativo');
    }
}

const contadores= document.querySelectorAll(".contador");
const tempoObjetivo1= new date ("2025-10-05T00:00:00");
let tempoAtual = new date ();

contadores [0].textcontent = tempoObjetivo1-tempoAtual;