import express from 'express'
import listAll from '../controllers/product/listAll.js'
import getById from '../controllers/product/getById.js'
import create from '../controllers/product/create.js'
import update from '../controllers/product/update.js'
import remove from '../controllers/product/remove.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/', update)
router.delete('/:id', remove)

export default router