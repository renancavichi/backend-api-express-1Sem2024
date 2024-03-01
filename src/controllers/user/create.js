import userModel from "../../models/userModel.js"
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

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
        const newUser = await userModel.create(user)
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