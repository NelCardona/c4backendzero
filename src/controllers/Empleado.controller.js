
const EmpleadoCtrl={}

const Empleado = require('../models/Usuario.model')

EmpleadoCtrl.crear = async (req, res)=>{

    
    const {nombres, apellidos, cedula, puesto, tcontratos, jefe}=req.body;

    const NuevoEmpleado = new Empleado({

        nombres, apellidos, cedula, puesto, tcontratos, jefe
    })
    
    const respuesta = await NuevoEmpleado.save()

    res.json({

        mensaje: 'Empleado Creado',
        respuesta
    })

}

EmpleadoCtrl.listar=async(req, res)=>{

    const respuesta = await Empleado.find() 
    res.json(respuesta)
}

EmpleadoCtrl.listarid=async(req, res)=>{
    //me trae desde el cliente
    const id = req.params.id; 
    const respuesta = await Empleado.findOne({_id:id})
    res.json(respuesta)
}
//a mis empleados
EmpleadoCtrl.empleadoDeunjefe = async(req, res)=>{
    //obteniendo id del cliente
    const id = req.params.id;
    const respuesta = await Empleado.find({jefe:id})
    res.json(respuesta)
}

EmpleadoCtrl.eliminar = async(req,res)=>{

    const id = req.params.id;
    await Empleado.findByIdAndRemove({_id:id})

    res.json({
        mensaje:'Empleado eliminado'
    })
}


EmpleadoCtrl.actualizar=async(req,res)=>{

    const id = req.params.id;
    await Empleado.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje:'Empleado actualizado'
    })
}


EmpleadoCtrl.buscarEmpleado = async(req, res)=>{
    //nombre y id del jefe
    const {nombres, id}=req.params
    const respuesta = await Empleado.find(
        {nombres:{$regex:".*"+nombres+".*"},jefe:id})
        //despues de buscar genera una respuesta
        res.json(respuesta)

}    

module.exports=EmpleadoCtrl