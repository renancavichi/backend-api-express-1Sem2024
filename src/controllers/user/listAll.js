import userModel from "../../models/userModel.js"

const listAll = async (req, res) => {
    try{
        const users = await userModel.getAll()
        return res.json({
            success: 'Usuários listados com sucesso!',
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default listAll