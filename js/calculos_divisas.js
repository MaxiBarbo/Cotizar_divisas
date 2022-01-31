$(function(){

//Simulador Cambio Usd/Ars y eur/Ars

let dolar = 200;
let euro = 250;
let btc = 60000;
let eth = 4000;
let bake = 2.5;


    $("#usdArs").click(function convertir(pesos) {
    
        pesos = $("[name*='dolar']").val();
        let resultadoDolar = multi(pesos,dolar);
        let resultadoIvaDolar = sumarIva(resultadoDolar);

        alert(`Ingresaste: ${pesos} Ars
        Sin Iva: ${resultadoDolar} Usd
        Con iva: ${resultadoIvaDolar} Usd`);
    }); 

    $("#eurArs").click(function convertir(pesos){

        pesos = $("[name*='dolar']").val();
        let resultadoEuro = multi(pesos,euro);
        let resultadoIva = sumarIva(resultadoEuro);
        alert(`Ingresaste: ${pesos} Ars
        Sin Iva: ${resultadoEuro} Euros
        Con iva: ${resultadoIva} Euros`);
    });  
    
    $("#btcArs").click(function convertir(pesos){

        pesos = $("[name*='dolar']").val();
        let resultadobtc = multi(pesos,btc);
        alert(`Ingresaste: ${pesos} Ars
        Son: ${resultadobtc} BTC`);
    }); 

    $("#ethArs").click(function convertir(pesos){
        pesos = $("[name*='dolar']").val();
        let resultadoeth = multi(pesos,eth);
        alert(`Ingresaste: ${pesos} Ars
        Son: ${resultadoeth} ETH`);
    });
  
});

function multi(a,b){
    return a/b;
} 

function sumarIva(precioCosto){
    return (precioCosto + (precioCosto * 0.21));
    }

