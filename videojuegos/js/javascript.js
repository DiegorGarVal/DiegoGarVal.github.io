function mostrar(cosa){
    var plataforma = document.querySelectorAll("." +cosa);
    reiniciar()
    for (i=0;i<plataforma.length;i++){
        plataforma[i].style.opacity="1";
    } 
}

function reiniciar(){
    var fotos = document.querySelectorAll(".imagenes");
    for (i=0;i<fotos.length;i++){
        fotos[i].style.opacity="0.3";
    } 
}