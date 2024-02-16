import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const user = req.body
    res.json({message: 'Esta é a rota GET /user/', user})
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota /user/:id '+'ID = '+id})
})

router.post('/', (req, res) => {
    const user = req.body
    res.json({message: 'Esta é a rota POST /user/', user})
})

router.put('/', (req, res) => {
    res.json({message: 'Esta é a rota PUT /user/'})
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota DELETE /user/:id '+'ID = '+id})
})

export default router