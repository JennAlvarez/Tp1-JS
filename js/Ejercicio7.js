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