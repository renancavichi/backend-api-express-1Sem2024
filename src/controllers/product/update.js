import productModel from "../../models/productModel.js"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const product = req.body
        const result = await productModel.edit({id, ...product})
        res.json({
            success: `Produto ${id} editado com sucesso!`,
            product: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update