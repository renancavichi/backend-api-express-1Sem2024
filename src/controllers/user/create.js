const create = (req, res) => {
    const user = req.body
    res.json({message: 'Esta é a rota POST /user/', user})
}

export default create