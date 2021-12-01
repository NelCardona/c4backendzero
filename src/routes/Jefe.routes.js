const { Router } = require('express')
const router = Router()
const JefeCtrl = require('../controllers/Jefe.controller')

//que método
router.post('/crear', JefeCtrl.crearJefe)

// generar la ruta
router.post('/login', JefeCtrl.login)

module.exports = router