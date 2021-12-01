const {Router} = require('express')
const router = Router()

const EmpleadoCtrl = require('../controllers/Empleado.controller')

router.post('/crear', EmpleadoCtrl.crear)


router.get('/listarEmpleados', EmpleadoCtrl.listar)

router.get('/listar/:id', EmpleadoCtrl.listarid)

router.get('/listarEmpleadosjefe/:id', EmpleadoCtrl.empleadoDeunjefe)

router.delete('/eliminar/:id', EmpleadoCtrl.eliminar)

router.put('/actualizar/:id', EmpleadoCtrl.actualizar)
//parametros nombres y id
router.get('/buscar/:nombres/:id',EmpleadoCtrl.buscarEmpleado)

module.exports=router

