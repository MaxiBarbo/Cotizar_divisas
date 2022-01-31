
// Funcion para obtener datos de la Api en solicitada
    $("#usdt").click(function(){

        obtenerDatos();

    });
   
    function division(a,b){
        return a/b;
    } 
     
    function obtenerDatos(){

    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    const api = new XMLHttpRequest();
    api.open('get', url, true);
    api.send();

    let pesosBtc = $("[name*='btc']").val();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            const datos = JSON.parse(this.responseText);
            // console.log(datos.bpi);

            let resultadoBtc = datos.bpi.USD.rate_float;
            let resultadoDolar = division(pesosBtc,resultadoBtc);
              
            let cotizacionBtc = $(".boxBtc");
            cotizacionBtc.append(`<span>$ ${datos.bpi.USD.rate_float} ${datos.bpi.USD.code}</span>`);

            let resultadoUno = $("#resultadoCripto");
            resultadoUno.append(`<li> ${datos.chartName} <span class="iconify" data-icon="cryptocurrency:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span> | $ ${resultadoDolar}</li>`);

            let resultadoDos = $("#resultadoFecha");
            resultadoDos.append(`<li>${datos.time.updated.substr(0, 22)}</li>`);
             
        }
    }
}

//Declaramos la url del archivo JSON local
const URLJSON = 'https://api.coindesk.com/v1/bpi/currentprice.json' 
   
//Accedemos el evento click del botón agregado
$("#euro").click(() => { 

let pesosBtc = $("[name*='btc']").val(); 
$.getJSON(URLJSON, function (respuesta, estado) {

    if(estado === "success"){
        
      const misDatos = respuesta;
      
      let apiEuro = misDatos.bpi.EUR.rate_float;
      let resultadoEuro = division(pesosBtc,apiEuro);
      
      let resultadoUno = $("#resultadoCripto");
      resultadoUno.append(`<li>${misDatos.chartName} <span class="iconify" data-icon="cryptocurrency:eur" style="color: #ffd23f;" data-width="15" data-height="15"></span> | $ ${resultadoEuro}</li>`);

      let resultadoDos = $("#resultadoFecha");
      resultadoDos.append(`<li>${misDatos.time.updated.substr(0, 22)}</li>`);

      let cotizacionBtc = $(".boxBtc");
      cotizacionBtc.append(`<span>$ ${misDatos.bpi.EUR.rate_float} ${misDatos.bpi.EUR.code}</span>`);

    }
  });
});


                            
