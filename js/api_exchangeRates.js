
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
// console.log(respuesta.conversion_rates.USD)
      

          const misDatosDolar = respuesta.conversion_rates;

          let resultado_usd = `<td>${multi(misDatosDolar.USD,pesosDolar)}</td>`  
          let resultado_gbp = `<td>${multi(misDatosDolar.GBP,pesosDolar)}</td>`
          let resultado_ars = `<td>${multi(misDatosDolar.ARS,pesosDolar)}</td>`
          let resultado_brl = `<td>${multi(pesosDolar,misDatosDolar.BRL)}</td>`
          let resultado_clp = `<td>${multi(pesosDolar,misDatosDolar.CLP)}</td>`
          let resultado_cny = `<td>${multi(pesosDolar,misDatosDolar.CNY)}</td>`
          let resultado_ves = `<td>${multi(pesosDolar,misDatosDolar.VES)}</td>`
          let resultado_uyu = `<td>${multi(pesosDolar,misDatosDolar.UYU)}</td>`

          tableBody.innerHTML += `<tr>${flag + resultado_usd}</tr>`;

          
          $("#table").prepend(`                    
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span>USD</td>
            <td class="sb">${fiat}</td>
            <td class="sb">${fiat} ${misDatosDolar.USD}</td>
            <td class="sb">%</td>
          </tr> 
          <tr>
            <td class="sb"><span class="iconify" data-icon="noto-v1:flag-for-flag-united-kingdom" data-width="25" data-height="25"></span>GBP</td>
            <td class="sb"><span class="iconify" data-icon="el:gbp" style="color: #ffd23f;" data-width="19" data-height="19"></span></td>
            <td class="sb"><span class="iconify" data-icon="el:gbp" style="color: #ffd23f;" data-width="19" data-height="19"></span>${misDatosDolar.GBP}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="25" data-height="25"></span>ARS</td>
            <td class="sb">${fiat}</td>
            <td class="sb">${fiat} ${misDatosDolar.ARS}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-brazil" data-width="25" data-height="25"></span>BRL</td>
            <td class="sb"><span class="iconify" data-icon="fa6-solid:brazilian-real-sign" style="color: #ffd23f;" data-width="19" data-height="19"></span></td>
            <td class="sb"><span class="iconify" data-icon="fa6-solid:brazilian-real-sign" style="color: #ffd23f;" data-width="19" data-height="19"></span> ${misDatosDolar.BRL.toFixed(2)}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-chile" data-width="25" data-height="25"></span>CLP</td>
            <td class="sb">${fiat}</td>
            <td class="sb">${fiat} ${misDatosDolar.CLP.toFixed(2)}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-venezuela" data-width="25" data-height="25"></span>VES</td>
            <td class="sb">${fiat}</td>
            <td class="sb">${fiat} ${misDatosDolar.VES}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-uruguay" data-width="25" data-height="25"></span>UYU</td>
            <td class="sb">${fiat}</td>
            <td class="sb">${fiat} ${misDatosDolar.UYU}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-china" data-width="25" data-height="25"></span>CNY</td>
            <td class="sb"><span class="iconify" data-icon="fa:cny" style="color: #ffd23f;" data-width="19" data-height="19"></span></td>
            <td class="sb"><span class="iconify" data-icon="fa:cny" style="color: #ffd23f;" data-width="19" data-height="19"></span> ${misDatosDolar.CNY.toFixed(2)}</td>
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
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_ars.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-brazil" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="fa6-solid:brazilian-real-sign" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_brl.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-chile" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_clp.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-venezuela" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_ves.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-uruguay" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_uyu}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-china" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="bi:currency-yen" style="color: #ffd23f;" data-width="12" data-height="12"></span> ${resultado_cny.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>`)
          } 
                              
          }  
    });
  }
});