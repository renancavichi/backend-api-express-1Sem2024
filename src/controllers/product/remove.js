const remove = (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota DELETE /product/:id '+'ID = '+id})
}

export default remove