const { connection } = require('.//db.js');
document.querySelector('.btn btn-primary').addEventListener('click', verificarLogin);

const verificarLogin = (user,password) => {
    if (user.trim() == 0) return "Usuario Invalido";
    if (password.trim() == 0) return "Contraseña Invalida";
    if (user.length() < 8) return "El usario debe tener minimo 8 caracteres";
    if (password.length() < 10) return "La contraseña debe tener minimo 10 caracteres";
    if(user.length() > 22) return "El usuario es muy largo, maximo 22 caracteres";
    if(password.length() > 50) return "La contraseña es muy larga, maximo 50 caracteres";
    return "Usuario valido \n Contraseña valida";
};