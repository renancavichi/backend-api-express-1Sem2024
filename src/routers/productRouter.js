import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'Esta é a rota /product/'})
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota /product/:id '+'ID = '+id})
})

router.post('/', (req, res) => {
    const user = req.body
    res.json({message: 'Esta é a rota POST /product/', user})
})

router.put('/', (req, res) => {
    res.json({message: 'Esta é a rota PUT /product/'})
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota DELETE /product/:id '+'ID = '+id})
})

export default router