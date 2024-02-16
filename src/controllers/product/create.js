const create = (req, res) => {
    const product = req.body
    res.json({message: 'Esta é a rota POST /product/', product})
}

export default create