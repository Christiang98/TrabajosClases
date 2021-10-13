
// 2) Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.

// suma = 0;
// for (n = 0; n < 5; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     suma += parseInt(s);
//     alert(suma)
// }

/// 3) Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
/*suma = 0;
var pepe = parseInt(window.prompt("¿Cuantos nùmeros desea ingresar?"))
for (n = 0; n <pepe; n++){
    s = prompt('Ingrese número' + n + ': ', '');
     suma += parseInt(s);
    alert(suma)
}*/
// 4) Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.

// suma = 0;
// var pepe = parseInt(window.prompt("¿Cuantos nùmeros desea ingresar?"))
// for (n = 0; n < pepe; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     suma += parseInt(s);
//     alert(suma)
// }

//5)Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.
// var numeros=parseInt(prompt("¿Cuantos numeros quiere ingresar?"))
// var suma=0;
// var promedio;
// for(n=0;n<numeros;n++){
//     s=prompt('Ingrese número' + n + ': ', '');
//     suma+=parseInt(s)
//     promedio=suma/numeros;
//     alert(promedio)

// }

// 6) Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido.

//7)Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros. 

// var numeroinicial =parseInt(prompt("Ingrese el primer numero "));
// numeroinicial+=1;
// var numeroFinal =prompt("Ingrese el numero final")
// for(n=numeroinicial;n<numeroFinal;n++){
// alert(n)
// }

// 8) Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.

// var mayorA = mayorA;
// var pepe = parseInt(window.prompt("¿Cuantos nùmeros desea ingresar?"))
// for (n = 0; n < pepe; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     s = parseInt(s)
//     if (mayorA === s || mayorA > s){
//         alert('El mayor es: ' + mayorA)
//     } else{
//         mayorA = s
//         alert('El mayor es: ' + mayorA)
//     }
// }

///9)Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.
// var menorA = menorA;
// var pepe = parseInt(window.prompt("¿Cuantos nùmeros desea ingresar?"))
// for (n = 0; n < pepe; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     s = parseInt(s)
//     if (menorA === s || menorA < s){
//         alert('El menor  es: ' + menorA)
//     } else{
//         menorA = s
//         alert('El menor es: ' + menorA)
//     }
// }

// 10) Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)

// var asterico = ' ';
// var pepe = parseInt(window.prompt("Ingrese la cantidad de astéricos recomendada por su médico."));
// for (n = 0; n < pepe; n++) {
//     asterico += '*'
// }
// alert('La cantidad de asteriscos es:' + asterico)

///11) Realizar un programa que pida la base y el exponente y calcule la potencia. 
// var base =parseInt(prompt("Ingresa la base"))
// var exponente =parseInt(prompt("Ingresa el exponente"))
// var calculo=base;

// for(n=1;n<exponente;n++){
// calculo*=base
// }
// alert(calculo)

///12)Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )
// var numero =parseInt(prompt("Ingresa un numero"))
// numero+=1
// var multiplicacion=1;
// for(n=1;n<numero;n++){
//  multiplicacion*=n;
// }
// alert(multiplicacion)

///13)Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)
// var numero =parseInt(prompt("Ingresa un numero positivo"))
// var numero2=numero+1 
// var resto;
// for(n=1;n<numero2;n++){
//     resto=numero%n
//  if(resto===0){
//      alert("Tu numero es divisible por:"+ ""+ n)
//  }  
// }

///14)Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” ,4), debe mostrar:
// H
// O
// L
// A

// var palabra=prompt("Ingrese una palabra");
// var cCaracteres=parseInt(prompt("¿Cuanto caracteres queres que muestre ?"))
// for(n=0;n<cCaracteres;n++){
// var caracteres= palabra.charAt(n)
// alert(caracteres)
// }

///15)Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas. 
// var productos= prompt("¿cuantos productos vas a comprar ?")
// var primerProducto=prompt("¿Que productos queres añadir al carrito?")
// for(n=1;n<productos;n++){
//  var carrito=prompt("¿Que mas queres añadir?")
//  primerProducto+="," + " "+carrito;
// }
// alert(primerProducto)

///16)Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados.

// var numero;
// do{
//     numero=parseInt(prompt("Ingrese un numero"))
    


// }while(numero%3!=0)
// alert("Muy bien ingresante un multiplo de 3")









