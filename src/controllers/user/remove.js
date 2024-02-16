const remove = (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota DELETE /user/:id '+'ID = '+id})
}

export default remove