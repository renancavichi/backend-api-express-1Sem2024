import userModel from "../../models/userModel.js"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await userModel.remove(+id)
        res.json({
            success: `Usuário ${id} apagado com sucesso!`,
            user: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove