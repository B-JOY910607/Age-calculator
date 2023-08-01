const boton = document.querySelector('.btn');
const yearInput = document.querySelector('.year-input');
const yearResult= document.querySelector('.year-result');
const monthInput = document.querySelector('.month-input')
const monthResult = document.querySelector('.month-result')
const dayInput = document.querySelector('.day-input')
const dayResult = document.querySelector('.days-result')
const fecha = new Date();
const año = fecha.getFullYear();
const mes = fecha.getMonth();
const dia = fecha.getDate();
const form = document.querySelectorAll('.date-input')

function obtenerCantidadDias(mes, año) {
    const fecha = new Date(año, mes, 0);
     return fecha.getDate();

     
  }
  


boton.addEventListener('click', ()=>{
    

     if(dayInput.value === '' || monthInput.value === '' || yearInput.value === ''){
            alert('You must fill blank inputs')
            
            preventDefault()
            
        }
    if ( dayInput.value < 1 || dayInput.value > 31){

        alert('Por favor introduzca un dia valido')
        preventDefault()

    }

    if(dayInput.value > obtenerCantidadDias(monthInput.value, año)){
        alert('Este mes solo tiene ' + obtenerCantidadDias(monthInput.value, año) + ' ' + 'dias');
        preventDefault()
    }

    if(monthInput.value < 1 || monthInput.value >12){
        alert('El valor introducido para referirse a los meses debe estar entre 1 y 12'),
        preventDefault()
    }

    if(yearInput.value > año){
       alert( 'No puede introducir una fecha en el futuro')
        preventDefault()
    }

    
    

    var yearOperation  = año - yearInput.value;
    yearResult.textContent = yearOperation;

    if(monthInput.value> mes){
        var monthOperation = 12 + mes -monthInput.value  ;
     monthResult.textContent = Math.abs(monthOperation);
    }
    else{
        var monthOperation = mes - monthInput.value   ;
        monthResult.textContent = Math.abs(monthOperation);
    }

    if(dayInput.value>dia){

       dayResult.textContent =  dia + obtenerCantidadDias(mes, año) - dayInput.value
    }

    else{
        dayResult.textContent = dia - dayInput.value
    }


})

                           


   
  
   