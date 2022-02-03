

// Etiquetas en el DOM a cambiar

let aNav = $("a,h1");
let body = $("#bodySecudanrio");
let huno = $('h1');


let theme = false;

function changeTheme(){

theme = !theme;
if(theme){

// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "white"
        localStorage.setItem('a','dark')
        
    }

// Cambio fondo Body en subcarpeta
    for (let i = 0; i < body.length; i++) {
        body[i].style.backgroundImage = "url('../Imagenes/fonfo-game18.jpg')";
        localStorage.setItem('body','dark')
        
    }        
}

else{

// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "#FFD23F"
        localStorage.setItem('a','light')
        
    }
// Cambio fondo Body en subcarpeta
    for (let i = 0; i < body.length; i++) {
        body[i].style.backgroundImage = "url('../Imagenes/fonfo-game20.jpg')";
        localStorage.setItem('body','light')
        
    }  
  }   
}

function loadPage() {

    // se cambia el color tema Background en LocalStorade al iniciar pagina
    
    if (localStorage.getItem('body')){

        if (localStorage.getItem('body') === 'dark'){
            for (let i = 0; i < body.length; i++) {
                body[i].style.backgroundImage = "url('../Imagenes/fonfo-game18.jpg')";
                
            }  
        }
        else{

            for (let i = 0; i < body.length; i++) {
                body[i].style.backgroundImage = "url('../Imagenes/fonfo-game20.jpg')";
                
            }
        }
    }
    
    // se cambia el color de "a" y "h1"
    
      if (localStorage.getItem('a')) {
    
        if (localStorage.getItem('a') === 'dark') {
    
            for (let i = 0; i < aNav.length; i++) {
    
              aNav[i].style.color = 'white';
        }
          } 
        
        else {

    // se cambia el color de "a" y "h1"
            for (let i = 0; i < aNav.length; i++) {
            aNav[i].style.color = '#FFD23F'
    
            }
        }
      }
    }
function deleteUser() {
    localStorage.clear()
}   