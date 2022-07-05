//punto 1
alert("un mensaje");
//confirm('confirmar')

//punto 2
document.write("<h1>Hello World</h1>");

//punto 3
document.write("resultado: " + (3 + 5));

//punto 4
let nombre = prompt("Nombre de Usuario");
document.write("</br> Hola " + nombre);

//punto 5
let numero1 = parseInt (prompt ("Primer numero"));
let numero2 = parseInt (prompt ("Segundo numero"));
document.write ("<p>Resultado: " + (numero1 + numero2) + "</p>");

//punto 6
let numero01 = parseInt(prompt("Primer numero"));
let numero02 = parseInt(prompt("segundo numero"));
if(numero01>numero02){
    document.write("<p>El numero mayor es el primero: " + (numero01) + "</p>");
}else{
    document.write("<p>El numero mayor es el segundo: " + (numero02) + "</p>");
}

//punto 7
let num1 = parseInt(prompt("primer numero"));
let num2 = parseInt(prompt("segundo numero"));
let num3 = parseInt(prompt("tercer numero"));

if(num1>num2){
    document.write("<p>El numero mayor es el primero: "+ (num1) + "</p>");
}else{
    if(num2>num3){
        document.write("<p>El numero mayor es el segundo: "+ (num2) + "</p>");
    }else{
        document.write("<p>El numero mayor es el tercero: " + (num3) + "</p>");
    }
}

//punto 8
let n1 = parseInt(prompt("Ingrese un numero"));
let dos = parseInt("2");
if(n1 % 2 === 0){
    document.write("El numero " + (n1) + " es divisible en 2");
} else{
    document.write("El numero " + (n1) + " no es divisible en 2");
}