
class User {
  constructor(nombre,mail,pass){
   this.nombre = nombre;
   this.mail = mail;
   this.pass = pass;

  }
}

$(function(){

// clave almacenada en const
const clave_localStorage = "dataArr"

let datosObservacion = [];

console.log(datosObservacion);

$("#formOne").submit(function(event){
    event.preventDefault();

// inputs Index LOgin -     
    nombre = $(this).find('#nombre').val();
    mail = $(this).find('#mail').val();
    pass = $(this).find('#pass').val();
   
    let ingresok = confirmar_datos(nombre,mail,pass);

        if (ingresok === ""){

            datosObservacion.push(new User(nombre,mail,pass));
            guardar_user(datosObservacion);

        }else{
        
            alert("Favor Ingresa todos los datos con *")
        }
});

// Funcion para guardar datos de entrada en inputs al local Storage

function guardar_user(datosObservacion){

    let dato = localStorage.getItem(clave_localStorage);

        if (dato){

            let dato_guardado = JSON.parse(localStorage.getItem(clave_localStorage));
                dato_guardado.push(datosObservacion);
            
            let dato_string = JSON.stringify(dato_guardado);
                localStorage.setItem(clave_localStorage, dato_string);    
    }
        else {

            let dato_guardado = new Array();
                dato_guardado.push(datosObservacion)

            let dato_string = JSON.stringify(dato_guardado);
                localStorage.setItem(clave_localStorage,dato_string);    
    }
}

// Funcion para confiramr si se ingresaron datos en inputs de entrada

function confirmar_datos(nombre,mail,pass){

    let check = "";
    
    if ( (nombre !=="") && (mail !=="") && (pass !=="")){
   
        alert("Muchas gracias :)")         
}
    else {

        check = "Favor de ingresar todos los datos con * :("
        }
            return check;
    }
});