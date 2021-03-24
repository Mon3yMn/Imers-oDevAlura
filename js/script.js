const pokemon = 'Mewtwo';
const botao = document.querySelector('button');


function verificaPokemon(){
    const p = document.querySelector('p')
    const chute = document.querySelector('input').value;
  
    if (pokemon == chute){
        p.textContent = 'Você acertou!!';
    }else{
        p.textContent = 'Ops...Você não é um mestre pokemon :| ';
    }  
}
botao.onclick = verificaPokemon;





 