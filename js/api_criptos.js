

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
                <th >${icono}</th>
                <th >${titulo}</th>
                <th ><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${datoApi.toFixed(1)}</th>
                <th >% </th>
                </tr> `)

                if ( pesosBtc !== ''){  
                    $("#table").prepend(`                    
                        <tr>
                        <th >${icono}</th>
                        <th >${cripto}</th>
                        <th ><span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span> ${resultadoPeso.toFixed(11)}</th>
                        <th >% </th>
                        </tr> `)
                    } 
                              
                }
            }
        }

//Solicitud Datos precio de Cripto a Url de Binance en USD
        
$("#mana").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','902','<span class="iconify" data-icon="cryptocurrency:mana" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#sand").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','942','<span class="iconify" data-icon="cryptocurrency:sand" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#usdt").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','11','<span class="iconify" data-icon="cryptocurrency:btc" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#eth").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','12','<span class="iconify" data-icon="cib:ethereum" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#bnb").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','98','<span class="iconify" data-icon="cryptocurrency:bnb" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#xrp").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','958','<span class="iconify" data-icon="cryptocurrency:xrp" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#option1").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','557','<span class="iconify" data-icon="cryptocurrency:xrp" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#option2").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','200','<span class="iconify" data-icon="cryptocurrency:xrp" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

$("#option3").click(() => {

    obtenerDatosApiBinance('<span class="iconify" data-icon="el:usd" style="color: #ffd23f;" data-width="10" data-height="10"></span>','422','<span class="iconify" data-icon="cryptocurrency:xrp" style="color: #ffd23f;" data-width="14" data-height="14"></span>')
});

function obtenerDatosApiBinance(simbolo,precio,icono){;

const URLGET = "https://api.binance.com/api/v1/ticker/24hr";

let valorInput = $("[name*='btc']").val();
let resultText = document.getElementById('result')

    $.get(URLGET,function (respuesta,estado){

        if (estado == "success"){

            let dato = (respuesta[precio]);
            let resultadoPrice = division(valorInput,dato.askPrice)
            let criptoName = dato.symbol;
            let datoPrice = parseFloat(dato.askPrice);
            let percentPrice = dato.priceChangePercent
            
 console.log(resultText)   

    
            let tableBody = document.getElementById('tableTwo');
            let nameCripto = `<td>${icono}</td>`;
            let simb = `<td>${criptoName}</td>`;  
            let valor = `<td>${simbolo}${datoPrice.toFixed(0)}</td>`;
            let pricePercent = `<td>${percentPrice} %</td>`;

            tableBody.innerHTML += `<tr>${ nameCripto + simb + valor + pricePercent}</tr>`;
            resultText.innerHTML += `<span>%</span>`;

console.log(respuesta);  

            if(valorInput !==''){
                $("#table").prepend(`                    
                    <tr>
                        <th >${icono}</th>
                        <th >${simbolo}</th>
                        <th ></span> ${parseFloat(resultadoPrice.toFixed(4,4))}</th>
                        <th >% ${dato.priceChangePercent}</th>
                    </tr> `)
            }
        }  
    })
}