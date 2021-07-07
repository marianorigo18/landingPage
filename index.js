const bodyParser = require('body-parser');
var express = require('express');
var app = express();
const User = require('./user');
const Respuesta = require('./response');

let users = []


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/newUser', validarDatos, validarEmail, validarEmailRepetido, function(req, res){
    console.log(req.body)
    users.push(req.body)
    let resp = new Respuesta(false,200,"usuario agregado exitosamente",req.body);

        return res.status(200).send(resp);
})

 app.get('/getUsers', function(req, res){
    let resp = new Respuesta(false,200,"usuarios registrados",users);

    return res.status(200).send(resp);
 })   

app.listen(3000,() =>{
    console.log('server on port 3000')
})

function validarEmail(req, res, next) {
    const { email } = req.body;

    if (email.includes("@gmail.com") || email.includes("@hotmail.com") || email.includes("@yahoo.com")) {

        let resp = new Respuesta(true,500,"email invalido","");

        return res.status(500).send(resp);
    }

    return next();
}

function validarDatos(req, res, next) {
    const {nombre, apellido, edad, email, contraseña, asistencia} = req.body;

    if (!nombre||!apellido||!edad||!email||!contraseña||!asistencia) {

        let resp = new Respuesta(true,500,"porfavor completa todos los campos","");

        return res.status(500).send(resp);
    }

    return next();
}    

function validarEmailRepetido(req, res, next) {
    const { email } = req.body;

    for(let i in users){
        console.log(users[i].email)
        if(email==users[i].email){
     
            let resp = new Respuesta(true,500,"email repetido","");

            return res.status(500).send(resp);
        }
    }
    return next();
}









