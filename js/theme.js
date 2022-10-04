

// Etiquetas en el DOM a cambiar

let aNav = $(".iconosFooter,a,h4");
let body = $("#bodySecudanrio");
let btnDivisas = $('#dolar,#eur,#usdEuro,#ls');
let btnCripto = $('#usdt,#eth,#btcArs,#ethArs,#bnb,#xrp,#sand,#mana,#lStorage,#dolar,#eur,#usdEuro,#newEuro,#dolarTurista,#dolarccl')
let btnForex = $('#newEuro')
let h3 = $('h3,h1,th,p')
let menuDrop = document.querySelector('.dropdown')
let opcionTitle = document.querySelector('.title')
let optionSubTitle = document.querySelector('.menu')
let itemResult = document.querySelector('#result')

console.log(optionSubTitle)

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
    
    itemResult.style.color = 'white'
    optionSubTitle.style.color = 'white'
    menuDrop.style.border = '1px solid white'
    opcionTitle.style.color = 'white'
    btnCripto.removeClass('btn-outline-dark')
    btnForex.toggleClass('btn-outline-primary')

    localStorage.setItem('btnCripto','dark')
    localStorage.setItem('btnDivisas','dark')
    localStorage.setItem('menuDrop','dark')
    localStorage.setItem('opcionTitle','dark')
    localStorage.setItem('optionSubTitle','dark')
    localStorage.setItem('itemResult','dark')
}
else{

    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = 'black'
        localStorage.setItem('h3','light')
    }

    itemResult.style.color = 'black'
    menuDrop.style.border = '1px solid black'
    optionSubTitle.style.color = 'black'
    opcionTitle.style.color = 'black'
    btnCripto.toggleClass('btn-outline-dark')

    localStorage.setItem('btnDivisas','light')
    localStorage.setItem('btnCripto','light')
    localStorage.setItem('menuDrop','light')
    localStorage.setItem('opcionTitle','light')
    localStorage.setItem('optionSubTitle','light')
    localStorage.setItem('itemResult','light')
    
// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "black"
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

// al iniciar la app agrega estilo white en Texto opcion elegida en "Option Cripto"
    if (localStorage.getItem('itemResult')){
        if (localStorage.getItem('itemResult') === 'light'){
            itemResult.style.color = 'white'   
        }
        else{
            itemResult.style.border = 'black'
        }
    }
// al iniciar la app agrega estilo white en Borde opcion elegida en "Option Cripto"
    if (localStorage.getItem('menuDrop')){
        if (localStorage.getItem('menuDrop') === 'light'){
            menuDrop.style.border = '1px solid black'
        }
        else{
            menuDrop.style.border = '1px solid white'
        }
    }
// al iniciar la app agrega estilo white en Texto Titulo "option Cripto"
    if(localStorage.getItem('opcionTitle')){
        if(localStorage.getItem('opcionTitle') === 'light'){
            opcionTitle.style.color = 'black'
        }
        else{
            opcionTitle.style.color = 'white'
        }
    }
// al iniciar la app agrega estilo white en Texto Titulo "Resultado print pantalla"
    if(localStorage.getItem('optionSubTitle')){
        if (localStorage.getItem('optionSubTitle') === 'light'){
            optionSubTitle.style.color = 'black'
        }
        else{
            optionSubTitle.style.color = 'white'
        }
    }
    
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

