import userModel from "../../models/userModel.js"

const update = async (req, res) => {
    try{ 
        const user = req.body
        user.id = +req.params.id
        const result = userModel.validateUserToUpdate(user)
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }
        const userEdited = await userModel.edit(user)
        res.json({
            success: `Usuário ${userEdited.id} editado com sucesso!`,
            user: userEdited
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update