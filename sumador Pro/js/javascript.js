function sumar(){
    console.log("bufete");
    var numero;
    var total=0;
    var numeroPro;

    numeroPro = prompt("Cuantos digitos quieres sumar");

    for (i=1;i<=numeroPro;i++){
        numero = prompt("Dime el número" + i);

        total = total + Number(numero);
    }
    alert("El total es " + total + " bufacabras")
}
  /*var numero1;
    var numero2;
    var numero3; 

   
    numero1 = Number(prompt("Dime otro numero bufacabras"));
    numero2 = Number(prompt("Dime un numero bufacabras"));
    numero3 = Number(prompt("Dime otro numero bufacabras"));

    var resultado = numero + numero1 + numero2;

    console.log(resultado);*/