const mongoose = require('mongoose');
const {Schema}= mongoose;

//crear un schema
const UsuarioSchema = new Schema({

    //cuestion de empleados datos
    nombres:String,
    apellidos:String,
    cedula:String,
    puesto: String,
    tcontrato: String,
    jefe: String,
    

});

//convertir a modelo
module.exports = mongoose.model('Usuario', UsuarioSchema)
