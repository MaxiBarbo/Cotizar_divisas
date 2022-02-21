

// Etiquetas en el DOM a cambiar

let aNav = $(".iconosFooter,a,h1,h4");
let body = $("#bodySecudanrio");



let theme = false;

function changeTheme(){

theme = !theme;
if(theme){

// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "silver"
        localStorage.setItem('a','dark')
        
    }

// Cambio fondo Body en subcarpeta
    for (let i = 0; i < body.length; i++) {
        body[i].style.backgroundImage = "url('../Imagenes/fonfo-game34.png')";
        localStorage.setItem('body','dark')
        
    }        
}

else{

// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "#F79824"
        localStorage.setItem('a','light')
        
    }
// Cambio fondo Body en subcarpeta
    for (let i = 0; i < body.length; i++) {
        body[i].style.backgroundImage = "url('../Imagenes/fonfo-game32.webp')";
        localStorage.setItem('body','light')
        
    }  
  }   
}

function loadPage() {

    // se cambia el color tema Background en LocalStorade al iniciar pagina
    
    if (localStorage.getItem('body')){

        if (localStorage.getItem('body') === 'dark'){
            for (let i = 0; i < body.length; i++) {
                body[i].style.backgroundImage = "url('../Imagenes/fonfo-game34.png')";
                
            }  
        }
        else{

            for (let i = 0; i < body.length; i++) {
                body[i].style.backgroundImage = "url('../Imagenes/fonfo-game32.webp')";
                
            }
        }
    }
    
    // se cambia el color de "a" y "h1"
    
      if (localStorage.getItem('a')) {
    
        if (localStorage.getItem('a') === 'dark') {
    
            for (let i = 0; i < aNav.length; i++) {
    
              aNav[i].style.color = 'silver';
        }
          } 
        
        else {

    // se cambia el color de "a" y "h1"
            for (let i = 0; i < aNav.length; i++) {
            aNav[i].style.color = '#F79824'
    
            }
        }
      }
    }
function deleteUser() {
    localStorage.clear()
}   