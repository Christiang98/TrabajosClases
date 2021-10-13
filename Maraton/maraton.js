// var nombre = prompt("Ingrese su nombre por favor");
// var mensaje=alert("Hola "+ nombre + " espero que estes bien");
// var mayuscula=nombre.toUpperCase();
// alert(mayuscula)
// var minuscula = nombre.toLowerCase();
// alert(minuscula)


// //2
// var numero1=parseInt(prompt("ingrese un numero"));
// var numero2=parseInt(prompt("ingrese otro numero"));
// var suma= numero2+numero1;
// alert("El resultado de la suma es: " + suma)
// if(numero1>numero2){
//     var resta=numero1-numero2;
//     alert("el resultado de la resta es: "+ resta);
// }else{
//     var resta2=numero2-numero1;
//     alert("el resultado de la resta es: "+ resta2);
// }

// //3
// var texto=prompt("Ingrese un texto")
// var pregunta=confirm("Si desea ver su texto por consola toque aceptar y si desea verlo como alerta cancelar")

// if(pregunta===true){
// var textoMayuscula=texto.toUpperCase();
// console.log(textoMayuscula)
    
// }else{
//     var textoMayuscula=texto.toUpperCase();
//     alert(textoMayuscula)
// } 
//4
// alert("Bienvenid@ a la calculadora")
// var num1=parseInt(prompt("ingrese un numero"));
// var num2=parseInt(prompt("ingrese otro numero"));
// var opereciones=prompt("Ingrese que operacion desea hacer:1)Suma, 2)Resta, 3)Divicion, 4)Multiplicacion,5)Potencia")
// switch(opereciones){
//     case "1":
//     var suma= num2+num1;
//     alert("El resultado de la suma es: " + suma)
//     break
//     case "2":
//         if(num1>num2){
//             var resta=num1-num2;
//             alert("el resultado de la resta es: "+ resta);
//         }else{
//             var resta2=num2-num1;
//             alert("el resultado de la resta es: "+ resta2);
//         }    
//     break
//     case "3":
//     var divicion = num1/num2;
//     alert("El resultado de la divicion es: " + divicion)
//     break
//     case "4":
//     var Multiplicacion=num1*num2;
//     alert("El resultado de la miltiplicacion es: " + Multiplicacion)
//     case "5":
//         const base = parseInt(prompt("ingrese una base"));
//         const exponente=parseInt(prompt("ingrese un exponente"))
//         if(exponente===0){
//         alert(0)
//         }else{
//             let potencia = 1;    
//         for(let i = 0; i<exponente; i++){
//             potencia = potencia * base;
//         }
//         alert(potencia)
//         }
        
//     break
//     default:
//         alert("ingrese un numero por favor")
//         break
// }

//5
// do{
// alert("Bienvenid@ a la calculadora")
// var num1=parseInt(prompt("ingrese un numero"));
// var num2=parseInt(prompt("ingrese otro numero"));
// var opereciones=prompt("Ingrese que operacion desea hacer:1)Suma, 2)Resta, 3)Divicion, 4)Multiplicacion,5)Potencia, 0)salir")
// var potencia;

// switch(opereciones){
//     case "0":
//     break
//     case "1":
//     var suma= num2+num1;
//     alert("El resultado de la suma es: " + suma)
//     break
//     case "2":
//         if(num1>num2){
//             var resta=num1-num2;
//             alert("el resultado de la resta es: "+ resta);
//         }else{
//             var resta2=num2-num1;
//             alert("el resultado de la resta es: "+ resta2);
//         }
//     break
//     case "3":
//     var divicion = num1/num2;
//     alert("El resultado de la divicion es: " + divicion)
//     break
//     case "4":
//     var Multiplicacion=num1*num2;
//     alert("El resultado de la miltiplicacion es: " + Multiplicacion)
//     case "5":
//     const base = parseInt(prompt("ingrese una base"));
//     const exponente=parseInt(prompt("ingrese un exponente"))
//     if(exponente===0){
//     alert(0)
//     }else{
//     let potencia = 1;    
//     for(let i = 0; i<exponente; i++){
//     potencia = potencia * base;
//     }
//     alert(potencia)
//     }
//        break
//     default:
//         alert("ingrese un numero por favor")
//         break
// }
// }while(opereciones !=0)

