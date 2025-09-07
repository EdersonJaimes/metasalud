// Array de usuarios con roles
const users = [
    { username: 'admin', password: 'admin123', role: 'administrador' },
    { username: 'epide', password: 'epide123', role: 'epide' },
    { username: 'medico', password: 'medico123', role: 'medico' },
    { username: 'paciente', password: 'paciente123', role: 'paciente' }
];

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            console.log('Intentando iniciar sesión...');
            console.log('Usuario:', username);
            console.log('Contraseña:', password);

            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                console.log('Login exitoso:', user);
                redirectToRolePage(user.role);
            } else {
                console.log('Usuario o contraseña incorrectos');
                alert('Usuario o contraseña incorrectos');
            }
        });
    } else {
        console.log('Formulario de login no encontrado');
    }
});

// Función para redirigir según el rol
function redirectToRolePage(role) {
    console.log('Redirigiendo a la página para el rol:', role);

    switch (role) {
        case 'administrador':
            window.location.href = 'administrador.html';
            break;
        case 'epide':
            window.location.href = 'epide.html';
            break;
        case 'medico':
            window.location.href = 'medico.html';
            break;
        case 'paciente':
            window.location.href = 'paciente.html';
            break;
        default:
            alert('Rol no encontrado');
            break;
    }
}