// //EJERCICIO 01
// let frase = window.prompt("Ingrese un texto al azar");
// if (frase.includes ("a")) {
//     alert ("Tu palabra contiene la letra a");
// } else {
//     alert ("Tu palabra no contiene la letra a");
// }

// //EJERCICIO 02
// let texto = prompt('Ingresa un texto');
// mayuscula = texto.toUpperCase();
// minuscula = texto.toLowerCase();
// alert ("tus palabras en mayuscula" + " " + mayuscula + " " + "y en minuscula" + " " + minuscula );

// // EJERCICIO 03
// let palabra = window.prompt("Ingrese una palabra");
// let letra = palabra.charAt(0);
// alert ("La primer letra de tu palabra es la" + " " + letra)

// // EJERCICIO 04
// let palabra1 = window.prompt("Ingrese un texto")
// let longitudpalabra = palabra1.length;
// alert ("tu palabra tiene" + " " + longitudpalabra + " " + "caracteres")

// // EJERCICIO 05
// let numero = window.prompt("Ingrese un numero")
// let longitudnumero = numero.length;
// alert ("tu numero tiene" + " " + longitudnumero + " " + "caracteres")

// // EJERCICIO 06
// let palabra2 = window.prompt("Ingrese una palabra");
// let letra2 = palabra2.charAt(palabra2.length-1);
// alert ("La ultima letra de tu palabra es la" + " " + letra2);

// // EJERCICIO 07
// let palabra3 = window.prompt("Ingrese tu texto");
// let letra3 = palabra3.replace(/./g,"*");
// alert ("tu texto es" + " " + letra3);

// function valorasteriscos(campo) {
//     campo.value = campo.value.replace(/./g,"*")
// }

// //EJERCICIO 08
// let palabra4 = window.prompt("ingrese una letra")
// let cadena = window.prompt("ingrese una cadena de texto")
// if(cadena.includes(palabra4)) {
//     alert ("la" + " " + palabra4 + " " + "esta incluida en el texto")
// }  else {
// alert ("la" + " " + palabra4 + " " + "no esta incluida en el texto") 
// }

// EJERCICIO 09
// let frase = window.prompt("ingrese una frase")
// let borrada = frase.slice(1)
// alert ("tu frase sin la primer letra es" + " " + borrada)

// // EJERCICIO 10
// let nombre = window.prompt("ingrese su nombre en mnuscula")
// let mayuscula2 = nombre.charAt(0)
// let final = mayuscula2.toUpperCase()
// let finalfinal = (final) + (nombre.slice(1))
// alert (finalfinal)


/*EJERCICIO 5
let solicitarNumero = parseInt( window.prompt ("Ingrese un numero por favor"));
if(solicitarNumero >0){
    alert("tu numero es positivo")

} else if(solicitarNumero === 0){
    alert("tu numero es cero")
}
else{
    alert("tu numero es negativo")
}

//EJERCICIO 6
let dinero= parseInt(prompt("ingrese un monto de plata"));
if(dinero <= 2000){
    alert("Tenes que pagar la suma de $"+" "+ dinero)
}else{
   let pagoTotal=(dinero*10)/100;
alert("tenes que pagar la suma de $"+" "+ pagoTotal)
}



//EJERCICIO 7 Mal
let abc=prompt("ingrese una cadena de texto");
let vocales= ["a","e","i","o","u"]
if(abc.includes(vocales)){
    alert("hay una vocal en la posicion 2 de tu frase")
}else{
    alert("en tu frase no hay ninguna vocal")
}

//EJERCICIO 8

let calificacion = parseInt( window.prompt ("Ingrese la nota del examen"));
if(calificacion >=1 && calificacion <=3 ){
    alert("Aplazado")

}else if(calificacion >=4 && calificacion <=5){
    alert("Reprobado")
}
else{
    alert("Aprobaste")
}

//EJERCICIO 9
let indicarNumero=prompt("ingrese un numero");
let indicarNumero2=prompt("ingrese otro numero");
if(indicarNumero > indicarNumero2){
    alert(indicarNumero +" "+"es mas grande que"+" "+indicarNumero2)
} else if(indicarNumero < indicarNumero2){
    alert(indicarNumero2 +" "+"es mas grande que"+" "+ indicarNumero)
}else{
    alert("ambos numeros son iguales")
}
//EJERCICIO 10 mal

let calendario=prompt("ingrese el numero de algun mes del año");
let meses=parseInt([1,2,3,4,5,6,7,8,9,10,11,12])
if(calendario==meses[[1],[2],[3]]){
    alert("Este mes tiene 31 dias")

} else{
    alert("Este mes tiene 28 dias")
}

//EJERCICIO 11
let num1=parseInt(prompt("Ingresa un numero"))
let num2=parseInt(prompt("Ingresa otro numero"))
let num3=parseInt(prompt("Ingresa el ultimo numero"))

if(num1>num2 && num2>num3){
    alert("el numero 1 es el mas grande")
}else if(num2>num3 && num3>num1){
    alert("el numero 2 es el mas grande")

}else{
    alert("el numero 3 es el mas grande")
}

//EJERCICIO 12 falta terminarlo
let usuarioEdad=parseInt(prompt("Ingrese su edad"))
let bebidas=prompt("¿Que bebida desea tomar? 1-Jugo,2-Agua,3-Cerveza")

if(usuarioEdad >=18);*/



