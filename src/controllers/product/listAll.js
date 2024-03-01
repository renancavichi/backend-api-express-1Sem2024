import productModel from "../../models/productModel.js"

const listAll = async (req, res) => {
    try{
        const products = await productModel.getAll()
        return res.json({
            success: 'Produtos listados com sucesso!',
            products
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default listAll