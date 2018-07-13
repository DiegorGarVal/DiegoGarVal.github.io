
    var numeroDeAciertos=0;

function comprueba(){
    var almacen=window.localStorage;//Declaro el almacen
    numeroDeAciertos=Number(almacen.getItem("na"));//LEEMOS EL ALMACEN
    
    
    console.log("hola")
    var s4 = document.getElementById("s4").checked;
    var este = document.getElementById("aqui");
    
    if (s4==true){
        este.src="./images/bien.gif";
        numeroDeAciertos++;
    } else {
        este.src="./images/mal.gif";
    }

    console.log(numeroDeAciertos);
    almacen.setItem("na",numeroDeAciertos);


    console.log("numeroFallos");
    almacen.setItem("na",numeroDeAciertos);
}