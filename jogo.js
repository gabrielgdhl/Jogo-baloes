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

    let qtd_baloes_estourados = 0;
    document.getElementById('qtd-baloes-estourados').innerHTML = qtd_baloes_estourados;

    //qtd balões da tela
    let qtd_baloes = 70;
    document.getElementById('qtd-baloes').innerHTML = qtd_baloes;
    make_baloes(qtd_baloes);//função que adiciona os balões na tela.


}


function make_baloes(qtdd_baloes){
    for(let i=1; i<=qtdd_baloes; i++){
        
        let balao = document.createElement('img');//cria uma tag <img>
        balao.src = 'imagens/balao_azul_pequeno.png';//usar o atributo src de uma tag img para adiconar uma tag com uma imagem definida
        balao.style.margin = '20px 0 10px 20px';//usa o atributo style das tags html para definir os pixel.
        document.getElementById("cenario").appendChild(balao);

    }
}