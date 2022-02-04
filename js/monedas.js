
// Funcion para obtener datos de la Api en solicitada
    $("#usdt").click(function(){

        obtenerDatos();

    });
   
    function division(a,b){
        return a/b;
    } 
    function multi(n1, n2) {
        return n1 * n2;
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

            let resultadoBtc = parseFloat(datos.bpi.USD.rate_float);
            let resultadoDolar = division(pesosBtc,resultadoBtc);
              
            let cotizacionBtc = $(".boxBtc");
            cotizacionBtc.append(`<span class="sb">1 Bitcoin <span class="iconify" data-icon="cib:btc" style="color: #ffd23f;" data-width="15" data-height="15"></span></span>
                                  <span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${datos.bpi.USD.rate_float}</span>`);

            let resultadoUno = $("#resultadoCripto");
            resultadoUno.append(`<span class="sb">Cripto:</span>
                                <li> ${datos.chartName} | <span class="iconify" data-icon="cib:btc" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${resultadoDolar}</li>`);

            let resultadoDos = $("#resultadoFecha");
            resultadoDos.append(`<span class="sb">Fecha / Horario:</span>
                                <li>${datos.time.updated.substr(0, 20)}</li>`);
             
        }
    }
}

// Funcion para consultar api Criptos btc en usd y euro

const URLJSON = 'https://api.coindesk.com/v1/bpi/currentprice.json' 

   
//Accedemos el evento click del botón agregado
$("#euro").click(() => { 

let pesosBtc = $("[name*='btc']").val(); 
$.getJSON(URLJSON, function (respuesta, estado) {

    if(estado === "success"){
        
      const misDatos = respuesta;
      

      let apiEuro = parseFloat(misDatos.bpi.EUR.rate_float);
      let resultadoEuro = division(pesosBtc,apiEuro);
      
      let resultadoUno = $("#resultadoCripto");
      resultadoUno.append(`<span class="sb">Cripto:</span>
                            <li>${misDatos.chartName}  | <span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${resultadoEuro}</li>`);

      let resultadoDos = $("#resultadoFecha");
      resultadoDos.append(`<span class="sb">Fecha / Horario:</span>
                            <li>${misDatos.time.updated.substr(0, 20)}</li>`);

      let cotizacionBtc = $(".boxBtc");
      cotizacionBtc.append(`<span class="sb">1 Bitcoin<span class="iconify" data-icon="cib:btc" style="color: #ffd23f;" data-width="14" data-height="14"></span></span>
                            <span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="13" data-height="13"></span> ${misDatos.bpi.EUR.rate_float}</span>`);

    }
  });
});

const urlDolar = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';


$("#dolar").click(() => { 

    let pesosDolar = $("[name*='usdArs']").val();  

    $.getJSON(urlDolar, function (respuesta, estado) {
    
        if(estado === "success"){
              
          const misDatosDolar = respuesta;
        //   console.log(misDatosDolar);
          
          const dolarBlueCompra = misDatosDolar[1].casa.compra;
          const dolarBlueventa = misDatosDolar[1].casa.venta;
          const dolarBlueNombre = misDatosDolar[1].casa.nombre;
          
          let dolarCotizarBlue = multi(parseFloat(dolarBlueventa),pesosDolar);
          let dolarCotizarOficial = multi(parseFloat(misDatosDolar[0].casa.venta),pesosDolar);

       
//Seccion Dolar Blue

            let cotizacionDolarBlue = $(".boxDolarBlue");
            cotizacionDolarBlue.append(`<span class="tDivisas">${dolarBlueNombre}</span>
                                        <span><span class="sb">Compra: </span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span>${dolarBlueCompra}</span>
                                        <span><span class="sb">Venta: </span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span>${dolarBlueventa}</span>`);

            let resultadoDolarBlue = $("#resultadoDolar");
            resultadoDolarBlue.append(`<span class="sb">Conversion en <span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span>ARS:</span>
                                <li>${misDatosDolar[0].casa.nombre}  |<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span> ${dolarCotizarOficial}</li>
                                <li>${dolarBlueNombre}  |<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span> ${dolarCotizarBlue}</li>`);

 // Seccion Dolar Oficial  

            let cotizacionDolarOficial = $(".boxDolarOficial");
            cotizacionDolarOficial.append(`<span class="tDivisas">${misDatosDolar[0].casa.nombre}</span>
                                            <span><span class="sb">Compra: </span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span>${misDatosDolar[0].casa.compra}</span>
                                          <span><span class="sb">Venta: </span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span>${misDatosDolar[0].casa.venta}</span>`); 

                                       
        }
    });
  });

// Funcion para consultar api en EURO
  const urlEuro = 'https://api.bluelytics.com.ar/v2/latest';


$("#eur").click(() => { 

    let pesosEuro = $("[name*='usdArs']").val();  

    $.getJSON(urlEuro, function (respuesta, estado) {
    
        if(estado === "success"){

            const misDatosEuro = respuesta;
            console.log(misDatosEuro);

            const euroBlueCompra = misDatosEuro.blue_euro.value_sell ;
            const euroBlueventa = misDatosEuro.blue_euro.value_buy;
            
            //Seccion Euro Blue

            let cotizacionEuroBlue = $(".boxDolarBlue");
            cotizacionEuroBlue.append(`<span class="tDivisas">Euro Blue</span>
                                        <span><span class="sb">Compra: </span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span>${euroBlueCompra}</span>
                                        <span><span class="sb">Venta: </span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span>${euroBlueventa}</span>`);

            // Seccion Dolar Oficial  

            let cotizacionEuroOficial = $(".boxDolarOficial");
            cotizacionEuroOficial.append(`<span class="tDivisas">Euro Oficial</span>
                                            <span><span class="sb">Compra: </span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span>${misDatosEuro.oficial_euro.value_sell}</span>
                                          <span><span class="sb">Venta: </span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span>${misDatosEuro.oficial_euro.value_buy}</span>`); 

            
            let euroCotizarBlue = multi(parseFloat(euroBlueventa),pesosEuro);
            let euroCotizarOficial = multi(parseFloat(misDatosEuro.oficial_euro.value_buy),pesosEuro);

            let resultadoEuroBlue = $("#resultadoDolar");
            resultadoEuroBlue.append(`<span class="sb">Conversion en $ARS:</span>
                                <li>Euro Oficial |<span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${euroCotizarOficial}</li>
                                <li>Euro Blue |<span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${euroCotizarBlue}</li>`);

        }
    })
});