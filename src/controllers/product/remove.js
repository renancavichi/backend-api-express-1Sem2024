import productModel from "../../models/productModel.js"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await productModel.remove(+id)
        res.json({
            success: `Produto ${id} apagado com sucesso!`,
            product: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove