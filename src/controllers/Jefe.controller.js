const JefeCtrl = {}

//importar
const Jefe = require('../models/Jefe.model')
const bcrypt = require('bcryptjs')
//aplicacion de autenticacion
const jwt = require('jsonwebtoken')

//funcionalidad de crear un jefe

JefeCtrl.crearJefe = async(req, res)=>{

    //crear el jefe
    const {nombre,correo,contrasena}=req.body;

    const NuevoJefe = new Jefe({

        nombre,
        correo,
        contrasena
    })

    //validacion de la información
    const correojefe = await Jefe.findOne({correo:correo})

    if(correojefe){
        res.json({
            mensaje:'El correo ya existe'
        })

    }else {
        //incriptada la information
        NuevoJefe.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoJefe._id},'Secreta')
        //guardar
        await NuevoJefe.save()
        //genera una respuesta
        res.json({
            mensaje:'Bienvenido',
            id: NuevoJefe._id,
            nombre:NuevoJefe.nombre,
            token

        })
    }
}

//objeto que se generro
JefeCtrl.login = async (req, res)=>{

    const{correo, contrasena}=req.body;
    //verificacion validacion
    const jefe = await Jefe.findOne({correo:correo})

    if(!jefe){

        return res.json({
            mensaje:'correo incorrecto'

        })
    }
    //generar constante si existe correo
    //comparar contrasena
    const match = await bcrypt.compare(contrasena, jefe.contrasena)
    // si son =
    if(match){

        const token = jwt.sign({_id: jefe._id}, 'Secreta')
        //respuesta
        res.json({
            
            mensaje:'Bienvenido',
            id: jefe._id,
            nombre: jefe.nombre,
            token
        })
    }
    else{
        res.json({

            mensaje:'Contraseña incorresta'
        })

    }

}



module.exports=JefeCtrl
