class User{
    constructor(nombre, apellido, edad, email, contraseña, asistencia){
        this._nombre=nombre,
        this._apellido=apellido,
        this._edad=edad,
        this._email=email,
        this._contraseña=contraseña,
        this._asistencia=asistencia;
    }
}
module.exports= User;