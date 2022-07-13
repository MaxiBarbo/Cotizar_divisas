

// Etiquetas en el DOM a cambiar

let aNav = $(".iconosFooter,a,h1,h4");
let body = $("#bodySecudanrio");
let btnDivisas = $('#dolar,#eur,#usdEuro,#ls');
let btnCripto = $('#usdt,#eth,#btcArs,#ethArs,#bnb,#xrp,#sand,#mana,#lStorage')



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
    
    btnDivisas.toggleClass('btn-outline-warning')
    btnCripto.toggleClass('btn-outline-danger')

    localStorage.setItem('btnCripto','dark')
    localStorage.setItem('btnDivisas','dark')

    
}

else{

    btnDivisas.removeClass('btn-outline-warning')
    btnCripto.removeClass('btn-outline-danger')

    localStorage.setItem('btnDivisas','light')
    localStorage.setItem('btnCripto','light')

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

    // // Cambio de clases en buttons de Criptomonedas   
    //   if (localStorage.getItem('btnCripto')){

    //     if (localStorage.getItem('btnCripto') === 'dark'){
    //         btnCripto.toggleClass('btn-outline-danger')
    //       }
    //       else{
    //         btnCripto.removeClass('btn-outline-danger')
    //       }
    //   }
    // // Cambio de clases en btn Divisas almacenadas en localStorage
    //   if (localStorage.getItem('btnDivisas')){

    //     if (localStorage.getItem('btnDivisas') === 'dark'){
    //         btnDivisas.toggleClass('btn-outline-warning')
    //     }
    //     else{
    //         btnDivisas.removeClass('btn-outline-warning')
    //     }
    //   }
    }

function deleteUser() {
    localStorage.clear()
}   