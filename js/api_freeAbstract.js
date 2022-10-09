
function division(a,b){
    return a/b;
} 
function multi(n1, n2) {
    return n1 * n2;
}

$(function(){

$("#").click(() => { 

  apiDolar('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="20" data-height="20"></span>')
  
});


function apiDolar(fiat){;
    const apiFreeForex = "https://exchange-rates.abstractapi.com/v1/live/?api_key=10fd229e33e0407798e2567379908571&base=USD";

    let pesosDolar = $("[name*='usdArs']").val();  
    let pesosPesos = $("[name*='ArsArs']").val();

    $.get(apiFreeForex, function (respuesta, estado) {
    
        if(estado === "success"){
console.log(respuesta);  

          const misDatosDolar = respuesta.exchange_rates;
          let resultado_euro = multi(misDatosDolar.EUR,pesosDolar)  
          let resultado_gbp = multi(misDatosDolar.GBP,pesosDolar)
          let resultado_ars = multi(misDatosDolar.ARS,pesosDolar)
          let resultado_jpy = multi(misDatosDolar.JPY,pesosDolar)
          let resultado_btc = multi(pesosDolar,misDatosDolar.BTC)
          let resultado_eth = multi(pesosDolar,misDatosDolar.ETH)
        
         
          $("#table").prepend(`                    
          <tr>
            <td class="sb"><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="25" data-height="25"></span>EUR</td>
            <td class="sb"><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="20" data-height="20"></span></td>
            <td class="sb"><span class="iconify" data-icon="el:eur" style="color: #ffd23f;" data-width="20" data-height="20"></span> ${misDatosDolar.EUR}</td>
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
            <td class="sb">${fiat} ${misDatosDolar.ARS.toFixed(2)}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-japan" data-width="25" data-height="25"></span>JPY</td>
            <td class="sb"><span class="iconify" data-icon="bi:currency-yen" style="color: #ffd23f;" data-width="22" data-height="22"></span></td>
            <td class="sb"><span class="iconify" data-icon="bi:currency-yen" style="color: #ffd23f;" data-width="22" data-height="22"></span> ${misDatosDolar.JPY.toFixed(2)}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="ph:currency-btc-light" style="color: #ffd23f;" data-width="25" data-height="25"></span>BTC</td>
            <td class="sb"><span class="iconify" data-icon="ph:currency-btc-bold" style="color: #ffd23f;" data-width="22" data-height="22"></span></td>
            <td class="sb"><span class="iconify" data-icon="ph:currency-btc-bold" style="color: #ffd23f;" data-width="22" data-height="22"></span>${misDatosDolar.BTC}</td>
            <td class="sb">%</td>
          </tr>
          <tr>
            <td class="sb"><span class="iconify" data-icon="ph:currency-eth-light" style="color: #ffd23f;" data-width="25" data-height="25"></span>ETH</td>
            <td class="sb"><span class="iconify" data-icon="ph:currency-eth-bold" style="color: #ffd23f;" data-width="22" data-height="22"></span></td>
            <td class="sb"><span class="iconify" data-icon="ph:currency-eth-bold" style="color: #ffd23f;" data-width="22" data-height="22"></span>${misDatosDolar.ETH}</td>
            <td class="sb">%</td>
          </tr>`)

          if (pesosDolar !==''){

            $(".tableTwo").prepend(`                    
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="twemoji:flag-for-flag-european-union" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultado_euro.toFixed(1)}</td>
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
                                    <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-japan" data-width="20" data-height="20"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="bi:currency-yen" style="color: #ffd23f;" data-width="12" data-height="12"></span> ${resultado_jpy.toFixed(1)}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                    <tr>
                                    <td class="sb"></td>
                                    <td class="sb"><span class="iconify" data-icon="ph:currency-btc-fill" style="color: #ffd23f;" data-width="18" data-height="18"></span></td>
                                    <td class="sb">$</td>
                                    <td class="sb"><span class="iconify" data-icon="ph:currency-btc-bold" style="color: #ffd23f;" data-width="12" data-height="12"></span>${resultado_btc}</td>
                                    <td class="sb">%</td>
                                    </tr>
                                        `)
          } 
                              
          }  
    });
  }
});