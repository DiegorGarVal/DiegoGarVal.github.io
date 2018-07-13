function comprobar() {
    console.log("Entrando en comprobar...");

    var marca = false;

    var nombre = document.getElementById("name").value;

    var nacimiento = document.getElementById("date").value;
    var fNacimiento = new Date(nacimiento);
    var anyoNacimiento = fNacimiento.getFullYear();

    var hoy = new Date();
    var anyoActual = hoy.getFullYear();

    var edad = anyoActual - anyoNacimiento;

    var radio1 = document.getElementById("radio1").checked;
    var radio2 = document.getElementById("radio2").checked;
    var radio3 = document.getElementById("radio3").checked;

    var cHtml = document.getElementById("html").checked;
    var cCss = document.getElementById("css").checked;
    var cIntroJava = document.getElementById("introJava").checked;
    var cJavascript = document.getElementById("javaScript").checked;
    var cBootstrap = document.getElementById("bootstrap").checked;
    var cJquery = document.getElementById("jquery").checked;
    var cAngular = document.getElementById("angular").checked;



    if (nombre.trim() == "") {
        alert("Escriba su nombre");
        marca = true;
    } else {
        console.log("Nombre confirmado");
    }


    if (edad >= 18) {
        console.log("Edad confirmada");
    } else if (edad <= 18) {
        alert("Es usted menor de edad");
        marca = true;
    }


    if (radio1 == true || radio2 == true || radio3 == true) {
        console.log("Preferencia confirmada");
    } else {
        alert("Seleccone una preferencia");
        marca = true;
    }


    if (cHtml == true || cCss == true || cIntroJava == true || cJavascript == true || cBootstrap == true || cJquery == true || cAngular == true) {
        console.log("Curso confirmado");
    } else {
        alert("Seleccone untipo de curso");
        marca = true;
    }


    if (marca == false) {
        console.log("Verificaciones realizadas");
        calcular()
    }

}

function calcular() {
    console.log("CALCULANDO IMPORTE");
    var precio = 0;

    var nombre = document.getElementById("name").value;

    var cHtml = document.getElementById("html").checked;
    var cCss = document.getElementById("css").checked;
    var cIntroJava = document.getElementById("introJava").checked;
    var cJavascript = document.getElementById("javaScript").checked;
    var cBootstrap = document.getElementById("bootstrap").checked;
    var cJquery = document.getElementById("jquery").checked;
    var cAngular = document.getElementById("angular").checked;

    var este = document.getElementById("comunicado");

    if (cHtml == true) {
        precio = precio + 300;
    }
    if (cCss == true) {
        precio = precio + 200;
    }
    if (cIntroJava == true) {
        precio = precio + 500;
    }
    if (cJavascript == true) {
        precio = precio + 400;
    }
    if (cBootstrap == true) {
        precio = precio + 200;
    }
    if (cJquery == true) {
        precio = precio + 300;
    }
    if (cAngular == true) {
        precio = precio + 800;
    }

    este.value = "El usuario " + nombre + " ha contratado cursos por valor de " + precio + "€";

}