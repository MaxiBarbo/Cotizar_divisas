function ShowSelected()
{
/* Para obtener el valor */
var cod = document.getElementById("producto").value;
console.log(cod);
 
/* Para obtener el texto */
var combo = document.getElementById("producto");
var selected = combo.options[combo.selectedIndex].text;
console.log(selected);
}


// Nos llevamos esto arriba del todo para reutiliarlo
let inputs = document.querySelectorAll(".valor");

let url = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY';
fetch(url)
  .then(r => r.json())
  .then(data => {
    document.querySelector('#USD')
      .dataset.cambio = data.rates.USD;
    document.querySelector('#GBP')
      .dataset.cambio = data.rates.GBP;  
    document.querySelector('#JPY')
      .dataset.cambio = data.rates.JPY;

    // Recorremos y establecemos los valores aquí en lugar de abajo
    inputs.forEach(input => {
      input.value = input.dataset.cambio;
    });
  })
  .catch(error => console.error(error))