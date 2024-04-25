import userModel from "../../models/userModel.js"
import zodErrorFormat from "../../helpers/zodErrorFormat.js"
import bcrypt from 'bcrypt'

const create = async (req, res) => {
    try{
        const user = req.body
        const result = userModel.validateUserToCreate(user)
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }
        result.data.pass = await bcrypt.hash(result.data.pass, 10)
        const newUser = await userModel.create(result.data)
        return res.json({
            success: `Usuário ${newUser.id} criado com sucesso!`,
            user: newUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create