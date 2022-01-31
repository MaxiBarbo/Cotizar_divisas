
// Funcion para obtener datos de la Api en solicitada
    $("#usdt").click(function(){

        obtenerDatos();

    });

    $("#euro").click(function(){

        obtenerDatos();

    });

    function division(a,b){
        return a/b;
    } 

    function obtenerDatos(pesosBtc){

    pesosBtc = $("[name*='btc']").val();

    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    const api = new XMLHttpRequest();
    api.open('get', url, true);
    api.send();

    

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            const datos = JSON.parse(this.responseText);
            console.log(datos);

            let resultadoBtc = datos.bpi.USD.rate_float;
            let resultadoDolar = division(pesosBtc,resultadoBtc);

            // let resultadoBtcEuro = datos.bpi.EUR.rate_float;
            // let resultadoEuro = division(pesosBtc,resultadoBtcEuro);
            

            // console.log(resultadoDolar);
            let cotizacionBtc = $(".boxBtc");
            cotizacionBtc.append(`<span>$ ${datos.bpi.USD.rate_float} USD </span>`);

            let resultadoUno = $("#resultadoCripto");
            resultadoUno.append(`<li> ${datos.chartName} |$ ${resultadoDolar}</li>`);

            let resultadoDos = $("#resultadoFecha");
            resultadoDos.append(`<li> Fecha:  ${datos.time.updated}</li>`);
            
            

            // for (const item of datos) {
            //     // console.log(item);

                
            // }
        }
    }
}
