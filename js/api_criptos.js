// Funcion y acceso Api BTC / ETH
$("#btcArs").click(function(){

    obtenerDatos('btc','1 Bitcoin','bitex','Bitcoin','ars','<span class="iconify" data-icon="cib:btc" style="color: #ffd23f;" data-width="14" data-height="14"></span>');

});

$("#ethArs").click(function(){

    obtenerDatos('eth','1 Ethereum','bitex','Ethereum','ars','<span class="iconify" data-icon="cib:ethereum" style="color: #ffd23f;" data-width="15" data-height="15"></span>');

});

$("#usdt").click(function(){

    obtenerDatos('btc','1 Bitcoin','bitex','Bitcoin','usd','<span class="iconify" data-icon="cib:btc" style="color: #ffd23f;" data-width="14" data-height="14"></span>');

});

$("#eth").click(function(){

    obtenerDatos('eth','1 Ethereum','bitex','Ethereum','usd','<span class="iconify" data-icon="cib:ethereum" style="color: #ffd23f;" data-width="15" data-height="15"></span>');

});



// $("#bnb").click(function(){

//     obtenerDatos('eos','1 BNB','letsbit','BNB','usd','<span class="iconify" data-icon="cib:ethereum" style="color: #ffd23f;" data-width="15" data-height="15"></span>');

// });


function division(a,b){
    return a/b;
} 
function multi(n1, n2) {
    return n1 * n2;
}

// Funcion para convertir USD / BTC

function obtenerDatos(coin,titulo,exchange,cripto,fiat,icono){


    const urlArgenBtc = `https://criptoya.com/api/${exchange}/${coin}/${fiat}/0.1`;

    const api = new XMLHttpRequest();
    api.open('get', urlArgenBtc, true);
    api.send();

    let pesosBtc = $("[name*='btc']").val();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            const datos = JSON.parse(this.responseText);
            // console.log(datos);

            let resultadoBtc = parseFloat(datos.ask);
            let resultadoPeso = division(pesosBtc,resultadoBtc);
              
            let cotizacionBtc = $(".boxBtc");
            cotizacionBtc.append(`<span class="sb">${titulo} ${icono}</span>
                                  <span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${datos.ask}</span>`);

            let resultadoUno = $("#resultadoCripto");
            resultadoUno.append(`<span class="sb">Cantidad convertida:</span>
                                <li> ${cripto} | ${icono} ${resultadoPeso}</li>`);

          
        }
    }
}

//Funcion para consultar api satoshi tango cripto XRP


const urlCriptoYa = `https://criptoya.com/api/satoshitango/xrp/ars`;


$("#xrp").click(() => { 

    let pesosXrp = $("[name*='btc']").val();  

    $.getJSON(urlCriptoYa, function (respuesta, estado) {
    
        if(estado === "success"){
            

            let xrp = respuesta.totalAsk;

            let resultadoXrp = parseFloat(respuesta.totalAsk);
            let resultadoPesoXrp = division(pesosXrp,resultadoXrp);

            let cotizacionXrp = $(".boxBtc");
            cotizacionXrp.append(`<span class="sb">1 XRP <span class="iconify" data-icon="cryptocurrency:xrp" style="color: #ffd23f;" data-width="14" data-height="14"></span> </span>
                                  <span><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${xrp}</span>`);

            let resultadoUnoXrp = $("#resultadoCripto");
            resultadoUnoXrp.append(`<span class="sb">Cantidad convertida:</span>
                                <li> XRP | <span class="iconify" data-icon="cryptocurrency:xrp" style="color: #ffd23f;" data-width="14" data-height="14"></span> ${resultadoPesoXrp}</li>`);



            // console.log(xrp);
        }
    })
});