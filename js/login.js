
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

let datosLogin = [];

console.log(datosLogin);

$("#formOne").submit(function(event){
    event.preventDefault();

// inputs Index LOgin -     
    nombre = $(this).find('#nombre').val();
    mail = $(this).find('#mail').val();
    pass = $(this).find('#pass').val();
   
    let ingresok = confirmar_datos(nombre,mail,pass);

        if (ingresok === ""){

            datosLogin.push(new User(nombre,mail,pass));
            guardar_user(datosLogin);

        }else{
        
            alert("Favor Ingresa todos los datos con *")
        }
});

// Funcion para guardar datos de entrada en inputs al local Storage

function guardar_user(datosLogin){

    let dato = localStorage.getItem(clave_localStorage);

        if (dato){

            let dato_guardado = JSON.parse(localStorage.getItem(clave_localStorage));
                dato_guardado.push(datosLogin);
            
            let dato_string = JSON.stringify(dato_guardado);
                localStorage.setItem(clave_localStorage, dato_string);    
    }
        else {

            let dato_guardado = new Array();
                dato_guardado.push(datosLogin)

            let dato_string = JSON.stringify(dato_guardado);
                localStorage.setItem(clave_localStorage,dato_string);    
    }
}

// Funcion para confirmar  si se ingresaron datos en inputs de entrada

icoName = document.querySelector('#icoName')
icoMail = document.querySelector('#icoMail')
icoPass = document.querySelector('#icoPass')

function confirmar_datos(nombre,mail,pass){

    let check = "";
    
    if ( (nombre !=="") && (mail !=="") && (pass !=="")){
   
        alert("Muchas gracias :)")         
}
    else {
        
        if(nombre === ""){
            icoName.style.color = '#ff4965'
        }
        else{
            icoName.style.color = '#0e6330'  
        }
        if(mail === ""){
            icoMail.style.color = '#ff4965'
        }
        else{
            icoMail.style.color = '#0e6330' 
        }
        if (pass === ""){
            icoPass.style.color = '#ff4965'
        }
        else{
            icoPass.style.color = '#0e6330' 
        }
        check = "Favor de ingresar todos los datos con * :("
        }
            return check;
    }
});
