

// Etiquetas en el DOM a cambiar

let aNav = $(".iconosFooter,a,h4");
let body = $("#bodySecudanrio");
let btnDivisas = $('#dolar,#eur,#usdEuro,#ls');
let btnCripto = $('#usdt,#eth,#btcArs,#ethArs,#bnb,#xrp,#sand,#mana,#lStorage')
let btnForex = $('#newEuro')
let h3 = $('h3,h1,th,p')


let theme = false;

function changeTheme(){

theme = !theme;
if(theme){

    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = 'silver'
        localStorage.setItem('h3','dark')
    }

// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "silver"
        localStorage.setItem('a','dark')
        
    }

// Cambio fondo Body en subcarpeta
    for (let i = 0; i < body.length; i++) {
        body[i].style.backgroundImage = "url('../Imagenes/fonfo-game27.png')";
        localStorage.setItem('body','dark')
        
    }     
    
    

    btnDivisas.toggleClass('btn-outline-warning')
    btnCripto.removeClass('btn-outline-dark')
    btnForex.toggleClass('btn-outline-primary')

    localStorage.setItem('btnCripto','dark')
    localStorage.setItem('btnDivisas','dark')
    // localStorage.setItem('tableletter','dark')

}

else{

    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = 'black'
        localStorage.setItem('h3','light')
    }

    btnDivisas.removeClass('btn-outline-warning')
    btnCripto.toggleClass('btn-outline-dark')

    localStorage.setItem('btnDivisas','light')
    localStorage.setItem('btnCripto','light')
    

// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "silver"
        localStorage.setItem('a','light')
    }

// Cambio fondo Body en subcarpeta
    for (let i = 0; i < body.length; i++) {
        body[i].style.backgroundImage = "url('../Imagenes/body-f9.jpg')";
        localStorage.setItem('body','light')   
    }  
  }   
}

function loadPage() {

    if (localStorage.getItem('h3')){
        if (localStorage.getItem('h3') === 'light'){
            for (let i = 0; i < h3.length; i++) {
                h3[i].style.color = 'black'
                
            }
        }
    }

    // se cambia el color tema Background en LocalStorade al iniciar pagina
    
    if (localStorage.getItem('body')){

        if (localStorage.getItem('body') === 'dark'){
            for (let i = 0; i < body.length; i++) {
                body[i].style.backgroundImage = "url('../Imagenes/fonfo-game27.png')";
                
            }  
        }
        else{
            

            for (let i = 0; i < body.length; i++) {
                body[i].style.backgroundImage = "url('../Imagenes/body-f9.jpg')";
                
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
            aNav[i].style.color = 'silver'
    
            }
        }
      }

    }

function deleteUser() {
    localStorage.clear()
}   

