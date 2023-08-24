loginConfirmation = () => {

const user = document.getElementById('user').value
const password = document.getElementById('password').value
const login = document.getElementById('login')
const error = document.createElement('p')


if (user === 'A' && password === '123456789') {
    window.location = 'index.html'

} else {
    error.textContent = 'Usuario o contraseña incorrecta'
    error.style.color = 'red'
    login.appendChild(error)
    
}

}