// //6
// var listaAlumnos=[];
// var alumnos;
// do{
//     alumnos=prompt("Ingrese el nombre de un alumno");
//     listaAlumnos.push(alumnos);
//     mensaje=confirm("Desea ingresar alguno mas");
// }while(mensaje===true);

// alert(listaAlumnos)

//7
// var listaJuan=["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];
// for(let i=0;i<listaJuan.length;i++){
// var palabraMayuscula=listaJuan[i].charAt(0).toUpperCase()
// var posicion= i
// alert(posicion +"- "+ palabraMayuscula+listaJuan[i].slice(1))
// }
//8 Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"

// const mascotas=["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];
// var tuMascota=prompt("Ingrese el nombre de su mascota")
//  if(tuMascota===mascotas[3]||tuMascota===mascotas[5]){
//  alert(tuMascota+" se tiene que vacunar contra la rabia")
// }
// else if(tuMascota===mascotas[0]){
//    alert("a "+ tuMascota+" hay que entregarle alimento valanciado ")
// }
// else if(tuMascota.length>6){
//   alert(tuMascota+" Tiene un nombre muy largo")
//  } 
// else if(tuMascota.length<=3){
//     alert(tuMascota+" Tiene un nombre corto")
//    }
// else{
//     alert("Gracias por traer a "+ tuMascota+" a nuestra veterinaria")
//   }

//9
// var comensales =parseInt(prompt("¿Cuantos son?"));
// var menores =parseInt(prompt("¿Cuantos menores son ?"));
// var cuentaMayores=parseInt((comensales-menores)*700);
// var cuentaMenores=parseInt(menores*450);
// var cuentaFinal=cuentaMayores+cuentaMenores;
// if(comensales>4){
//     var descuento=parseInt((cuentaFinal*10)/100)
//     alert("Son " + comensales + " que tendra que abonar es $ " + (cuentaFinal- descuento))
// }else{
// alert( "Son " + comensales + " que tendra que abonar es $ " + cuentaFinal) 
// }
//10
// De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
//   Para ello:
//   - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
//   - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
//     - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
//     - Agregar el código de paciente adelante en la cola (array) de turnos
//   - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
//     - Agregar el código de paciente al final de la cola (array) de turnos
//   - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
//     - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
//     - Agregar el código de paciente al final de la cola (array) de turnos
    
//   - Si todos los pacientes fueron ingresados, informar en pantalla:
//     - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
//     - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
//     - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP
  
//   - Nota: Escribir código con funciones para facilitar su lectura.
const turnos=[];
const listaVip=[];
do{
  var codigo=parseInt(prompt("Ingrese su codigo de 3 digitos"))
if(codigo>=1 && codigo<=99){
    alert("Usted es un paciente VIP")
var valoracion=parseInt(prompt("Del 1 al 10 como valorarian nuestro servicio"))
turnos.push(codigo)
}
else if(codigo>=100 && codigo<=500){
alert("Usted es un paciente Prepago")
turnos.push(codigo)
}else if(codigo>=501 && codigo<=999){
    alert("Usted es un paciente nuevo")
    var hacerseVip=confirm("Desea pasarse a VIP")
    if(hacerseVip===true){
        listaVip.push(codigo)
    }
turnos.push(codigo)
}else{
    alert("Ingrese un numero de 3 digitos")
}
var inicio=confirm("¿Desea sacar otro turno?")
}while(inicio===true)
alert("Los pacientes nuevos que quieren ser VIP son "+ listaVip)
for(let n=0;n<turnos.length;n++){
var ordenPaciente=n
alert("Lista de pacientes que tienen turno "+ordenPaciente +"- "+ turnos[n])
}
