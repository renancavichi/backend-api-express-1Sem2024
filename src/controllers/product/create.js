import productModel from "../../models/productModel.js"

const create = async (req, res) => {
    try{
        const product = req.body
        const newProduct = await productModel.create(product)
        return res.json({
            success: `Produto ${newProduct.id} criado com sucesso!`,
            product: newProduct
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create