module.exports = {
    register : async (req, res) => {

        

        try {

            const {name, email, password} = req.body;

            if([name,email,password].includes("")){
                let error = new Error ("Todos los campos son Obligatorios");
                error.status = 400
                throw error
            }

            return res.status(201).json({
                ok : true, 
                msg : 'Usuario Registrado'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    login : async (req, res) => {

        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Usuario Logueado'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    checked : async (req, res) => {

        try {
            return res.status(201).json({
                ok : true, 
                msg : 'Usuario Chequeado'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    sendToken : async (req, res) => {

        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Token enviado'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    verifyToken : async (req, res) => {

        try {
            return res.status(200).json({
                ok : true, 
                msg : 'Token Verificado'
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upsss, Hubo un error' 
            })
        }
    },
    changePassword : async (req, res) => {

        try {
            return res.status(201).json({
                ok : true, 
                msg : 'Password actualizado'
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