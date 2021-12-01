const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')


// requiero archivo
require('./database')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({ origin: '*'}))

//rutas

app.use('/jefe', require('./routes/Jefe.routes'))

app.use('/empleados', require('./routes/Empleado.routes'))

app.use('/listarempleados', require('./routes/Empleado.routes'))

//app.use('/eliminar', require('./routes/Empleado.routes'))



//puerto

app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), ()=>{

    console.log('app listening on port: ' + app.get('puerto'));
})



