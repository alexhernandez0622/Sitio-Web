
//El DOMContentLoaded nos ayuda cargar el html cuándo hallamos ingresado los datos en mi formulario

//Espera a que el contenido del DOM este cargado antes de ejecutarse
document.addEventListener("DOMContentLoaded", function()
{

    // Obtenemos las referencias para obtener los datos
    let userForm = document.getElementById("userForm");
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let userList = document.getElementById("userList");

    //Inicializar el evento de envío de los datos

    //Manejaremos el evento de envío del formulario
    userForm.addEventListener("submit", function(event){
        //Evita la recarga de la pagina por decto
        event.preventDefault();

        //Asignaremos los datos a las variables
        let name = nameInput.value;
        let email = emailInput.value;


        //Haremos un condicional para decirle al usuario que debe diligenciar todos los campos

        if (name==="" || email ===""){
            alert("Por favor, completa todos los campos.");
            return;
        }

        //Creamos un elemento para que me almacene los datos en la lista
        let listItem = document.createElement("li");

        //Necesito que lo almacenes y me lo imprimas en el navegador
        listItem.textContent = name + "(" + email + ")";

        //Lo queremos almacenar un dato por debajo del otro, según su orden de ingreso
        userList.appendChild(listItem);

        //Limpiaremos cada uno de los campos
        nameInput.value="";
        emailInput.value="";

    });
});