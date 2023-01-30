module.exports = {
    list : async (req, res) => {

        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Lista de Proyectos'
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
                msg : 'Proyecto guardado'
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
                msg : 'Detalle del Proyecto'
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
                msg : 'Proyecto actualizado'
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
                msg : 'Proyecto eliminado'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    addColaborator : async (req, res) => {

        try {
            return res.status(201).json({
                ok : true, 
                msg : 'Colaborador agregado'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    removeColaborator : async (req, res) => {

        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Colaborador eliminado'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },



}