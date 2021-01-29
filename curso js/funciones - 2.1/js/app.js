/*numeroMaximo=function numeroMaximo(valor1,valor2){
   if(valor1>valor2){
      return valor1;
   }
   return valor2;
  

}

document.write('el numero ,mayor es'+numeroMaximo(60,30));
*/
window.onload=function(){
document.getElementById("boton").addEventListener("click",sumar(numero1,numero2));
}
 function sumar(numero1,numero2){
   var numero1=document.getElementById(numero1).value;
   var numero2=document.getElementById(numero2).value;

   var resultado =parseInt(numero1)+ parseInt(numero2);
   alert('la suma es'+ resultado);


}




