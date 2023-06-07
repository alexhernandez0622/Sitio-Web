//Nos ayuda a esperar a que se recargue el contenido del html
document.addEventListener("DOMContentLoaded", function(){

//Referenciar los datos con el DOM del html
const loginForm = document.getElementById("loginForm");
const registrationForm = document.getElementById("registrationForm");

//Aquí estamos especificando que no me envíe los datos, hasta que le demos submit para enviarlo.
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    //Referenciar los datos
    const email= document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    //Verificaremos si el usuario y contraseña coinciden con los datos almacenados en el Local Storage

    //El getitem nos ayuda a traer la información
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    //Comparamos si los datos que se ingresaron son iguales
    if(email === savedEmail && password === savedPassword){
        //Si los datos son correctos, nos aparecerá este pop-up de que los datos son correctos
        Swal.fire({
            icon: 'success',
            title: '!Iniciaste sesión exitosamente',
            text: 'Bienvenido de nuevo al sistema',
            showConfirmButton: false,
            timer: 2000
        }).then(() =>{

        });
        // Sino que nos muestre un pop-up diciendo que los datos son erroneos
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error de inicio de Sesion',
            text:  'El correo electrónico o la contraseña son incorrectos o no existen',
            confirmButtonText: 'Aceptar'
        })
    }
});

//Este código nos ayuda para que los elementos no se sobrecarguen, siempre y cuando le demos click al botón de envíar
registrationForm.addEventListener("submit", function(event){
    event.preventDefault();

    //Referenciar datos
    const name = document.getElementById("registrationName").value;
    const email = document.getElementById("registrationEmail").value;
    const password = document.getElementById("registrationPassword").value;

    // Aquí puedes realizar las validaciones de los datos ingresados

    //Almacenar los datos en el localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    //Crearemos un popup que nos diga que el registro fue exitoso
    Swal.fire({
        icon: 'success',
        title: '!Tu registro fue exitoso',
        text: 'Los datos que ingresaste se guardaron correctamente',
        showConfirmButton: false,
        timer: 2000
    }).then(() => {

    });
  });
});
