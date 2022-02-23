
function division(a,b){
    return a/b;
} 
function multi(n1, n2) {
    return n1 * n2;
}

$(function(){

$("#usdEuro").click(() => { 

  apiDolar('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="20" data-height="20"></span>')
  
});


function apiDolar(fiat){;
    const apiExchangeRate = "https://v6.exchangerate-api.com/v6/2d4eec2d2d6668d4a8097987/latest/EUR";
    let pesosDolar = $("[name*='usdArs']").val();  
    let pesosPesos = $("[name*='ArsArs']").val();

    $.get(apiExchangeRate, function (respuesta, estado) {
    
        if(estado === "success"){
// console.log(respuesta);  

          const misDatosDolar = respuesta.conversion_rates;
          let resultado_usd = multi(misDatosDolar.USD,pesosDolar)  
          let resultado_gbp = multi(misDatosDolar.GBP,pesosDolar)
          let resultado_ars = multi(misDatosDolar.ARS,pesosDolar)
          let resultado_brl = multi(pesosDolar,misDatosDolar.BRL)
          console.log(resultado_brl)

// console.log(misDatosDolar.EUR);
         
          $("#table").prepend(`                    
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span></td>
            <td class="sb">${fiat}</td>
            <td class="sb">${fiat} ${misDatosDolar.USD}</td>
            <td class="sb">%</td>
          </tr> 
            <tr>
            <td class="sb"><span class="iconify" data-icon="noto-v1:flag-for-flag-united-kingdom" data-width="25" data-height="25"></span></td>
            <td class="sb"><span class="iconify" data-icon="el:gbp" style="color: #ffd23f;" data-width="19" data-height="19"></span></td>
            <td class="sb"><span class="iconify" data-icon="el:gbp" style="color: #ffd23f;" data-width="19" data-height="19"></span>${misDatosDolar.GBP}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span></td>
            <td class="sb">${fiat}</td>
            <td class="sb">${fiat} ${misDatosDolar.ARS}</td>
            <td class="sb">%</td>
          </tr>
          <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-brazil" data-width="25" data-height="25"></span></td>
            <td class="sb"><span class="iconify" data-icon="fa6-solid:brazilian-real-sign" style="color: #ffd23f;" data-width="19" data-height="19"></span></td>
            <td class="sb"><span class="iconify" data-icon="fa6-solid:brazilian-real-sign" style="color: #ffd23f;" data-width="19" data-height="19"></span> ${misDatosDolar.BRL.toFixed(2)}</td>
            <td class="sb">%</td>
          </tr>`)

          if (pesosDolar !==''){

            $(".tableTwo").prepend(`                    
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_usd.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr> 
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="noto-v1:flag-for-flag-united-kingdom" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_gbp.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_ars.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-brazil" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="fa6-solid:brazilian-real-sign" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_brl.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>`)
          } 
                              
          }  
    });
  }
});