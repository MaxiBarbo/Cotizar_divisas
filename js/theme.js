

// Etiquetas en el DOM a cambiar

let aNav = $("a,h1");
let container = $("body")
let huno = $('h1')


let theme = false;

function changeTheme(){

theme = !theme;
if(theme){

// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "white"
        localStorage.setItem('a','dark')
        
    }

// Cambio fondo Body
    
    
}
else{

// se cambia el color de "a" y "h1"
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].style.color = "#FFD23F"
        localStorage.setItem('a','light')
        
    }
    
}
   

}

function loadPage() {

    // se cambia el color tema Background
    
    //   if (localStorage.getItem('theme')) {
    //     if (localStorage.getItem('theme') === 'light') {
    //       container.style.background = 'red'
    //     } else {
    //       container.style.background = '#2F2F2F'
    //     }
    //   }
    
    // se cambia el color de "a" y "h1"
    
      if (localStorage.getItem('a')) {
    
        if (localStorage.getItem('a') === 'dark') {
    
            for (let i = 0; i < aNav.length; i++) {
    
              aNav[i].style.color = 'white'
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