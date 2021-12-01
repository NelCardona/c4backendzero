
const mongoose = require('mongoose');
const {Schema}= mongoose;

// necesito
const JefeSchema = new Schema({

    nombre: String,
    correo: String,
    contraseña:String,
    
})

//necesito que se exporte
module.exports = mongoose.model('Jefe', JefeSchema )