function division(a,b){
  return a/b;
} 
function multi(n2, n1) {
  return n1 * n2;
}
function variacion (n2,n1){
  return ((n2-n1)/n1) * 100;
}
function difPorcentual(n1,n2){
  return ((n1 - n2))/((n2+n1)/2)*100
}

// Api para consutlar valor del Dolar / Ars

const urlDolar = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

$("#dolar").click(() => { 

  apiDolar('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>')
});

$("#dolarTurista").click(() => { 

  apiDolarTurista('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>')
});

function apiDolarTurista(icono){
  $.getJSON(urlDolar, function(respuesta,estado){

      if (estado === 'success'){

        const datos = respuesta

console.log(datos)

        const dolarTuristaCompra = datos[6].casa.compra;
        const dolarTuristaventa = datos[6].casa.venta;
        const variacionT = datos[6].casa.variacion;


      let tableBody = document.getElementById('tableTwo');
        let flag = `<td><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span></td>`;
        let dolarCompraT = `<td>${icono}${dolarTuristaCompra}</td>`;
        let dolarVentaT = `<td>${icono}${dolarTuristaventa}</td>`;  
        let VariacionT = `<td>${variacionT} %</td>`;
        let diferenVar = `<td>%</td>`;

      tableBody.innerHTML += `<tr>${flag + dolarCompraT + dolarVentaT + diferenVar + VariacionT}</tr>`;

      }
  })
}

function apiDolar(icono){;

    let pesosDolar = $("[name*='usdArs']").val();  
    let pesosPesos = $("[name*='ArsArs']").val();

    $.getJSON(urlDolar, function (respuesta, estado) {
    
        if(estado === "success"){
              
          const misDatosDolar = respuesta;
          
// console.log(misDatosDolar);
          
          const dolarBlueCompra = misDatosDolar[1].casa.compra;
          const dolarBlueventa = misDatosDolar[1].casa.venta;
          const variacionBlue = misDatosDolar[1].casa.variacion;
          const variacionOficial = misDatosDolar[0].casa.variacion;
//  console.log(variacion)         
          let dolarCotizarBlue = multi(pesosDolar,parseFloat(dolarBlueventa));
          let dolarCotizarOficial = multi(pesosDolar,parseFloat(misDatosDolar[0].casa.venta));
          let brechaBlueVenta = difPorcentual(parseFloat(dolarBlueventa),parseFloat(misDatosDolar[0].casa.venta))
          let brechaBlueCompra = difPorcentual(parseFloat(dolarBlueCompra),parseFloat(misDatosDolar[0].casa.compra))

          let pesosCotizarBlue = division(pesosPesos,parseFloat(dolarBlueventa));
          let pesosCotizarOficial = division(pesosPesos,parseFloat(misDatosDolar[0].casa.venta));

//Se crea tabla dinamica tomando datos del Dolar Blue y Dolar Oficial

          let tableBody = document.getElementById('tableTwo');
              let flagOficial = `<td><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span>Ofic</td>`;
              let flagBlue = `<td><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span>Blue</td>`;
              let dolarCompraB = `<td>${icono}${dolarBlueCompra}</td>`
              let dolarVentaB = `<td>${icono}${dolarBlueventa}</td>`;
              let dolarCompra = `<td>${icono}${misDatosDolar[0].casa.compra}</td>`;
              let dolarVenta = `<td>${icono}${misDatosDolar[0].casa.venta}</td>`;
              let variacionDolar = `<td>${variacionBlue} %</td>`;
              let variacionDolarOficial = `<td>${variacionOficial} %</td>`;
              let brechaDolarBlue = `<td>${brechaBlueVenta.toFixed(0,4)}%</td>`;
              let brechaDolarCompra = `<td>${brechaBlueCompra.toFixed(0,4)}%</td>`;

                tableBody.innerHTML += `<tr>${ flagBlue + dolarCompraB + dolarVentaB + brechaDolarBlue + variacionDolar}</tr>`;
                tableBody.innerHTML += `<tr>${ flagOficial + dolarCompra + dolarVenta + brechaDolarCompra + variacionDolarOficial}</tr>`;

  // console.log(typeof(parseFloat(dolarBlueCompra)))
  // console.log(dolarBlueventa)                       
// Se crea tabla dinamica de Resultados dolar blue/oficial si se ingresa cantidad por usuario en inputs

            if(pesosPesos !==''){

              let tableResult = document.getElementById('tableResults');
              let variacion = `<td>${variacionDolarOficial}%</td>`;
              let flag = `<td><span cla<span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span></span></td>`;
              let resultadoOficial = `<td><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${pesosCotizarOficial.toFixed(2)}</td>`;
              let resultadoBlue = `<td><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${pesosCotizarBlue.toFixed(2)}</td>`;

                tableResult.innerHTML += `<tr>${flag + resultadoOficial + resultadoBlue + variacion}</tr>`
            }

            if (pesosDolar !==''){

              let tableResult = document.getElementById('tableResults');
              let variacion = `<td>${variacionDolarOficial}%</td>`;
              let flag = `<td><span class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span></span></td>`;
              let resultadoOficial = `<td><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${dolarCotizarBlue}</td>`;
              let resultadoBlue = `<td><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${dolarCotizarOficial}</td>`;

                tableResult.innerHTML += `<tr>${flag + resultadoOficial + resultadoBlue + variacion}</tr>`
            }                             
          } 
  });
}

