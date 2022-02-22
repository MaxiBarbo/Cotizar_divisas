function division(a,b){
  return a/b;
} 
function multi(n1, n2) {
  return n1 * n2;
}

// Api para consutlar valor del Dolar

const urlDolar = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';


$("#dolar").click(() => { 

  apiDolar('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="20" data-height="20"></span>')
});

function apiDolar(icono){;

    let pesosDolar = $("[name*='usdArs']").val();  
    let pesosPesos = $("[name*='ArsArs']").val();

    $.getJSON(urlDolar, function (respuesta, estado) {
    
        if(estado === "success"){
              
          const misDatosDolar = respuesta;
// console.log(misDatosDolar);
          
          const dolarBlueCompra = misDatosDolar[1].casa.compra;
          const dolarBlueventa = misDatosDolar[1].casa.venta;
          const dolarBlueNombre = misDatosDolar[1].casa.nombre;
          
          let dolarCotizarBlue = multi(pesosDolar,parseFloat(dolarBlueventa));
          let dolarCotizarOficial = multi(pesosDolar,parseFloat(misDatosDolar[0].casa.venta));

          let pesosCotizarBlue = division(pesosPesos,parseFloat(dolarBlueventa));
          let pesosCotizarOficial = division(pesosPesos,parseFloat(misDatosDolar[0].casa.venta));

//Datos Precio Dolar Blue / Oficial

        $("#table").prepend(`                    
          <tr>
            <th class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span>Blue</th>
            <td class="sb">${icono}${dolarBlueCompra}</td>
            <td class="sb">${icono}${dolarBlueventa}</td>
            <td class="sb">$</td>
          </tr> 
            <tr>
            <th class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span>Ofic</th>
            <td class="sb">${icono}${misDatosDolar[0].casa.compra}</td>
            <td class="sb">${icono}${misDatosDolar[0].casa.venta}</td>
            <td class="sb">$</td>
          </tr>`)
        
// Datos convertidos segun tipo de cambio dolar blue / oficial

              if(pesosPesos !==''){

              $(".tableTwo").prepend(`                    
                                      <tr>
                                      <th class="sb" scope="row"></th>
                                      <th class="sb" scope="row"><span class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span></span></th>
                                      <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${pesosCotizarBlue.toFixed(2)}</td>
                                      <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${pesosCotizarOficial.toFixed(2)}</td>
                                      <td class="sb">%</td>
                                      </tr> `)
              }

              if (pesosDolar !==''){

              $(".tableTwo").prepend(`                    
                                      <tr>
                                      <th class="sb" scope="row"></th>
                                      <th class="sb" scope="row"><span class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span></span></th>
                                      <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${dolarCotizarBlue}</td>
                                      <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${dolarCotizarOficial}</td>
                                      <td class="sb">%</td>
                                      </tr> `)
            }                             
          }
          
    });
  }

// Funcion para consultar api en EURO

  const urlEuro = 'https://api.bluelytics.com.ar/v2/latest';


