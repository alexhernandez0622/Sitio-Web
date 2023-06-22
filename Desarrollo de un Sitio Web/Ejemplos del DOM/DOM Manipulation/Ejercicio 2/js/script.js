//Inicializar la función

function agregarElemento() {

    // Crea un nuevo elemento
     let nuevoElemento = document.createElement("li");

    // Crearemos un elemento para el contenido del elemento li
    // document.createTextNode nos ayuda a ingresar un texto en especifico
    let textoElemento = document.createTextNode("Nuevo Elemento");

    //Vamos añadir el dato creado al elemento li
    //Nos ayuda agregar elementos una por debajo de la otra
    nuevoElemento.appendChild(textoElemento);


    // Obtiene la lista meiante su id
    let lista = document.getElementById("lista")


    //Agrega el nuevo dato a la lista
    lista.appendChild(nuevoElemento);
}