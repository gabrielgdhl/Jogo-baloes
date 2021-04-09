function iniciaJogo(){

    var url = window.location.search;
    var nivel_jogo = url.replace("?", "");
    
    var tempo_segundos = 0;

    if(nivel_jogo == 1){
        tempo_segundos = 120;
        
    }
    if(nivel_jogo == 2){
        tempo_segundos = 60;
    }
    if(nivel_jogo == 3){
        tempo_segundos = 30;
    }
    document.getElementById('temp').innerHTML = tempo_segundos;

    var qtd_baloes_estourados = 0;
    document.getElementById('qtd-baloes-estourados').innerHTML = qtd_baloes_estourados;

    //qtd balões da tela
    var qtd_baloes = 70;
    document.getElementById('qtd-baloes').innerHTML = qtd_baloes;
    make_baloes(qtd_baloes);//função que adiciona os balões na tela.

    contagemTempo(tempo_segundos + 1);


}

function contagemTempo(segundos){

    segundos = segundos - 1;

    if(segundos<0){
        clearInterval(timeId);
        gameOver();
        reiniciarJogo();
        
    }

    document.getElementById('temp').innerHTML = segundos;
    var timeId = setTimeout("contagemTempo("+segundos+")", 1000);  //atualiza a contagem de tempo a cada 1000ms;

}//fim contagem de tempo

function gameOver() {
    alert("fim de jogo - você não consegui estourar todos os balões a tempo!");
}

function make_baloes(qtdd_baloes){
    for(let i=1; i<=qtdd_baloes; i++){
        
        let balao = document.createElement('img');//cria uma tag <img>
        balao.src = 'imagens/balao_azul_pequeno.png';//usar o atributo src de uma tag img para adiconar uma tag com uma imagem definida
        balao.style.margin = '20px 0 10px 20px';//usa o atributo style das tags html para definir os pixel.
        balao.id = 'b'+i;
        balao.onclick = function(){estourar(this)}
       
        document.getElementById("cenario").appendChild(balao);

    }
}

function estourar(baloes){
    var id_baloes = baloes.id;
    document.getElementById(id_baloes).setAttribute("onclick", "");
    document.getElementById(id_baloes).src='imagens/balao_azul_pequeno_Estourado.png';

    pontuacao(-1);
}

function pontuacao(action){
    var balInteiros = document.getElementById('qtd-baloes').innerHTML;
    var balEstourados = document.getElementById('qtd-baloes-estourados').innerHTML;
    balInteiros = parseInt(balInteiros);
    balEstourados = parseInt(balEstourados);

    balInteiros = balInteiros + action;
    balEstourados = balEstourados - action;
    document.getElementById('qtd-baloes').innerHTML = balInteiros;
    document.getElementById('qtd-baloes-estourados').innerHTML = balEstourados;

    verificaPontuacao(bInteiros);

}

function verificaPontuacao(baloes_inteiros){

    if(baloes_inteiros == 0){
        alert("Parabéns, você venceu!!");
        reiniciarJogo();


    }
}

function reiniciarJogo(){
    console.log('gabriel roque');
    window.location.href='./index.html';
}