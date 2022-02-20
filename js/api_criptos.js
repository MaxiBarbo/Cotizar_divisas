// Funcion y acceso Api BTC / ETH en ARS Url de cripto ya
$("#btcArs").click(function(){

    obtenerDatos('btc','Bitcoin','bitex','Bitcoin','ars','<span class="iconify" data-icon="cib:btc" style="color: #ffd23f;" data-width="14" data-height="14"></span>');
});

$("#ethArs").click(function(){

    obtenerDatos('eth','Ethereum','bitex','Ethereum','ars','<span class="iconify" data-icon="cib:ethereum" style="color: #ffd23f;" data-width="15" data-height="15"></span>');
});

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
            let datoApi = datos.ask;

console.log(cripto);
       
            $("#tableTwo").prepend(`
                <tr>
                <th class="sb" scope="row">${icono}</th>
                <th class="sb" scope="row">${titulo}</th>
                <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${datoApi.toFixed(1)}</td>
                <td class="sb">% </td>
                </tr> `)

                if ( pesosBtc !== ''){  
                    $("#table").prepend(`                    
                        <tr>
                        <th class="sb" scope="row">${icono}</th>
                        <th class="sb" scope="row">${cripto}</th>
                        <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultadoPeso}</td>
                        <td class="sb">% </td>
                        </tr> `)
                    } 
                              
                }
            }
        }

//Solicitud Datos precio de Cripto a Url de Binance en USD
        
$("#mana").click(() => {

    obtenerDatosApiBinance('MANA','902','<span class="iconify" data-icon="cryptocurrency:mana" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#sand").click(() => {

    obtenerDatosApiBinance('SAND','942','<span class="iconify" data-icon="cryptocurrency:sand" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#usdt").click(() => {

    obtenerDatosApiBinance('Bitcoin','11','<span class="iconify" data-icon="cryptocurrency:btc" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#eth").click(() => {

    obtenerDatosApiBinance('Ethereum','12','<span class="iconify" data-icon="cib:ethereum" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#bnb").click(() => {

    obtenerDatosApiBinance('BNB','98','<span class="iconify" data-icon="cryptocurrency:bnb" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#xrp").click(() => {

    obtenerDatosApiBinance('XRP','306','<span class="iconify" data-icon="cryptocurrency:xrp" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

function obtenerDatosApiBinance(simbolo,precio,icono){;

const URLGET = "https://api.binance.com/api/v1/ticker/24hr";

let valorInput = $("[name*='btc']").val();

    $.get(URLGET,function (respuesta,estado){

        if (estado == "success"){

            let dato = (respuesta[precio]);
            let resultadoMana = division(valorInput,dato.askPrice)
            let datoApi = dato.askPrice;
            
 console.log(datoApi);           
    
            $("#tableTwo").prepend(`
            <tr>
            <th class="sb" scope="row">${icono}</th>
            <th class="sb" scope="row">${simbolo}</th>
            <td class="sb"><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${datoApi.substr(0,6)}</td>
            <td class="sb">% ${dato.priceChangePercent}</td>
            </tr> `)

            if(valorInput !==''){
                $("#table").prepend(`                    
                    <tr>
                    <th class="sb" scope="row">${icono}</th>
                    <th class="sb" scope="row">${simbolo}</th>
                    <td class="sb"></span> ${resultadoMana.toFixed(8)}</td>
                    <td class="sb">% ${dato.priceChangePercent}</td>
                    </tr> `)
            }
        }  
    })
}