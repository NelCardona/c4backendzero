//connection to db
const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/evento'
//para funcionar la db
const options = { useNewUrlParser:true, 
                  useUnifiedTopology:true}

//generar connection db
mongoose.connect(uri, options).then(

    ()=>{ console.log('conectado a db')},
    err=>{ console.log(err)}
);

//exportar
module.exports = mongoose