// Funcion para consultar api ARS / EURO

  const urlEuro = 'https://api.bluelytics.com.ar/v2/latest';

$("#eur").click(() => { 

    apiEuro('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>')
});

function apiEuro(icono){

    let pesosEuro = $("[name*='usdArs']").val();  
    let pesosPesos = $("[name*='ArsArs']").val();

    $.getJSON(urlEuro, function (respuesta, estado) {
    
        if(estado === "success"){

            const misDatosEuro = respuesta;

// console.log(misDatosEuro);

            const euroBlueCompra = misDatosEuro.blue_euro.value_sell ;
            const euroBlueventa = misDatosEuro.blue_euro.value_buy;
            const usdPromedio = misDatosEuro.blue_euro.value_avg

            let euroCotizarBlue = multi(pesosEuro,parseFloat(euroBlueventa));
            let euroCotizarOficial = multi(pesosEuro,parseFloat(misDatosEuro.oficial_euro.value_buy));
            let euroVariacionBlue = difPorcentual(euroBlueventa,misDatosEuro.oficial_euro.value_buy)
            let euroVariacionOficial = difPorcentual(euroBlueCompra,misDatosEuro.oficial_euro.value_sell)
            let euroVarBlue = variacion(euroBlueventa,misDatosEuro.oficial_euro.value_buy)
            let euroVarOficial = variacion(euroBlueCompra,misDatosEuro.oficial_euro.value_sell)

            let pesosEuroCotizarBlue = division(pesosPesos,parseFloat(euroBlueventa));
            let pesosEuroCotizarOficial = division(pesosPesos,parseFloat(misDatosEuro.oficial_euro.value_buy));
            
            //Seccion Euro Blue

            
            let tableResult = document.getElementById('tableTwo');
              
              let flag = `<td><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span>Blue</td>`;
              let flagOficial = `<td><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span>Ofic</td>`;
              let resultadoOficial = `<td>${icono}${euroBlueventa}</td>`;
              let resultadoBlue = `<td>${icono}${euroBlueCompra}</td>`;
              let resultadoEuOficial = `<td>${icono}${misDatosEuro.oficial_euro.value_buy}</td>`;
              let resultadoEuBlue = `<td>${icono}${misDatosEuro.oficial_euro.value_sell}</td>`;
              let variacionBlue = `<td>${euroVariacionBlue.toFixed(2)}%</td>`;
              let variacionOficial = `<td>${euroVariacionOficial.toFixed(2)}%</td>`;
              let varBlue = `<td>${euroVarBlue.toFixed(2)}%</td>`;
              let varOficial = `<td>${euroVarOficial.toFixed(2)}%</td>`;

                tableResult.innerHTML += `<tr>${flag + resultadoOficial + resultadoBlue + variacionBlue + varBlue}</tr>`
                tableResult.innerHTML += `<tr>${flagOficial + resultadoEuOficial + resultadoEuBlue + variacionOficial + varOficial}</tr>`
                
            if(pesosPesos !==''){

              let tableResult = document.getElementById('tableResults');
              let variacion = `<td>1</td>`;
              let flag = `<td><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span></span></td>`;
              let resultadoOficial = `<td><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${pesosEuroCotizarOficial.toFixed(2)}</td>`;
              let resultadoBlue = `<td><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${pesosEuroCotizarBlue.toFixed(2)}</td>`;
              
                tableResult.innerHTML += `<tr>${flag + resultadoOficial + resultadoBlue + variacion}</tr>` 
              }

            if (pesosEuro !==''){

              let tableResult = document.getElementById('tableResults');
              let variacion = `<td>2</td>`;
              let flag = `<td><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span></td>`;
              let resultadoOficial = `<td><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${euroCotizarBlue.toFixed(1)}</td>`;
              let resultadoBlue = `<td><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${euroCotizarOficial.toFixed(1)}</td>`;
              
                tableResult.innerHTML += `<tr>${flag + resultadoOficial + resultadoBlue + variacion}</tr>`
            } 
        }
    })
}







  