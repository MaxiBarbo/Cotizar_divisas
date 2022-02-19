
const URLGET = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost =  { nombre: "Ana", profesion: "Programadora" }
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn2">POST</button>');
//Escuchamos el evento click del botón agregado
$("#btn2").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
      console.log(respuesta);
        if(estado === "success"){
            $("body").prepend(`<div>
Guardado:${respuesta.nombre}
</div>`);
        }  
    });
});

let contenido = document.getElementById('contenido');

function obtener (){

    fetch('../json/examples.json')

    .then(res => res.json() )
    .then (datos => {

        tabla(datos);

        // console.log(datos)
    })
}

function tabla(datos){ 

console.log(datos);

    contenido.innerHTML = ' ';

        for (const index of datos.title) {
            console.log(index)
              
        }

    contenido.innerHTML += 
    ` <tr>
        <th scope="row">1</th>
        <td>${datos}</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>`;

}