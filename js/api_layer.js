

$("#testApi").click(() => { 

  apiDolar()
  
});


function apiDolar(){;
    const urlDolar = 'https://free.currconv.com/api/v7/convert?q=USD_EUR,EUR_USD&compact=ultra&callback=sampleCallback&apiKey=ebf2143557128efbca59';
    let pesosDolar = $("[name*='usdArs']").val();  
    let pesosPesos = $("[name*='ArsArs']").val();

    

    $.getJSON(urlDolar, function (respuesta, estado) {
    
        if(estado === "success"){
              
          const misDatosDolar = respuesta;
          console.log(estado)
          

          
        //   const dolarBlueCompra = misDatosDolar.USD_EUR;
        //   const dolarBlueventa = misDatosDolar.EUR_USD;
        //   const dolarBlueNombre = misDatosDolar.EUR_ARS;

// console.log(dolarBlueCompra);  
// console.log(dolarBlueventa); 
// console.log(dolarBlueNombre);        
          
//           let dolarCotizarBlue = multi(pesosDolar,parseFloat(dolarBlueventa));
//           let dolarCotizarOficial = multi(pesosDolar,parseFloat(misDatosDolar[0].casa.venta));

//           let pesosCotizarBlue = division(pesosPesos,parseFloat(dolarBlueventa));
//           let pesosCotizarOficial = division(pesosPesos,parseFloat(misDatosDolar[0].casa.venta));

// //Datos Precio Dolar Blue / Oficial

        $("#table").prepend(`                    
          <tr>
            <th class="sb">1<span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></th>
            <td class="sb">1</td>
            <td class="sb">3</td>
            <td class="sb">4</td>
          </tr> 
            <tr>
            <th class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></th>
            <td class="sb">2</td>
            <td class="sb">3</td>
            <td class="sb">4</td>
          </tr>`)
        
// // Datos convertidos segun tipo de cambio dolar blue / oficial

//               if(pesosPesos !==''){

//               $(".tableTwo").prepend(`                    
//                                       <tr>
//                                       <th class="sb" scope="row"></th>
//                                       <th class="sb" scope="row"><span class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span></span></th>
//                                       <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span></td>
//                                       <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span></td>
//                                       <td class="sb">%</td>
//                                       </tr> `)
//               }

//               if (pesosDolar !==''){

//               $(".tableTwo").prepend(`                    
//                                       <tr>
//                                       <th class="sb" scope="row"></th>
//                                       <th class="sb" scope="row"><span class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span><span class="iconify" data-icon="eva:arrow-right-outline" data-width="15" data-height="15"></span><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span></span></th>
//                                       <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span></td>
//                                       <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span></td>
//                                       <td class="sb">%</td>
//                                       </tr> `)
//             }                             
          }
          
    });
  }