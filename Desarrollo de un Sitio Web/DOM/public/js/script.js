//Inicialización de la función agregar
function agregarElemento() 
{
    //Obtenemos las referencias de los datos del HTML
    let nuevoElemento = document.getElementById("nuevoElemento").value;
    let lista = document.getElementById("lista");

    //Inicializar la lista ordenada
    let nuevoItem = document.createElement("li");

    //Mandaremos el dato que se ingrese, para que se guarde y se visualice en el HTML
    nuevoItem.textContent = nuevoElemento;

    //Insertaremos los datos a la lista
    lista.appendChild(nuevoItem);

    //Limpiaremos el campo de entrada, después de haberse ingresado
    document.getElementById("nuevoElemento").value= "";
}

function eliminarElemento() {
    // Obtenemos la referencia de la lista donde están los datos guardados
    let lista = document.getElementById("lista");

    //Eliminaremos los datos de la lista
    //El lastChild nos ayud a eliminar el ultimo dato que se inserto
    lista.removeChild(lista.lastChild);
}
