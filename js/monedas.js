
// Funcion para obtener datos de la Api en solicitada
    $("#usdt").click(function(){

        obtenerDatos();

    });
   
    function division(a,b){
        return a/b;
    } 
    function multi(n1, n2) {
        return (parseInt(n1) * parseInt(n2));
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
            cotizacionBtc.append(`<span class="sb">1 Bitcoin <span class="iconify" data-icon="cib:btc" style="color: #ffd23f;" data-width="15" data-height="15"></span></span>
                                  <span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${datos.bpi.USD.rate_float}</span>`);

            let resultadoUno = $("#resultadoCripto");
            resultadoUno.append(`<span class="sb">Cripto:</span>
                                <li> ${datos.chartName} | <span class="iconify" data-icon="cib:btc" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${resultadoDolar}</li>`);

            let resultadoDos = $("#resultadoFecha");
            resultadoDos.append(`<span class="sb">Fecha / Horario:</span>
                                <li>${datos.time.updated.substr(0, 22)}</li>`);
             
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
      resultadoUno.append(`<span class="sb">Cripto:</span>
                            <li>${misDatos.chartName}  | <span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${resultadoEuro}</li>`);

      let resultadoDos = $("#resultadoFecha");
      resultadoDos.append(`<span class="sb">Fecha / Horario:</span>
                            <li>${misDatos.time.updated.substr(0, 22)}</li>`);

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
          console.log(misDatosDolar);
          
          const dolarBlueCompra = misDatosDolar[1].casa.compra;
          const dolarBlueventa = misDatosDolar[1].casa.venta;
          const dolarBlueNombre = misDatosDolar[1].casa.nombre;
          
          let dolarCotizar = multi(dolarBlueventa,pesosDolar);
          let dolarCotizarOficial = multi(misDatosDolar[0].casa.venta,pesosDolar);
          
          
//Seccion Dolar Blue

            let cotizacionDolarBlue = $(".boxDolarBlue");
            cotizacionDolarBlue.append(`<span><span class="sb">Compra: </span>${dolarBlueCompra}</span>
                                        <span><span class="sb">Venta: </span>${dolarBlueventa}</span>`);

            let tituloDolarBlue = $(".spanDolarBlue");  
            tituloDolarBlue.append(`<span class="tDivisas">${dolarBlueNombre}</span>`); 

            let resultadoDolarBlue = $("#resultadoDolar");
            resultadoDolarBlue.append(`<span class="sb">Divisa:</span>
                                <li>${misDatosDolar[0].casa.nombre}  |$ ${dolarCotizarOficial}</li>
                                <li>${dolarBlueNombre}  |$ ${dolarCotizar}</li>`);

 // Seccion Dolar Oficial  

            let cotizacionDolarOficial = $(".boxDolarOficial");
            cotizacionDolarOficial.append(`<span><span class="sb">Compra: </span>${misDatosDolar[0].casa.compra}</span>
                                          <span><span class="sb">Venta: </span>${misDatosDolar[0].casa.venta}</span>`); 

            let tituloDolarOficial = $(".spanDolarOficial");  
            tituloDolarOficial.append(`<span class="tDivisas">${misDatosDolar[0].casa.nombre}</span>`); 
            
            
                            
        }
    });
  });