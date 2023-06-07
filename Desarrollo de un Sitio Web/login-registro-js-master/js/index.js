// Esta línea de código nos ayuda a darle el acceso al usuario, ya que se encuentra registrado
const user = JSON.parse(localStorage.getItem('login_success')) || false

// Si el usuario no existe, que me redirija al login
if(!user) {
    window.location.href = 'login.html'
}

// Referenciar los datos con el DOM del html
const logout = document.querySelector('#logout')


logout.addEventListener('click', () => {
    alert('Hasta luego, vuelve pronto')
    //Remueve el usuario, para cerrar la sesión
    localStorage.removeItem('login_success')
    window.location.href= 'login.html'
})





