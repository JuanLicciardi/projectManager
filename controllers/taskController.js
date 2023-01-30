module.exports = {
    list : async (req, res) => {
        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Lista de Tareas'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    store : async (req, res) => {

        try {
            return res.status(201).json({
                ok : true, 
                msg : 'Tarea guardada'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    detail : async (req, res) => {

        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Detalle de tarea'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    update : async (req, res) => {

        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Tarea actualizada'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    remove : async (req, res) => {

        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Tarea eliminada'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    changeState : async (req, res) => {

        try {
            return res.status(201).json({
                ok : true, 
                msg : 'Tarea completada'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    }



}