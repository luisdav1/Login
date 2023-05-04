document.addEventListener('DOMContentLoaded', () => {
    const mostrarMensaje = () => {
        const user = document.querySelector('.user').value;
        const password = document.querySelector('.password').value;
        const check = document.querySelector('.check').checked
        const mensaje = verificarLogin(user,password,check);
        const div = document.getElementById('respuesta');
        div.innerHTML = `<br>${mensaje}</br>`;
        mensaje == "Valid user <br> Valid password"? div.style.color = "green": div.style.color = "red";
    };
    document.querySelector('.btn-primary').addEventListener('click', mostrarMensaje);
    const verificarLogin = (user,password,check) => {
        if (user.trim() == 0) return "Invalid user" ;
        if (password.trim() == 0) return ;"Invalid password";
        if(user.indexOf(" ") !== -1 || password.indexOf(" ") !== -1 ) return "Invalid characters";
        if (!validarEmail(user)) return "User must be a valid email address";
        if (!check) return "You must accept the terms and conditions" ;
        if (user.length < 8) return "Username must have a minimum of 8 characters";
        if (password.length < 10) return "Password must have a minimum of 10 characters";
        if(user.length > 50) return "Username is too long. Maximum 22 characters";
        if(password.length > 50) return "Password is too long. Maximum 50 characters";
        return "Valid user <br> Valid password";
    };
    const validarEmail = (email) => {
        const expresionRegular = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        return expresionRegular.test(email);
    };
});