$("#eur").click(() => { 

    apiEuro('<span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="20" data-height="20"></span>')
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

            let euroCotizarBlue = multi(pesosEuro,parseFloat(euroBlueventa));
            let euroCotizarOficial = multi(pesosEuro,parseFloat(misDatosEuro.oficial_euro.value_buy));

            let pesosEuroCotizarBlue = division(pesosPesos,parseFloat(euroBlueventa));
            let pesosEuroCotizarOficial = division(pesosPesos,parseFloat(misDatosEuro.oficial_euro.value_buy));
            
            //Seccion Euro Blue

            $("#table").prepend(`                    
            <tr>
              <th class="sb"><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span>Blue</th>
              <td class="sb">${icono}${euroBlueventa}</td>
              <td class="sb">${icono}${euroBlueCompra}</td>
              <td class="sb">$</td>
            </tr> 
              <tr>
              <th class="sb"><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span>Ofic</th>
              <td class="sb">${icono}${misDatosEuro.oficial_euro.value_buy}</td>
              <td class="sb">${icono}${misDatosEuro.oficial_euro.value_sell}</td>
              <td class="sb">$</td>
            </tr>`)

            if(pesosPesos !==''){

              $(".tableTwo").prepend(`                    
                                      <tr>
                                      <th class="sb" scope="row"></th>
                                      <th class="sb" scope="row"><span class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span></span></th>
                                      <td class="sb"><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${pesosEuroCotizarOficial.toFixed(2)}</td>
                                      <td class="sb"><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${pesosEuroCotizarBlue.toFixed(2)}</td>
                                      <td class="sb">%</td>
                                      </tr> `)
              }

              if (pesosEuro !==''){

              $(".tableTwo").prepend(`                    
                                      <tr>
                                      <th class="sb" scope="row"></th>
                                      <th class="sb" scope="row"><span class="sb"><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span></span></th>
                                      <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${euroCotizarBlue.toFixed(1)}</td>
                                      <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${euroCotizarOficial.toFixed(1)}</td>
                                      <td class="sb">%</td>
                                      </tr> `)
            } 
        }
    })
}

// FUncion para ingresar en Api con Key
  
  $("#usdEuro").click(() => {
      datosApiDivisas('<span class="iconify" data-icon="emojione-v1:flag-for-united-states" style="color: #ffd23f;" data-width="30" data-height="30"></span>','<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="20" data-height="20"></span>')
      
  });



  //api www.freeCurrency.com
  // const apiKey = "8a132e310-9324-11ec-9a68-75030c11c4ff";
  // const urltrendingFree = 'https://freecurrencyapi.net/api/v2/latest?apikey=a132e310-9324-11ec-9a68-75030c11c4ff';
  // api de www.Fixer.com
  const urltrendingFixer = 'http://data.fixer.io/api/latest?access_key=3ccedb265dbf15a3f8ae9bcccb7c5ab3'; 
  const urlCurr = 'https://free.currconv.com/api/v7/currencies??apiKey=ebf2143557128efbca59'
  const urlcurrJson = 'https://free.currconv.com/api/v7/convert?q=USD_EUR,EUR_USD&compact=ultra&callback=sampleCallback&apiKey=ebf2143557128efbca59'

  endpoint = 'latest'
  acces_key = '3ccedb265dbf15a3f8ae9bcccb7c5ab3';

function datosApiDivisas(flag,fiat){   

  let dolar = $("[name*='usdArs']").val();

      $.ajax({
          method: "GET",
          url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + acces_key,
          success: function (respuesta) {
           
console.log(respuesta.rates);

              let usd_euro = respuesta.rates;
              let resultado = multi(dolar,usd_euro)
console.log(usd_euro)   

            $("#table").prepend(`                    
              <tr>
                <th class="sb">${flag}</th>
                <td class="sb">$</td>
                <td class="sb">${fiat}${usd_euro.USD}</td>
                <td class="sb">%</td>
              </tr>
              <tr>
                <th class="sb"><span class="iconify" data-icon="noto-v1:flag-for-flag-united-kingdom" style="color: silver;" data-width="30" data-height="30"></span></th>
                <td class="sb">$</td>
                <td class="sb"><span class="iconify" data-icon="el:gbp" style="color: #ffd23f;" data-width="20" data-height="20"></span>${usd_euro.GBP}</td>
                <td class="sb">%</td>
              </tr> `)
              if(dolar !==''){

                $(".tableTwo").prepend(`                    
                                        <tr>
                                        <th class="sb"></th>
                                        <th class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" style="color: #ffd23f;" data-width="15" data-height="15"></span></th>
                                        <td class="sb">$</td>
                                        <td class="sb">$ ${resultado.toFixed(1)}</td>
                                        <td class="sb">%</td>
                                        </tr> `)
                }
          }   
      });
    }




  