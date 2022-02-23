
// FUncion para ingresar en Api con Key
  
$("#usdEuro").click(() => {
    datosApiDivisas('<span class="iconify" data-icon="emojione-v1:flag-for-united-states" style="color: #ffd23f;" data-width="30" data-height="30"></span>','<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="20" data-height="20"></span>')
    
});

//api www.freeCurrency.com
  // const apiKey = "8a132e310-9324-11ec-9a68-75030c11c4ff";
  // const urltrendingFree = 'https://freecurrencyapi.net/api/v2/latest?apikey=a132e310-9324-11ec-9a68-75030c11c4ff';
  // api de www.Fixer.com
//   const urltrendingFixer = 'http://data.fixer.io/api/latest?access_key=3ccedb265dbf15a3f8ae9bcccb7c5ab3'; 
//   const urlCurr = 'https://free.currconv.com/api/v7/currencies?apiKey=ebf2143557128efbca59'
//   const urlcurrJson = 'https://free.currconv.com/api/v7/convert?q=USD_EUR,EUR_USD&compact=ultra&callback=sampleCallback&apiKey=ebf2143557128efbca59'

  endpoint = 'latest'
  acces_key = '3ccedb265dbf15a3f8ae9bcccb7c5ab3';

function datosApiDivisas(flag,fiat){   

  let dolar = $("[name*='usdArs']").val();

        $.getJSON({
          method: "GET",
          url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + acces_key,
          dataType: 'jsonp',
          success: function (respuesta) {
           
console.log(respuesta);

              let usd_euro = respuesta.rates.USD
              let euro_gbp = respuesta.rates.GBP
              let euro_ars = respuesta.rates.ARS
              
              let resultado_usd = multi(dolar,usd_euro)
              let resultado_gbp = multi(dolar,euro_gbp)
              let resultado_ars = multi(dolar,euro_ars)
console.log(respuesta.rates);  

            $("#table").prepend(`                    
              <tr>
                <td class="sb">${flag}</td>
                <td class="sb">$</td>
                <td class="sb">${fiat}${usd_euro}</td>
                <td class="sb">%</td>
              </tr>
              <tr>
                <td class="sb"><span class="iconify" data-icon="noto-v1:flag-for-flag-united-kingdom" style="color: silver;" data-width="30" data-height="30"></span></td>
                <td class="sb">$</td>
                <td class="sb"><span class="iconify" data-icon="el:gbp" style="color: #ffd23f;" data-width="19" data-height="19"></span>${euro_gbp}</td>
                <td class="sb">%</td>
              </tr> 
              <tr>
                <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" style="color: silver;" data-width="30" data-height="30"></span></td>
                <td class="sb">$</td>
                <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="20" data-height="20"></span>${euro_ars}</td>
                <td class="sb">%</td>
              </tr>`)

              if(dolar !==''){

                $(".tableTwo").prepend(`                    
                                        <tr>
                                        <td class="sb"></td>
                                        <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" style="color: #ffd23f;" data-width="15" data-height="15"></span></td>
                                        <td class="sb">$</td>
                                        <td class="sb">$ ${resultado_usd.toFixed(1)}</td>
                                        <td class="sb">%</td>
                                        </tr> 
                                        <tr>
                                        <td class="sb"></td>
                                        <td class="sb"><span class="iconify" data-icon="noto-v1:flag-for-flag-united-kingdom" style="color: #ffd23f;" data-width="15" data-height="15"></span></td>
                                        <td class="sb">$</td>
                                        <td class="sb">$ ${resultado_gbp.toFixed(1)}</td>
                                        <td class="sb">%</td>
                                        </tr>
                                        <td class="sb"></td>
                                        <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-argentina" style="color: #ffd23f;" data-width="15" data-height="15"></span></td>
                                        <td class="sb">$</td>
                                        <td class="sb">$ ${resultado_ars.toFixed(1)}</td>
                                        <td class="sb">%</td>
                                        </tr>`)
              }
          }  
         
      });
    }

