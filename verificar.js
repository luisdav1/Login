document.addEventListener('DOMContentLoaded', () => {
    const mostrarMensaje = () => {
        const user = document.querySelector('.user').value;
        const password = document.querySelector('.password').value;
        const check = document.querySelector('.check').checked
        const mensaje = verificarLogin(user,password,check);
        const div = document.getElementById('respuesta');
        div.innerHTML = `<br>${mensaje}</br>`;
        mensaje == "Usuario valido <br> Contraseña valida"? div.style.color = "green": div.style.color = "red";
    }
    document.querySelector('.btn-primary').addEventListener('click', mostrarMensaje);
    const verificarLogin = (user,password,check) => {
        if (user.trim() == 0) return "Usuario Invalido";
        if (password.trim() == 0) return "Contraseña Invalida";
        if(user.indexOf(" ") >= 1 || password.indexOf(" ") >= 1 ) return "Caracteres invalidos"
        if (!validarEmail(user)) return "El usuario debe ser un correo electrónico válido";
        if (!check) return "Tienes que aceptar los terminos y condiciones"
        if (user.length < 8) return "El usario debe tener minimo 8 caracteres";
        if (password.length < 10) return "La contraseña debe tener minimo 10 caracteres";
        if(user.length > 50) return "El usuario es muy largo, maximo 22 caracteres";
        if(password.length > 50) return "La contraseña es muy larga, maximo 50 caracteres";
        return "Usuario valido <br> Contraseña valida";
    };
    const validarEmail = (email) => {
        const expresionRegular = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        return expresionRegular.test(email);
    }
});
