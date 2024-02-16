const getById = (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota /product/:id '+'ID = '+id})
}

export default getById