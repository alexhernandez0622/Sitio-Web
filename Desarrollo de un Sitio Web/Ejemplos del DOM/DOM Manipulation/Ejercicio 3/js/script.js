//Obtenemos referencias a los elementos del DOM
const input = document.getElementById('myInput');
const list = document.getElementById('myList');

//Vamos agregar un event listener al campo de entrada para detectar la tecla "Enter"

//El keyup se usa para dar enter al presionar para ingresar el contenido

input.addEventListener("keyup", function(event){
    //Aquí estamos definiendo el evento que va a recibir, que es la tecla enter

    //el input.value !=='' verifica si el valor del elemento no esta vacío, si esta diligenciado, se toma si no, no capturará nada
    if(event.key === 'Enter' && input.value !==''){

        //Crearemos un nuevo elemento de lista y lo agregaremos a la lista desordenada

        //Los document.createElement se pueden usar para variables constantes o let
        const newItem = document.createElement('li');

        //Insertaremos el contenido al html
        newItem.textContent = input.value;

        //Agregamos el contenido a la etiqueta ul, ubicandolos una por debajo de la otra
        list.appendChild(newItem);

        //Limpiaremos el campo de entrada
        input.value = '';

    }
})