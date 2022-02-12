// Api para consutlar valor del Dolar

const urlDolar = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';


$("#dolar").click(() => { 

    let pesosDolar = $("[name*='usdArs']").val();  
    let pesosPesos = $("[name*='ArsArs']").val();

    $.getJSON(urlDolar, function (respuesta, estado) {
    
        if(estado === "success"){
              
          const misDatosDolar = respuesta;
        //   console.log(misDatosDolar);
          
          const dolarBlueCompra = misDatosDolar[1].casa.compra;
          const dolarBlueventa = misDatosDolar[1].casa.venta;
          const dolarBlueNombre = misDatosDolar[1].casa.nombre;
          
          let dolarCotizarBlue = multi(pesosDolar,parseFloat(dolarBlueventa));
          let dolarCotizarOficial = multi(pesosDolar,parseFloat(misDatosDolar[0].casa.venta));

          let pesosCotizarBlue = division(pesosPesos,parseFloat(dolarBlueventa));
          let pesosCotizarOficial = division(pesosPesos,parseFloat(misDatosDolar[0].casa.venta));

       
//Seccion Dolar Blue

            let cotizacionDolarBlue = $(".boxDolarBlue");
            cotizacionDolarBlue.append(`<span class="tDivisas">${dolarBlueNombre}</span>
                                        <span><span class="sb">Compra: </span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span>${dolarBlueCompra}</span>
                                        <span><span class="sb">Venta: </span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span>${dolarBlueventa}</span>`);

            let resultadoDolarBlue = $("#resultadoDolar");
            resultadoDolarBlue.append(`<span class="sb">De <span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span> :</span>
                                        <li><span class="tDivisas">${misDatosDolar[0].casa.nombre}</span> |<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span> ${dolarCotizarOficial}</li>
                                        <li><span class="tDivisas">${dolarBlueNombre}</span> |<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span> ${dolarCotizarBlue}</li>

                                        <span class="sb">De <span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span> :</span>
                                        <li><span class="tDivisas">${misDatosDolar[0].casa.nombre}</span> |<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span> ${pesosCotizarOficial} </li>
                                        <li><span class="tDivisas">${dolarBlueNombre}</span> |<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span> ${pesosCotizarBlue}</li>`);

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
    let pesosPesos = $("[name*='ArsArs']").val();

    $.getJSON(urlEuro, function (respuesta, estado) {
    
        if(estado === "success"){

            const misDatosEuro = respuesta;
            // console.log(misDatosEuro);

            const euroBlueCompra = misDatosEuro.blue_euro.value_sell ;
            const euroBlueventa = misDatosEuro.blue_euro.value_buy;
            
            //Seccion Euro Blue

            let cotizacionEuroBlue = $(".boxDolarBlue");
            cotizacionEuroBlue.append(`<span class="tDivisas">Euro Blue</span>
                                        <span><span class="sb">Compra: </span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span>${euroBlueCompra}</span>
                                        <span><span class="sb">Venta: </span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span>${euroBlueventa}</span>`);

            // Seccion Euro Oficial  

            let cotizacionEuroOficial = $(".boxDolarOficial");
            cotizacionEuroOficial.append(`<span class="tDivisas">Euro Oficial</span>
                                            <span><span class="sb">Compra: </span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span>${misDatosEuro.oficial_euro.value_sell}</span>
                                          <span><span class="sb">Venta: </span><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span>${misDatosEuro.oficial_euro.value_buy}</span>`); 

            
            let euroCotizarBlue = multi(pesosEuro,parseFloat(euroBlueventa));
            let euroCotizarOficial = multi(pesosEuro,parseFloat(misDatosEuro.oficial_euro.value_buy));

            let pesosEuroCotizarBlue = division(pesosPesos,parseFloat(euroBlueventa));
            let pesosEuroCotizarOficial = division(pesosPesos,parseFloat(misDatosEuro.oficial_euro.value_buy));

            let resultadoEuroBlue = $("#resultadoDolar");
            resultadoEuroBlue.append(`<span class="sb">De <span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span> :</span>
                                <li><span class="tDivisas">Euro Oficial</span> |<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span></span> ${euroCotizarOficial}</li>
                                <li><span class="tDivisas">Euro Blue</span> |<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="15" data-height="15"></span></span> ${euroCotizarBlue}</li>
                                
                                <span class="sb">De <span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span> :</span>
                                <li><span class="tDivisas">Euro Oficial</span> |<span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${pesosEuroCotizarOficial}</li>
                                <li><span class="tDivisas">Euro Blue</span> |<span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${pesosEuroCotizarBlue}</li>`);

        }
    })
});

function division(a,b){
  return a/b;
} 
function multi(n1, n2) {
  return n1 * n2;
}

