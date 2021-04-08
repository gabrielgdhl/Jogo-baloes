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

}