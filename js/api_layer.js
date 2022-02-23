
function division(a,b){
    return a/b;
} 
function multi(n1, n2) {
    return n1 * n2;
}

$(function(){

$("#newEuro").click(() => { 

  apiDolar()
  
});


function apiDolar(){;
    const urlFixer = 'http://data.fixer.io/api/latest?access_key=3ccedb265dbf15a3f8ae9bcccb7c5ab3';
    let pesosDolar = $("[name*='usdArs']").val();  
    let pesosPesos = $("[name*='ArsArs']").val();

    $.get(urlFixer, function (respuesta, estado) {
    
        if(estado === "success"){
              
          const misDatosDolar = respuesta.rates;
          let resultado_usd = multi(misDatosDolar.USD,pesosDolar)  
          let resultado_gbp = multi(misDatosDolar.GBP,pesosDolar)

          console.log(misDatosDolar);
          
          $("#table").prepend(`                    
          <tr>
            <td class="sb"><span class="iconify" data-icon="emojione-v1:flag-for-united-states" data-width="25" data-height="25"></span></td>
            <td class="sb">$</td>
            <td class="sb">${misDatosDolar.USD}</td>
            <td class="sb">$</td>
          </tr> 
            <tr>
            <td class="sb"><span class="iconify" data-icon="noto-v1:flag-for-flag-united-kingdom" data-width="25" data-height="25"></span></td>
            <td class="sb">$</td>
            <td class="sb">${misDatosDolar.GBP}</td>
            <td class="sb">$</td>
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
                                    </tr>`)
          } 
                              
          }  
    });
  }
});