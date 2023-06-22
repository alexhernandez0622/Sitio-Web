document.addEventListener("DOMContentLoaded", function () 
{
    //Obtenemos las referencias para obtener los datos
    let userForm = document.getElementById("userForm");
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let userList = document.getElementById("userList");

    //Inicialización del evento de envío de los datos
    userForm.addEventListener("submit", function(event) {
        //Evitar la recarga de la página por defecto
        event.preventDefault();

        //Asignar los datos a las variables
        let name = nameInput.value;
        let email = emailInput.value;

        //Haremos un condicional para decirle al usuario que debe diligenciar todos los campos

        if(name==="" || email===""){
            alert("Por favor, completa todos los campos");
            return;
        }

        //Crear un elemento para que me almacene los datos en la lista
        let listItem = document.createElement("li");

        //Haremos que nos almacene y nos muestre los datos en el navegador
        listItem.textContent = name + "(" + email + ")";

        //Queremos almacenar los datos uno por debajo del otro, según su orden de ingreso
        userList.appendChild(listItem);

        //Limpiaremos cada uno de los campos
        nameInput.value="";
        emailInput.value="";
    })
})