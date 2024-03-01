import userModel from "../../models/userModel.js"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const user = req.body
        const result = await userModel.edit({id, ...user})
        res.json({
            success: `Usuário ${id} editado com sucesso!`,
            user: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update