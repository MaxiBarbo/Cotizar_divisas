//Funcion para calcular cambio divisa relacion ars/Usd - ars/euro

function valorDolar(moneda,resultado){
    moneda = prompt("Ingrese dolar o euro").toLowerCase();
    resultado = parseInt(prompt("Ingrese Cantidad Deseada"));

    let resultadoDolar = multi(resultado,dolar);
    let resultadoEuro = multi(resultado,euro);

    pregunta = confirm("iva incluido?")
    
    iva1 = sumarIva(resultadoEuro);
    iva2 = sumarIva(resultadoDolar);

    if  (isNaN(resultado)){
    alert ("No ingresaste un numero")
          
}
    if (moneda !=="dolar" && moneda !=="euro"){
        alert ("No ingresaste ni euro ni dolar")

    }
    else if (moneda === "dolar"){
       
        if(pregunta){
        alert("Con Iva $" + iva2 + " Ars")
            
        }
        else if (pregunta === false);{
        alert("Sin Iva $" + resultadoDolar + " Ars");
            
        }     
    }
    
    else if(moneda === "euro"){

        if(pregunta === "si"){
            alert("Con Iva $" + iva1 + " Ars")
                
        }
        else if (pregunta === "no");{
        alert("Sin Iva $" + resultadoEuro + " Ars");
            
        } 
}
    else (false);{
    alert("Desea cotizar nuevamente?")
    }
}   
    var dolar = 200;
    var euro = 250;
    
    function sumarIva(precioCosto){
    return (precioCosto + (precioCosto * 0.21));
    }

    function multi(a,b){
    return a*b;
    } 

// Funcion para Calcular cuantos USDT necesito para comprar las siguientes criptos BTC - ETH - BAKE
// usdt_btc = "Numero Ingresado" * Valor BTC
// usdt_eth = "numero ingresado" * valor ETH
// usdt_bake = "numero ingresado" * valor bake
// ingrese nuevamente cripto

function calcripto(cripto,usdt){

    cripto = prompt("Ingrese Cripto BTC - ETH - BAKE").toLowerCase();
    usdt = parseInt(prompt("Ingrese USDT"));

    let resultadoBtc = diferencia(usdt,btc);
    let resultadoEth = diferencia(usdt,eth);
    let resultadoBake = diferencia(usdt,bake);
 
if(isNaN(usdt) || usdt === ""){
    alert("favor de ingresar datos nuevamente")
    
}
    
if (cripto === "btc"){
 alert("Son" + " " + resultadoBtc + " " + "BTC");
 
}
 else if (cripto === "eth"){
 alert("Son" + " " + resultadoEth + " " + "ETH");
 
}
else if (cripto === "bake"){
alert("Son" + " " + resultadoBake + " " + "BAKE");

}

else{
    confirm("Otro calculo?");
    return cripto;
    
 }  
}
    var btc = 60000;
    var eth = 4000;
    var bake = 2.5;

    
    function diferencia(a,b){
        return a/b;
}

// Prueba calculadora realizada en after class

function calculadora(){
    var numero1 = prompt("Numero 1");
    
    var numero2 = prompt("Numero 2");
    
    var resultado = prompt("ingrese operacion + - * /")
    
    if(resultado === "+"){
        resultado = numero1 + numero2;
        alert("Resultado de tu suma"+ " " + resultado);
    
    }else if (resultado === "*"){
        resultado = numero1*numero2;
        alert("Resultado de tu Multiplicacion"+ " " + resultado);
    
    } else if(resultado === "/"){
        resultado = numero1/numero2;
        alert("Resultado de tu Division"+ " " + resultado)
    
    }else if (resultado === "-"){
        resultado = numero1 - numero2;
        alert("Resultado de tu resta"+ " " + resultado)
    }
}
    
//Funcion inventada para calcular dias de vacaciones
    
    function calcularDias(){
    
        let apellido=  prompt("Por favor ingrese su apellido");
        let nombre = prompt("Por favor ingrese su nombre");
        let dias_vacaciones = prompt ("Por favor ingrese dias que necesita");
        let años_trabajados = prompt ("Ingrese años en la actividad");
        let trabajar = diferencia(años_trabajados,2);
        let licencia = diferencia(años_trabajados,dias_licencia);
       
        alert("hola" + " " + nombre + " " + apellido);
    
        if(años_trabajados <= 10){
    
            alert(trabajar + " " + "dias");
            return true;
        }
    
        let dias_licencia = años_trabajados / dias_vacaciones + 10;
        alert("te corresponden" + " " +  dias_licencia + " " + "dias");
           
    }
    
    function diferencia(a,b){
        return a/b;
    }

//Calculo de precios con descuentos e Iva aplicado de ser solicitado

    function precios(){

        var precio = prompt("Introduzca Precio producto en $Ars: ");
        var descuento = prompt("Introduzca descuento en $Ars: ");
        
        alert("Precio neto = " + calculoPVP(precio,descuento)[0] + "$ ars" );
        alert("IVA = " + calculoPVP(precio,descuento)[1] + "$ ars" );
        alert("Precio Final = " + calculoPVP(precio,descuento)[2] + "$ ars");
        
        function calculoPVP(precio, descuento) {
            var IVA = 0.21;
            var precioNeto = precio - descuento;
            var cantidadIVA = precio * IVA;
            var PVP = precioNeto + cantidadIVA;
            var calculo = [precioNeto, cantidadIVA, PVP];
        
            return calculo;
        }
    }
// Funcion elegir ciudad utilizando la declaracion Switch
function ciudad() {
   
    let city =  prompt("Eligue entre 1 - 2 - 3 - 4").toLowerCase();
    
    while (city != 'salir') {

        if(city !== "1" && city !== "2" && city !=="3" && city !== "4"){
            alert("no se reconoce numero");
            
        }
        switch (city) {
            case "1":
                alert("Rosario");
                break;
            case "2":
                alert("Funes");
                break;
            case "3":
                alert("Funes Town");
                break;
            case "4":
                alert("Fisherton");
                break;
               
        }
        
        city = prompt("eligue un numero de 1 a 4").toLowerCase();
    }
}    


        