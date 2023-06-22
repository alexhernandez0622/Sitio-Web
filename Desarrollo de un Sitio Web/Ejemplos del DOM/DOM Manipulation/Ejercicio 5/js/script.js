//Inicializar la función agregar
function agregarElemento() {
    //Obtenemos las referencias de los datos del HTML
    let nuevoElemento = document.getElementById("nuevoElemento").value;
    let lista = document.getElementById("lista");
    //Inicializaremos la lista ordenada
    let nuevoItem = document.createElement("li");
    // Mandaremos el dato que se ingrese , para que se guarde y se visualice en el HTML
    nuevoItem.textContent = nuevoElemento;
    //Insertaremos los datos a la lista
    lista.appendChild(nuevoItem);
    //Limpiaremos el campo de entrada, después de haberse ingresado el dato
    document.getElementById("nuevoElemento").value = "";
}

//Inicializaremos la función eliminar
function eliminarElemento() {
    //Obtenemos la referencia de la lista donde están los datos guardados
    let lista = document.getElementById("lista");
    //Eliminaremos los datos de la lista
    lista.removeChild(lista.lastChild); //el lastChild nos ayuda a eliminar el último dato que se inserto
}